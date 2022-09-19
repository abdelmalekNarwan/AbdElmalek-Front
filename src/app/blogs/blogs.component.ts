import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  BlogsService,
  CreateOrEditeDto,
  GetAllBlogsDto,
} from '../blogs.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
})
export class BlogsComponent implements OnInit {
  blogsListDto: GetAllBlogsDto[] = [];

  constructor(private _blogsService: BlogsService,private _router: Router) {}

  ngOnInit(): void {
    this.getAll();
  }
  getAll() {
    this._blogsService.getAll().subscribe((result) => {
      this.blogsListDto = result;
    });
  }
  create() {
    this._router.navigate(['blogs/create']);
  }
  update(Id: Number) {

    this._router.navigate(['blogs/edit',Id]);

  }
  delet(Id: number) {
    this._blogsService.delete(Id).subscribe((result) => {
      this.getAll();
    });
  }

  getById() {}
}
