export const APP_ROUTE = {
  home: '/',
  quest: '/quest',
  contacts: '/contacts',
  notFound: '/404',
  detailedQuest: '/quest/:id'
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
}

export const ACTION_TYPE = {
  loadQuests: 'data/loadQuests',
  changeQuestType: 'user/changeQuestType',
  loadActiveQuest: 'data/loadActiveQuest',
  resetActiveQuest: 'data/resetActiveQuest',
  updatePostOrderStatus: 'data/updatePostOrderStatus',
}

export const NAME_SPACE = {
  data: 'DATA',
}

export const API_ROUTE = {
  quests: 'http://localhost:3001/quests',
  currentQuest: 'http://localhost:3001/quests/',
  postOrder: 'http://localhost:3001/orders',
}

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
}

export const POST_ORDER_STATUS = {
  posting: 'posting',
  ready: 'ready',
  success: 'success',
}

export const POST_ORDER_FAIL_MESSAGE = 'Отправка не удалась. Попробуйте еще раз';
export const POST_ORDER_SUCCESS_MESSAGE = 'Заявка успешно отправлена';


