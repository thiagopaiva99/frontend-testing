import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../../models/book.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  @Input('book')
  public book: Book;

  constructor() { }

  ngOnInit() {
  }

  votesCounter(): number {
    return this.book.upvotes;
  }

  upvote (): number {
    return this.book.upvotes++;
  }
}