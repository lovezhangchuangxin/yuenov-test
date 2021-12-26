import React, { Component } from 'react';
import './func';
import { containerLoad, bookshelfLoad, bookstoreLoad, func_init } from './func';
import { Link } from 'react-router-dom';

class BookSearch extends Component {
    componentDidMount() {
        func_init();
    }
    render() {
        return (
            <div className="bookSearch">
                <header className="switchPage">
                    <div className="chooseBtn" onClick={containerLoad}>
                        主页
                    </div>
                    <div className="chooseBtn" onClick={bookshelfLoad}>
                        书架
                    </div>
                    <div className="chooseBtn">发现</div>
                    <div className="chooseBtn" onClick={bookstoreLoad}>
                        书城
                    </div>
                    <div className="chooseBtn">我的</div>
                </header>
                <div className="bookDiscovery">
                    <input type="text" className="searchBox" />
                    <div style={{ marginTop: '50px' }} id="searchTest"></div>
                </div>
            </div>
        );
    }
}

export { BookSearch };
