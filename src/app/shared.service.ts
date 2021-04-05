import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { observable, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl = "http://localhost:5000/api";
  readonly PhotoUrl = "http://localhost:5000/photos";

  constructor(private http: HttpClient) { }
  getSecList(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/section');
  }
  addSection(val: any) {
    return this.http.post(this.APIUrl + '/Section', val);
  }
  updateSection(val: any) {
    return this.http.put(this.APIUrl + '/Section', val)
  }
  deleteSection(val: any) {
    return this.http.delete(this.APIUrl + '/Section', val)
  }
  getBookList(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/Book');
  }
  addBook(val: any) {
    return this.http.post(this.APIUrl + '/Book', val);
  }
  UpdateBook(val: any) {
    return this.http.put(this.APIUrl + '/Book', val);
  }

  deleteBook(val: any) {
    return this.http.delete(this.APIUrl + '/Book', val);
  }
  uploadPhoto(val: any) {
    return this.http.post(this.APIUrl + '/Book/savefile', val);
  }
  getAllSectionNames(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/Book/GetAllDepartmentNames');
  }
}
