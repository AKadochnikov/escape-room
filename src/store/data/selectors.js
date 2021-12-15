import { NAME_SPACE } from '../../const';
import { createSelector } from '@reduxjs/toolkit';
import { QUEST } from '../../const';

export const getQuests = (state) => state[NAME_SPACE.data].quests;
export const getQuestType = (state) => state[NAME_SPACE.data].questType;
export const getIsDataLoaded = (state) => state[NAME_SPACE.data].isDataLoaded;

export const getFilteredQuests = createSelector(
  [getQuests, getQuestType],
  (quests, questType) => {
    if (questType === QUEST.all) {
      return quests;
    }
    return quests.slice().filter((item)=> item.type === questType);
  }
)
