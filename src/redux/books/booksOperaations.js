import { createAsyncThunk } from '@reduxjs/toolkit';

// import * as bookActions from './bookActions';
import * as bookShelf from 'services/bookshelf-api';

// export const fetchBooks = () => async dispatch => {
//   dispatch(bookActions.fetchBooksRequest());
//   try {
//     const books = await bookShelf.fetchBooks();
//     dispatch(bookActions.fetchBooksSuccess(books));
//   } catch (error) {
//     dispatch(bookActions.fetchBooksError(error));
//   }
// };

export const fetchBooks = createAsyncThunk(
  'books/fetchBooks',
  async (_, { rejectWithValue }) => {
    try {
      const books = await bookShelf.fetchBooks();
      return books;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
