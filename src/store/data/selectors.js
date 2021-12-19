import { NameSpace } from '../../const';
import { createSelector } from '@reduxjs/toolkit';
import { QUEST } from '../../const';

export const getQuests = (state) => state[NameSpace.Data].quests;
export const getQuestType = (state) => state[NameSpace.Data].questType;
export const getIsDataLoaded = (state) => state[NameSpace.Data].isDataLoaded;
export const getActiveQuest = (state) => state[NameSpace.Data].activeQuest;
export const getIsActiveQuestLoaded = (state) => state[NameSpace.Data].isActiveQuestLoaded;
export const getPostOrderStatus = (state) => state[NameSpace.Data].postOrderStatus;

export const getFilteredQuests = createSelector(
  [getQuests, getQuestType],
  (quests, questType) => {
    if (questType === QUEST.all.name) {
      return quests;
    }
    return quests.slice().filter((item)=> item.type === questType);
  }
)
