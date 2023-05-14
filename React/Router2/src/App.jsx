import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/UI/Header';
import Home from './components/Page/Home';
import BooksPage from './components/Page/BooksPage';
import BookInfo from './components/Page/BookInfo'
import AddNewBook from './components/Page/AddNewBook';

const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route index element={<Home />} />

        <Route path='/books'>
          <Route index element={<BooksPage />} />
          <Route path='newBook' element={<AddNewBook />} />
          <Route path=':id' element={<BookInfo />} />
        </Route>

        <Route path='*' element={<h1>Error 404</h1>} />
      </Routes>


    </>
  );
}

export default App;
