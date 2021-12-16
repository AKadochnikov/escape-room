import { LEVELS } from './const';
import { QUEST } from './const';

export const humanizeLevel = (level) => {
  switch (level) {
    case LEVELS.easy.name: {
      return LEVELS.easy.russian;
    }
    case LEVELS.medium.name: {
      return LEVELS.medium.russian;
    }
    case LEVELS.hard.name: {
      return LEVELS.hard.russian;
    }
    default: {
      break;
    }
  }
}

export const humanizeType = (type) => {
  switch (type) {
    case QUEST.adventures.name: {
      return QUEST.adventures.russian;
    }
    case QUEST.horror.name: {
      return QUEST.horror.russian;
    }
    case QUEST.mystic.name: {
      return QUEST.mystic.russian;
    }
    case QUEST.detective.name: {
      return QUEST.detective.russian;
    }
    case QUEST.sciFi.name: {
      return QUEST.sciFi.russian;
    }
    default: {
      break;
    }
  }
}
