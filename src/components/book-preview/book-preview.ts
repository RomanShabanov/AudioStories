import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BookPage } from '../../pages/book/book';

@Component({
  selector: 'book-preview',
  templateUrl: 'book-preview.html'
})
export class BookPreviewComponent {
  @Input() book;

  constructor(private navCtrl: NavController) {
  }

  ngOnInit() {
    console.log(this.book);
  }

  openBook() {
    this.navCtrl.push(BookPage, {
      bookId: this.book.id
    });
  }

}
