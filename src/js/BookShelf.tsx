import React, { Component } from 'react';
import './func';
import { containerLoad, bookshelfLoad, bookstoreLoad, func_init } from './func';
import axios from 'axios';
axios.defaults.baseURL = 'http://yuenov.com:17777';

class BookShelf extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         containerLoad: containerLoad,
    //     };
    //     this.containerLoad = containerLoad.bind(this);
    // }
    componentDidMount() {
        func_init();

        const historyTmp = localStorage.getItem('history');
        const history = historyTmp ? JSON.parse(historyTmp) : null;
        let contents = '';
        for (const bookId of history) {
            axios({
                method: 'GET',
                url: '/app/open/api/chapter/getByBookId',
                params: {
                    bookId: Number(bookId),
                },
            })
                .then((value) => {
                    contents += `
            <div class="book" data-bookid=${value.data.data.bookId}>
            <img class="cover" src="${'http://pt.yuenov.com:15555' + value.data.data.coverImg}"></img>
            <div class="bookIntro">
                <h3 class="title">${value.data.data.title}</h3>
                <h4 class="author">${value.data.data.author}</h4>
                <p class="desc">
                    ${value.data.data.desc}
                </p>
            </div>
    </div>
            `;
                    alert('历史记录请求成功!');
                    document.getElementById('historyBook')!.innerHTML += contents;
                })
                .catch((reason) => {
                    console.log(reason);
                    // alert('请求失败,请稍后再试');
                });
        }
    }
    render() {
        return (
            <div className="bookshelf">
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
                    <div style={{ marginTop: '50px' }} id="historyBook"></div>
                </div>
            </div>
        );
    }
}

export { BookShelf };
