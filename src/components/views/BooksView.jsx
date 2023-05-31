import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// import * as bookShelfAPI from '../../services/bookshelf-api';

import { booksOperation, booksSelectors } from 'redux/books';
import PageHeading from '../PageHeading/PageHeading';

function BooksView() {
  // const [books, setBooks] = useState(null);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   bookShelfAPI.fetchBooks().then(setBooks);
  // }, []);
  useEffect(() => {
    dispatch(booksOperation.fetchBooks());
  }, [dispatch]);

  const books = useSelector(booksSelectors.getBooks);

  return (
    <>
      <PageHeading>Книги</PageHeading>

      {books.length > 0 && (
        <ul>
          {books.map(book => (
            <li key={book.id}>
              <Link
                to={{
                  pathname: `${book.id}`,
                  state: { fromBooksView: true },
                }}
              >
                {book.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
      <hr />
    </>
  );
}
export default BooksView;
