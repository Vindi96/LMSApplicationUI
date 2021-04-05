import { Component, OnInit } from '@angular/core';
import { SharedService } from './../../shared.service';

@Component({
  selector: 'app-show-book',
  templateUrl: './show-book.component.html',
  styleUrls: ['./show-book.component.css']
})
export class ShowBookComponent implements OnInit {

  constructor(private service: SharedService) { }
  BookList: any = [];
  ModalTitle: String | undefined;
  ActivateAddEditBookComp: boolean = false;
  book: any = [];

  ngOnInit(): void {
    this.refreshBookList();
  }
  addClick() {
    this.book = {
      BookId: 0,
      BookName: "",
      BookAuthor: "",
      SectionName: "",
      BookCount: "",
      BookPhoto: "anonymous.png"

    }
    this.ModalTitle = "Add Book";
    this.ActivateAddEditBookComp = true;

  }
  editClick(item: any) {
    this.book = item;
    this.ModalTitle = "Edit Book"
    this.ActivateAddEditBookComp = true;

  }
  deleteClick(item: any) {
    if (confirm("Are you sure?")) {
      this.service.deleteSection(item.BookId).subscribe(data => {
        alert(data.toString());
        this.refreshBookList();
      })
    }

  }

  closeClick() {
    this.ActivateAddEditBookComp = false;
    this.refreshBookList();

  }

  refreshBookList() {
    this.service.getBookList().subscribe(data => {
      this.BookList = data;
    }
    );
  }


}
