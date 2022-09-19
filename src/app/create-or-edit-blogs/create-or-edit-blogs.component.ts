import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogsService, CreateOrEditeDto } from '../blogs.service';

@Component({
  selector: 'app-create-or-edit-blogs',
  templateUrl: './create-or-edit-blogs.component.html',
})
export class CreateOrEditBlogsComponent implements OnInit {
  createOrEditeDto: CreateOrEditeDto = new CreateOrEditeDto();
  constructor(
    private _blogsService: BlogsService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let id = this._activatedRoute.snapshot.params['Id'];
    if (id != null || id != undefined) {
      this.getById(id);
    }
  }

  Save() {
    this._blogsService.create(this.createOrEditeDto).subscribe((resu) => {
      this._router.navigate(['/blogs']);
    });
  }

   getById(id :number){
    this._blogsService.getById(id).subscribe((result) => {
      this.createOrEditeDto = result;
    });

  }
}
