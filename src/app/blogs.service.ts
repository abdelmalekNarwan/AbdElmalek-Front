import {
  HttpClient,
  HttpHeaders,
  JsonpInterceptor,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';
export interface GetAllBlogsDto {
  id: number;
  title: string;
  body: string;
  creationDate: Date;
}

export class CreateOrEditeDto {
  Id!: number;
  title!: string;
  body!: string;
  creationDate!: Date;
}

@Injectable({
  providedIn: 'root',
})
export class BlogsService {
  baseurl: string = 'https://localhost:44372/';
 // getAllBlogsDto: GetAllBlogsDto ;

  constructor(private http: HttpClient) {}
  getAll() {
  return this.http.get<any>(this.baseurl + 'api/Blog/GetAll');
  }
  getById(Id: number) {
  return  this.http.get<CreateOrEditeDto>(this.baseurl + 'api/Blog/' + Id);
  }
  delete(Id: number) {
  return  this.http
      .post<any>(this.baseurl + 'api/Blog/Delete?id=' + Id, null);
  }

  create(createOrEditeDto: CreateOrEditeDto) {
    return this.http
      .post(this.baseurl+'api/Blog/Post', createOrEditeDto );
  }

  update(createOrEditeDto: CreateOrEditeDto) {
    return this.http
      .post(this.baseurl+'api/Blog/Update', createOrEditeDto );
  }
}
