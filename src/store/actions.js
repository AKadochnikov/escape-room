import { ActionType } from '../const';

export const loadQuests = (quests) => ({
  type: ActionType.LoadQuests,
  payload: {
    quests,
  }
})

export const changeQuestType = (type) => ({
  type: ActionType.ChangeQuestType,
  payload: {
    type,
  },
})

export const loadActiveQuest = (quest) => ({
  type: ActionType.LoadActiveQuest,
  payload: {
    quest,
  }
})

export const resetActiveQuest = () => ({
  type: ActionType.ResetActiveQuest,
})

export const updatePostOrderStatus = (status) => ({
  type: ActionType.UpdatePostOrderStatus,
  payload: {
    status,
  }
})
