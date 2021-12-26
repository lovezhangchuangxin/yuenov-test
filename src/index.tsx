import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { PageMain } from './js/pageMain';
import { BookShelf } from './js/BookShelf';
import { BookSearch } from './js/BookSearch';
import { BookStore } from './js/BookStore';
import { BookRead } from './js/BookRead';
import { BookContent } from './js/BookContent';
import { Me } from './components/me';
import './css/index.css';
import { BrowserRouter, Router, Route, Routes, Link, HashRouter } from 'react-router-dom';
if (localStorage.getItem('history') == null) {
    localStorage.setItem('history', JSON.stringify([]));
}
class Main extends React.Component {
    render() {
        return (
            <>
                <PageMain />
                <BookShelf />
                <BookSearch />
                <BookStore />
            </>
        );
    }
}

ReactDOM.render(
    <div>
        <HashRouter>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/bookread" element={<BookRead />} />
                <Route path="/bookcontent" element={<BookContent />} />
                <Route path="/me" element={<Me />} />
            </Routes>
        </HashRouter>
    </div>,
    document.getElementById('root'),
);
