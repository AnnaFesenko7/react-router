import { createReducer, combineReducers } from '@reduxjs/toolkit';
import * as bookActions from './bookActions';

const entities = createReducer([], {
  [bookActions.fetchBooksSuccess]: (_, action) => action.payload,
});

const isLoading = createReducer(false, {
  [bookActions.fetchBooksRequest]: () => true,
  [bookActions.fetchBooksSuccess]: () => false,
  [bookActions.fetchBooksError]: () => false,
});

const error = createReducer(null, {
  [bookActions.fetchBooksError]: (_, action) => action.payload,
  [bookActions.fetchBooksRequest]: () => null,
});

export const booksReducer = combineReducers({
  entities,
  isLoading,
  error,
});
