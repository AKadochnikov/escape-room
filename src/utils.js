import { LEVELS } from './const';
export const humanizeLevel = (item) => {
  switch (item.level) {
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
