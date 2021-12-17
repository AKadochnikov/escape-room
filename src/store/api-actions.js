import { API_ROUTE, POST_ORDER_STATUS, POST_ORDER_FAIL_MESSAGE, POST_ORDER_SUCCESS_MESSAGE } from '../const';
import { loadQuests, loadActiveQuest, resetActiveQuest, updatePostOrderStatus } from './actions';
import { toast } from 'react-toastify';

export const fetchQuestsAction = () =>
  async (dispatch) => {
    fetch(API_ROUTE.quests)
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
  fetch(`${API_ROUTE.currentQuest}${id}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      dispatch(loadActiveQuest(data));
    });
  }

export const postOrderAction = (data) =>
  async (dispatch) => {
    fetch(API_ROUTE.postOrder, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: new Headers({'Content-Type': 'application/json'})
    })
      .then(()=> {
        dispatch(updatePostOrderStatus(POST_ORDER_STATUS.success));
        toast.info(POST_ORDER_SUCCESS_MESSAGE);
      })
      .catch(()=> {
        dispatch(updatePostOrderStatus(POST_ORDER_STATUS.ready));
        toast.info(POST_ORDER_FAIL_MESSAGE);
      })
  }
