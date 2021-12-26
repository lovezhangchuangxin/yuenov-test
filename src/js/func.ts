let container: HTMLDivElement;
let bookshelf: HTMLDivElement;
let bookStore: HTMLDivElement;
let bookSearch: HTMLDivElement;
import axios from 'axios';
axios.defaults.baseURL = 'http://yuenov.com:15555';
function search() {
    container.style.display = 'none';
    bookshelf.style.display = 'none';
    bookStore.style.display = 'none';
    bookSearch.style.display = 'block';
    const textContent: HTMLInputElement = <HTMLInputElement>document.getElementsByClassName('searchBox')[0];
    if (textContent.value) {
        axios({
            method: 'GET',
            url: '/app/open/api/book/search',
            params: {
                keyWord: textContent.value,
                pageNum: 1,
                pageSize: 10,
            },
        })
            .then((value) => {
                console.log(value.data);
                const list = value.data.data.list;
                let contents = '';
                list.forEach((item) => {
                    contents += `
                    <div class="book" data-bookid=${item.bookId}>
                            <img class="cover" src="${'http://pt.yuenov.com:15555' + item.coverImg}"></img>
                            <div class="bookIntro">
                                <h3 class="title">${item.title}</h3>
                                <h4 class="author">${item.author}</h4>
                                <p class="desc">
                                    ${item.desc}
                                </p>
                            </div>
                    </div>
                `;
                });
                document.getElementById('searchTest')!.innerHTML = contents;

                const search_content_lis = document.getElementsByClassName('book');
                Array.from(search_content_lis).forEach((book) => {
                    book.addEventListener('click', () => {
                        const bookId = (<HTMLDivElement>book).dataset.bookid;
                        location.href = `./#/bookread?bookId=${bookId}`;
                    });
                });
            })
            .catch((reason) => {
                alert('查找失败!');
                console.log(reason);
            });
    }
}
function func_init() {
    container = <HTMLDivElement>document.getElementsByClassName('container')[0];
    bookshelf = <HTMLDivElement>document.getElementsByClassName('bookshelf')[0];
    bookStore = <HTMLDivElement>document.getElementsByClassName('bookStore')[0];
    bookSearch = <HTMLDivElement>document.getElementsByClassName('bookSearch')[0];
}

console.log('1: ', document.getElementsByClassName('container')[0]);

function containerLoad() {
    container.style.display = 'block';
    bookshelf.style.display = 'none';
    bookStore.style.display = 'none';
    bookSearch.style.display = 'none';
}
function bookshelfLoad() {
    container.style.display = 'none';
    bookshelf.style.display = 'block';
    bookStore.style.display = 'none';
    bookSearch.style.display = 'none';
}
function bookstoreLoad() {
    container.style.display = 'none';
    bookshelf.style.display = 'none';
    bookStore.style.display = 'block';
    bookSearch.style.display = 'none';
}
export { containerLoad, bookshelfLoad, bookstoreLoad, func_init, search };
