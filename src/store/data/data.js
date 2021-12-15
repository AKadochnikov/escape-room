import { QUEST, ACTION_TYPE } from '../../const';

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

    case ACTION_TYPE.changeQuestType: {
      const {type} = action.payload;
      return {...state,
      questType: type,
      }
    }

    default:
      return state;
  }
}

export {data};
