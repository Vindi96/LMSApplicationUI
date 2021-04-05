import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { ShowBookComponent } from './book/show-book/show-book.component';
import { SectionComponent } from './section/section.component';
import { AddEditBookComponent } from './book/add-edit-book/add-edit-book.component';
import { AddEditSecComponent } from './section/add-edit-sec/add-edit-sec.component';
import { ShowSecComponent } from './section/show-sec/show-sec.component';
import { SharedService } from './shared.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    ShowBookComponent,
    SectionComponent,
    AddEditBookComponent,
    AddEditSecComponent,
    ShowSecComponent
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
