import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private httpClient: HttpClient) { }

  getPost(): Observable<any> {
    return this.httpClient.get<any>('https://jsonplaceholder.typicode.com/posts')
  }
}
