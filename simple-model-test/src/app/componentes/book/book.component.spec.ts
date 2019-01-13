import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import * as faker from 'faker';

import { BookComponent } from './book.component';
import { Book } from '../../models/book.model';

describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;
  let book: Book;
  let nativeElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookComponent);
    component = fixture.componentInstance;

    book = new Book(
      faker.image.image(),
      faker.lorem.words(),
      faker.lorem.paragraph(),
      1234.55,
      0
    );

    component.book = book;

    fixture.detectChanges();

    nativeElement = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show the book image', () => {
    let image: string = nativeElement.querySelector('.book-image').getAttribute('src');

    expect(image).toEqual(book.image);
  });

  it('should show the book title', () => {
    let title: string = nativeElement.querySelector('.book-title').innerHTML;

    expect(title).toEqual(book.title);
  });

  it('should show the book description', () => {
    let description: string = nativeElement.querySelector('.book-description').innerHTML;

    expect(description).toEqual(book.description);
  });

  it('should show the book price', () => {
    let price: string = nativeElement.querySelector('.book-price').innerHTML;

    expect(price).toEqual('$1,234.55');
  });

  it('should show the book upvotes', () => {
    let upvotes: string = nativeElement.querySelector('.book-upvotes').innerHTML;

    expect(upvotes).toEqual(`Upvotes: ${book.upvotes}`);
  });

  it('should set the correct number of upvotes', () => {
    let votes: number = component.votesCounter();

    expect(votes).toEqual(book.upvotes);
  });

  it('should invoke the upvotes component function', () => {
    let spy = spyOn(component, 'upvote');
    let button = nativeElement.querySelector('button.upvote');

    button.click();

    expect(spy).toHaveBeenCalled()
  });
});
