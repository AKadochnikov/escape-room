import { QUEST, ACTION_TYPE } from '../../../const';

const initialState = {
  questType: QUEST.all,
  quests: [],
  isDataLoaded: false,
}

const data = (state = initialState, action) => {
  switch (action.type) {

    case ACTION_TYPE.loadQuests: {
      const {quests} = action.payload;
      return {...state,
        quests: quests,
        isDataLoaded: true,
      }
    }

    default:
      return state;
  }
}

export {data};
