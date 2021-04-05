import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-add-edit-book',
  templateUrl: './add-edit-book.component.html',
  styleUrls: ['./add-edit-book.component.css']
})
export class AddEditBookComponent implements OnInit {

  constructor(private service: SharedService) { }
  @Input() book: any
  BookId: string = "";
  BookName: string = "";
  BookAuthor: string = "";
  SectionName: string = "";
  BookCount: number = 0;
  BookPhoto: string = "";
  BookPhotoPath: string = "";

  SectionList: any = [];



  ngOnInit(): void {
    this.loadSectionList();
  }
  loadSectionList() {
    this.service.getAllSectionNames().subscribe((data: any) => {
      this.SectionList = data;
      this.BookId = this.book.BookId;
      this.BookName = this.book.BookName;
      this.BookAuthor = this.book.BookAuthor;
      this.BookCount = this.book.BookCount;
      this.BookPhoto = this.book.BookPhoto;
      this.BookPhotoPath = this.service.PhotoUrl + this.BookPhoto;
    })
  }
  addBook() {
    var val = {
      BookId: this.BookId,
      BookName: this.BookName,
      BookAuthor: this.BookAuthor,
      BookCount: this.BookCount,
      BookPhoto: this.BookPhoto
    }
    this.service.addBook(val).subscribe(data => {
      alert(data.toString());
    })
  }
  updateBook() {
    var val = {
      BookId: this.BookId,
      BookName: this.BookName,
      BookAuthor: this.BookAuthor,
      BookCount: this.BookCount,
      BookPhoto: this.BookPhoto
    }
    this.service.UpdateBook(val).subscribe(data => {
      alert(data.toString());
    })
  }
  uploadPhoto(event: any) {
    var file = event.target.files[0];
    const formData: FormData = new FormData();
    formData.append('uploadedFile', file, file.name);

    this.service.uploadPhoto(formData).subscribe((data: any) => {
      this.BookPhoto = data.toString();
      this.BookPhotoPath = this.service.PhotoUrl + this.BookPhoto;
    })

  }

}
