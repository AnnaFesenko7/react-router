import Container from './Container/Container';
import AppBar from './Appbar/Appbar';
import { Routes, Route } from 'react-router-dom';
import HomeView from './views/HomeView';
import AuthorsView from './views/AuthorsView';
import { AuthorSubView } from './views/AuthorSubView';
import BooksView from './views/BooksView';
import NotFound from './NotFound/NotFound';
import BookDetailsView from './views/BookDetailsView';
// import { Layout } from 'components/Layout/Layout';

export const App = () => {
  return (
    <>
      <Container>
        <AppBar />

        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="authors" element={<AuthorsView />}>
            <Route path=":authorId" element={<AuthorSubView />} />
          </Route>
          <Route path="books" element={<BooksView />} />
          <Route path="books/:bookId" element={<BookDetailsView />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        {/* <Routes>
          <Route path="/home" element={<HomeView />} />
          <Route path="/authors" element={<AuthorsView />} />
          <Route path=":authorsId" element={<AuthorSubView />} />
          <Route path="/books" element={<BooksView />} />
          <Route path="/books/:bookId" element={<BookDetailsView />} />
          <Route path="*" element={<NotFound />} />
        </Routes> */}
      </Container>
    </>
  );
};
