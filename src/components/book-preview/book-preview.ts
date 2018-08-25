import { Component, Input } from '@angular/core';
import { Book } from '../../models/books.interface';

@Component({
  selector: 'book-preview',
  templateUrl: 'book-preview.html'
})
export class BookPreviewComponent {
  @Input() book: Book;

  text: string;


  constructor() {
    console.log(this.book);
    this.text = 'Hello World';
  }

}
