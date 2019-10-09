import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  books: Book[] = [];
  bookId : number;
  constructor() { }
  id: number = 0;
  create(b: Book) {
    this.id++;
    b.id = this.id;
    this.books.push(b);
    console.log(this.books);
  }

  

  
}
