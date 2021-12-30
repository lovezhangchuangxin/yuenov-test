import React, { Component } from 'react';
import axios from 'axios';
axios.defaults.baseURL = '//yuenov.com:15555';
class BookContent extends Component {
    componentDidMount() {
        const url_query = location.href.split('?')[1].split('&');
        const bookId = Number(url_query[0].split('=')[1]);
        const chapterId = url_query[1].split('=')[1];
        const v = Number(url_query[2].split('=')[1]);

        axios({
            method: 'POST',
            url: '/app/open/api/chapter/get',
            data: {
                bookId: bookId,
                chapterIdList: [chapterId],
                v: v,
            },
        })
            .then((value) => {
                const list = value.data.data.list[0];
                document.querySelector('h1')!.innerHTML = list.name;
                let lis = '';
                const contents = list.content.split('\n');
                contents.forEach((item) => {
                    lis += `
                    <li>
                        <p>${item}</p>    
                    </li>
                `;
                });
                document.querySelector('ul')!.innerHTML = lis;
            })
            .catch((reason) => {
                console.log(reason);
            });
    }
    render() {
        return (
            <>
                <h1></h1>
                <section id="content">
                    <ul></ul>
                </section>
            </>
        );
    }
}

export { BookContent };
