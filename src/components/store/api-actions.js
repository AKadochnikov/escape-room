import { API_ROUTE } from '../../const';
import { loadQuests } from './actions';

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


