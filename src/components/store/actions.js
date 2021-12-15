import { ACTION_TYPE } from '../../const';

export const loadQuests = (quests) => ({
  type: ACTION_TYPE.loadQuests,
  payload: {
    quests,
  }
})
