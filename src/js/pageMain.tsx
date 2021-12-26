import React, { Component } from 'react';
import { containerLoad, bookshelfLoad, bookstoreLoad, func_init, search } from './func';
import { Link } from 'react-router-dom';
class PageMain extends Component {
    componentDidMount() {
        func_init();
    }
    render() {
        return (
            <div className="container">
                <h1 id="title">小说汇</h1>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <input type="text" className="searchBox" placeholder="What to read today..." />
                    <div className="search" onClick={search}>
                        搜索
                    </div>
                </div>

                <div className="chooseLine">
                    <div className="chooseBtn" onClick={bookshelfLoad}>
                        书架
                    </div>
                    <div className="chooseBtn">发现</div>
                    <div className="chooseBtn">书城(未做完)</div>
                    <Link to="/me" className="chooseBtn">
                        我的
                    </Link>
                </div>
                <footer className="intro">小说汇--一个轻量级的小说阅读网站</footer>
            </div>
        );
    }
}

export { PageMain };
