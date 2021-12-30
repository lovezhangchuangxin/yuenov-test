import React, { Component } from 'react';
import axios from 'axios';
axios.defaults.baseURL = '//yuenov.com:17777';
let chapterIds: string[];
axios.defaults.transformResponse = [
    function (data) {
        chapterIds = data.match(/(\d{19})/gm);
        return JSON.parse(data);
    },
];

class BookRead extends Component {
    componentDidMount() {
        const bookId = Number(location.href.split('?')[1].split('=')[1]);
        const historyTmp = localStorage.getItem('history');
        const history = historyTmp ? JSON.parse(historyTmp) : null;
        if (history.indexOf(bookId) == -1) {
            history.push(bookId);
        }
        localStorage.setItem('history', JSON.stringify(history));
        axios({
            method: 'GET',
            url: '/app/open/api/chapter/getByBookId',
            params: {
                bookId: bookId,
            },
        })
            .then((value) => {
                document.querySelector('h1')!.innerHTML = value.data.data.title;
                const chapters = value.data.data.chapters;
                let lis = '';
                chapters.forEach((chapter, index) => {
                    lis += `
                    <li>
                        <p>
                            <a href="${
                                '#/bookcontent?bookId=' + bookId + '&id=' + chapterIds[index] + '&v=' + chapter.v
                            }">
                                ${chapter.name}
                            </a>
                        </p>
                    </li>
                `;
                });
                document.querySelector('ul')!.innerHTML = lis;
            })
            .catch((reason) => {
                console.log(reason);
                alert('请求失败,请稍后再试');
            });
    }
    render() {
        return (
            <>
                <h1></h1>
                <section id="chapters_ssection">
                    <ul className="menu"></ul>
                </section>
            </>
        );
    }
}

export { BookRead };
