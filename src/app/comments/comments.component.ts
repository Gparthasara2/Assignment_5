import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Book } from '../book';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  constructor(public svc: DataService, private route: ActivatedRoute) { }
  
  newComment : string;
  book: Book;
  bookId: number = 0;
  
  
  ngOnInit() {
    this.bookId = parseInt(this.route.snapshot.paramMap.get('id'));
    this.svc.books.forEach(element => {
      if(element.id == this.bookId){
        this.book = element;
      }
    });
  }

  Comment(){
    
    console.log('Here it is');
    this.book.comments_string.push(this.newComment);
    
    
    console.log(this.book.title + this.book.comments_string)
    
    this.newComment = '';
  }

  

}
