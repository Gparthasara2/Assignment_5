import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Book } from '../book';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})

export class AddComponent implements OnInit {

  id: number;
  author: string;
  title: string;
  price: number;
  newBook: Book;
  constructor(private svc: DataService) { }

  ngOnInit() {
  }

  createBook() {
    this.newBook = new Book(this.id, this.author, this.title, this.price);
    this.svc.create(this.newBook);
  }

  clearForms() {
    this.title = "";
    this.author = "";
    this.price = parseInt("");
  }

}
