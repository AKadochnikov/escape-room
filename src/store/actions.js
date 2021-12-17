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

export const loadActiveQuest = (quest) => ({
  type: ACTION_TYPE.loadActiveQuest,
  payload: {
    quest,
  }
})

export const resetActiveQuest = () => ({
  type: ACTION_TYPE.resetActiveQuest,
})

export const updatePostOrderStatus = (status) => ({
  type: ACTION_TYPE.updatePostOrderStatus,
  payload: {
    status,
  }
})
