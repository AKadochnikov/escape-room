export const POST_ORDER_FAIL_MESSAGE = 'Отправка не удалась. Попробуйте еще раз';
export const POST_ORDER_SUCCESS_MESSAGE = 'Заявка успешно отправлена';
export const MARKER = '/img/pin-map.svg';

export const LOCATION = {
  latitude: 59.96815,
  longitude: 30.31650,
  zoom: 50,
};

export const AppRoute = {
  Home: '/',
  Quest: '/quest',
  Contacts: '/contacts',
  NotFound: '/404',
  DetailedQuest: '/detailed-quest'
};

export const QUEST = {
  all: {
    name: 'all',
    russian: 'Все'
  },
  horror: {
    name: 'horror',
    russian: 'Ужасы'
  },
  adventures: {
    name: 'adventures',
    russian: 'Приключения'
  },
  mystic: {
    name: 'mystic',
    russian: 'Мистика'
  },
  detective: {
    name: 'detective',
    russian: 'Детектив'
  },
  sciFi: {
    name: 'sci-fi',
    russian: 'Sci-fi'
  },
};

export const ActionType = {
  LoadQuests: 'data/loadQuests',
  ChangeQuestType: 'user/changeQuestType',
  LoadActiveQuest: 'data/loadActiveQuest',
  ResetActiveQuest: 'data/resetActiveQuest',
  UpdatePostOrderStatus: 'data/updatePostOrderStatus',
};

export const NameSpace = {
  Data: 'DATA',
};

export const ApiRoute = {
  Quests: 'http://localhost:3001/quests',
  CurrentQuest: 'http://localhost:3001/quests/',
  PostOrder: 'http://localhost:3001/orders',
};

export const LEVELS = {
  easy: {
    name: 'easy',
    russian: 'Простой',
  },
  medium: {
    name: 'medium',
    russian: 'Средний',
  },
  hard: {
    name: 'hard',
    russian: 'Сложный',
  },
};

export const PostOrderStatus = {
  Posting: 'posting',
  Ready: 'ready',
  Success: 'success',
};



