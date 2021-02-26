import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Author } from '../shared/author';
import { Post } from '../shared/post';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {
  constructor(private httpClient: HttpClient) {}
  getAuthors() {
    return this.httpClient.get<Author[]>(`/api/authors`);
  }
  getAuthor(id) {
    return this.httpClient.get<Author>(`/api/authors/${id}`);
  }
  getAuthorPosts(id) {
    return this.httpClient.get<Post[]>(`/api/authors/${id}/posts`);
  }
}
