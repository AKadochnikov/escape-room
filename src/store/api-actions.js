import { ApiRoute, PostOrderStatus, POST_ORDER_FAIL_MESSAGE, POST_ORDER_SUCCESS_MESSAGE } from '../const';
import { loadQuests, loadActiveQuest, resetActiveQuest, updatePostOrderStatus } from './actions';
import { toast } from 'react-toastify';

export const fetchQuestsAction = () =>
  async (dispatch) => {
    fetch(ApiRoute.Quests)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        dispatch(loadQuests(data));
      });
  };

export const fetchActiveQuestAction = (id) =>
  async (dispatch) => {
  dispatch(resetActiveQuest());
  fetch(`${ApiRoute.CurrentQuest}${id}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      dispatch(loadActiveQuest(data));
    });
  }

export const postOrderAction = (data) =>
  async (dispatch) => {
    fetch(ApiRoute.PostOrder, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: new Headers({'Content-Type': 'application/json'})
    })
      .then(()=> {
        dispatch(updatePostOrderStatus(PostOrderStatus.Success));
        toast.info(POST_ORDER_SUCCESS_MESSAGE);
      })
      .catch(()=> {
        dispatch(updatePostOrderStatus(PostOrderStatus.Ready));
        toast.info(POST_ORDER_FAIL_MESSAGE);
      })
  }
