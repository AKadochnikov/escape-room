import { QUEST, ActionType, PostOrderStatus } from '../../const';

const initialState = {
  questType: QUEST.all.name,
  quests: [],
  isDataLoaded: false,
  activeQuest: null,
  isActiveQuestLoaded: false,
  postOrderStatus: PostOrderStatus.Ready
}

const data = (state = initialState, action) => {
  switch (action.type) {

    case ActionType.LoadQuests: {
      const {quests} = action.payload;
      return {...state,
        quests: quests,
        isDataLoaded: true,
      }
    }

    case ActionType.ChangeQuestType: {
      const {type} = action.payload;
      return {...state,
      questType: type,
      }
    }

    case ActionType.ResetActiveQuest: {
      return {...state,
        activeQuest: null,
        isActiveQuestLoaded: false,
      }
    }

    case ActionType.LoadActiveQuest: {
      const {quest} = action.payload;
      return {...state,
        activeQuest: quest,
        isActiveQuestLoaded: true,
      }
    }

    case ActionType.UpdatePostOrderStatus: {
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
