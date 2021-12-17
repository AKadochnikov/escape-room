import { QUEST, ACTION_TYPE, POST_ORDER_STATUS } from '../../const';

const initialState = {
  questType: QUEST.all.name,
  quests: [],
  isDataLoaded: false,
  activeQuest: null,
  isActiveQuestLoaded: false,
  postOrderStatus: POST_ORDER_STATUS.ready
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

    case ACTION_TYPE.updatePostOrderStatus: {
      const {status} = action.payload;
      return {...state,
        postOrderStatus: status,
      }
    }

    default:
      return state;
  }
}

export {data};
