import { combineReducers } from '@reduxjs/toolkit';
import { NAME_SPACE } from '../const';
import { data } from './data/data';

export const rootReducer = combineReducers({
  [NAME_SPACE.data]: data,
})
