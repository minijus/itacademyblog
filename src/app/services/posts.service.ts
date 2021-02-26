import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, mapTo } from 'rxjs/operators';
import { Post } from '../shared/post';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private httpClient: HttpClient) {}

  loadPosts(): Observable<Post[]> {
    return this.httpClient.get<Post[]>('/api/posts');
  }

  validateName(name): Observable<boolean> {
    return this.httpClient
      .get<unknown>(`https://empty-poetry-bf01.akademija.workers.dev/${name}`)
      .pipe(
        mapTo(true),
        catchError(() => of(false))
      );
  }

  addPost(post: Post): Observable<Post> {
    return this.httpClient.post<Post>('/api/posts', post);
  }

  getPost(id): Observable<Post | undefined> {
    return this.httpClient.get<Post>(`/api/posts/${id}`);
  }

  addLike(post: Post): Observable<Post> {
    return this.httpClient.put<Post>(`/api/posts/${post.id}`, {
      ...post,
      likes: post.likes + 1,
    });
  }
  removeLike(post: Post): Observable<Post> {
    return this.httpClient.put<Post>(`/api/posts/${post.id}`, {
      ...post,
      likes: post.likes - 1,
    });
  }

  getRecentPosts(limit): Observable<Post[]> {
    return this.httpClient.get<Post[]>(`/api/posts?_sort=created&_order=desc&_start=0&_limit=${limit}`);
  }

  getMostViewedPosts(limit) {
    return this.httpClient.get<Post[]>(`/api/posts?_sort=views&_order=desc&_start=0&_limit=${limit}`);
  }
}
