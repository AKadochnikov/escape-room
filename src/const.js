export const APP_ROUTE = {
  home: '/',
  quest: '/quest',
  contacts: '/contacts',
  notFound: '/404',
  detailedQuest: '/quest/:id'
};

export const QUEST = {
  all: 'all',
  horror: 'horror',
  adventures: 'adventures',
  mystic: 'mystic',
  detective: 'detective',
  sciFi: 'sci-fi'
}

export const ACTION_TYPE = {
  loadQuests: 'data/loadQuests',
  changeQuestType: 'user/changeQuestType',
  loadActiveQuest: 'data/loadActiveQuest',
  resetActiveQuest: 'data/resetActiveQuest'
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
    russian: 'Простой'
  },
  medium: {
    name: 'medium',
    russian: 'Средний'
  },
  hard: {
    name: 'hard',
    russian: 'Сложный'
  },
}
