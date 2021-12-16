import { API_ROUTE } from '../const';
import { loadQuests, loadActiveQuest, resetActiveQuest } from './actions';

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
