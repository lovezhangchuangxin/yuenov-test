export interface Book {
    author?: string;
    bookId: number;
    categoryName: string;
    chapterStatus?: string;
    coverImg?: string;
    desc?: string;
    title?: string;
    word?: string;
}

interface Discovery {
    bookList: Book[];
    categoryName: string;
    type: string;
    categoryId?: number;
}

export type Discoveries = Discovery[] | undefined;
