export interface BookInterface {
    image: string,
    title: string,
    description: string,
    price: number,
    upvotes: number
}

export class Book implements BookInterface {
    constructor (
        public image: string,
        public title: string,
        public description: string,
        public price: number,
        public upvotes: number = 0
    ) { }

    destroy() {
        let books: Array<Book> = JSON.parse(localStorage.getItem('books') || '[]');

        books.forEach((book, index) => {
            if (book.title === this.title) {
                books.splice(index, 1);

                localStorage.setItem('books', JSON.stringify(books));
            }
        });

        return null;
    }

    save() {
        let books: Array<Book> = JSON.parse(localStorage.getItem('books') || '[]');

        books.forEach((book, index) => {
            if (book.title === this.title) {
                books.splice(index, 1);
            }
        })

        books.push(this);

        localStorage.setItem('books', JSON.stringify(books));

        return true;
    }

    find(title: string) {
        let books: Array<Book> = JSON.parse(localStorage.getItem('books') || '[]');

        books.map(book => {
            if (book.title === title) {
                return new Book(
                    book.image,
                    book.title,
                    book.description,
                    book.price,
                    book.upvotes
                );
            }

            return null;
        })
    }
}