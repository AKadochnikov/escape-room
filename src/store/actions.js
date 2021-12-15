import { ACTION_TYPE } from '../const';

export const loadQuests = (quests) => ({
  type: ACTION_TYPE.loadQuests,
  payload: {
    quests,
  }
})

export const changeQuestType = (type) => ({
  type: ACTION_TYPE.changeQuestType,
  payload: {
    type,
  },
})
