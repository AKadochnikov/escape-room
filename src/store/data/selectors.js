import { NAME_SPACE } from '../../const';
import { createSelector } from '@reduxjs/toolkit';
import { QUEST } from '../../const';

export const getQuests = (state) => state[NAME_SPACE.data].quests;
export const getQuestType = (state) => state[NAME_SPACE.data].questType;
export const getIsDataLoaded = (state) => state[NAME_SPACE.data].isDataLoaded;
export const getActiveQuest = (state) => state[NAME_SPACE.data].activeQuest;
export const getIsActiveQuestLoaded = (state) => state[NAME_SPACE.data].isActiveQuestLoaded;
export const getPostOrderStatus = (state) => state[NAME_SPACE.data].postOrderStatus;

export const getFilteredQuests = createSelector(
  [getQuests, getQuestType],
  (quests, questType) => {
    if (questType === QUEST.all.name) {
      return quests;
    }
    return quests.slice().filter((item)=> item.type === questType);
  }
)
