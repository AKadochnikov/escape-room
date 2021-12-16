import { QUEST, ACTION_TYPE } from '../../const';

const initialState = {
  questType: QUEST.all,
  quests: [],
  isDataLoaded: false,
  activeQuest: null,
  isActiveQuestLoaded: false,
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

    case ACTION_TYPE.resetActiveQuest: {
      return {...state,
        activeQuest: null,
        isActiveQuestLoaded: false,
      }
    }

    case ACTION_TYPE.loadActiveQuest: {
      const {quest} = action.payload;
      return {...state,
        activeQuest: quest,
        isActiveQuestLoaded: true,
      }
    }

    default:
      return state;
  }
}

export {data};
