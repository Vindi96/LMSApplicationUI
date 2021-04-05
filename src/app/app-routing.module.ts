import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './book/book.component';
import { SectionComponent } from './section/section.component';

const routes: Routes = [
  { path: 'book', component: BookComponent },
  { path: 'section', component: SectionComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
