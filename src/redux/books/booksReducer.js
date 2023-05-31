import { createReducer, combineReducers } from '@reduxjs/toolkit';
// import * as bookActions from './bookActions';
import { fetchBooks } from './booksOperaations';

const entities = createReducer([], {
  // [bookActions.fetchBooksSuccess]: (_, action) => action.payload,
  [fetchBooks.fulfilled]: (_, action) => action.payload,
});

const isLoading = createReducer(false, {
  // [bookActions.fetchBooksRequest]: () => true,
  // [bookActions.fetchBooksSuccess]: () => false,
  // [bookActions.fetchBooksError]: () => false,
  [fetchBooks.pending]: () => true,
  [fetchBooks.fulfilled]: () => false,
  [fetchBooks.rejected]: () => false,
});

const error = createReducer(null, {
  // [bookActions.fetchBooksError]: (_, action) => action.payload,
  // [bookActions.fetchBooksRequest]: () => null,
  [fetchBooks.rejected]: (_, action) => action.payload,
  [fetchBooks.pending]: () => null,
});

export const booksReducer = combineReducers({
  entities,
  isLoading,
  error,
});
