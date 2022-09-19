import { BlogsComponent } from './blogs/blogs.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateOrEditBlogsComponent } from './create-or-edit-blogs/create-or-edit-blogs.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'blogs', component: BlogsComponent },
      { path: 'blogs/create', component: CreateOrEditBlogsComponent },
      { path: 'blogs/edit/:Id', component: CreateOrEditBlogsComponent },

    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
