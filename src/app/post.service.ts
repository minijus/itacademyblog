import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Post } from './shared/post';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private httpClient: HttpClient) {}

  loadPosts(): Observable<Post[]> {
    return this.httpClient.get<Post[]>('/api/posts');
  }

  getPost(id): Observable<Post | undefined> {
    return this.httpClient
      .get<Post[]>('/api/posts')
      .pipe(map((posts) => posts.find((post) => post.id === id)));
  }
}
