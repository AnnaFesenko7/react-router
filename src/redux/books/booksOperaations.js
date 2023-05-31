import * as bookActions from './bookActions';
import * as bookShelf from 'services/bookshelf-api';

export const fetchBooks = () => async dispatch => {
  dispatch(bookActions.fetchBooksRequest());
  try {
    const books = await bookShelf.fetchBooks();
    dispatch(bookActions.fetchBooksSuccess(books));
  } catch (error) {
    dispatch(bookActions.fetchBooksError(error));
  }
};
