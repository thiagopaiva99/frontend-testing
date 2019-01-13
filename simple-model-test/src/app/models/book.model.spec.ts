import { BookInterface, Book } from './book.model';
import * as faker from 'faker';

describe('Book Model', () => {
    let image: string;
    let title: string;
    let description: string;
    let price: number;
    let upvotes: number;

    let book: Book;

    beforeEach(() => {
        image = faker.image.image();
        title = faker.lorem.words();
        description = faker.lorem.sentence();
        price = faker.commerce.price();
        upvotes = faker.random.number();

        book = new Book(image, title, description, price, upvotes);

        let storage = {};

        spyOn(window.localStorage, 'getItem').and.callFake((key: string): string => {
            return storage[key] || null;
        });

        spyOn(window.localStorage, 'removeItem').and.callFake((key: string): void => {
            delete storage[key];
        });

        spyOn(window.localStorage, 'setItem').and.callFake((key: string, value: string): string => {
            return storage[key] = value;
        });

        spyOn(window.localStorage, 'clear').and.callFake((): void => {
            storage = {};
        });
    });

    afterEach(() => {
        localStorage.clear();
    })

    it ('should has a valid model', () => {
        let newBook = new Book(image, title, description, price, upvotes);

        expect(newBook).toBeTruthy();
        expect(newBook.image).toEqual(image);
        expect(newBook.title).toEqual(title);
        expect(newBook.description).toEqual(description);
        expect(newBook.price).toEqual(price);
        expect(newBook.upvotes).toEqual(upvotes);
    });
});