import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../shared/category';
import { Post } from '../shared/post';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private httpClient: HttpClient) { }

  getCategories(): Observable<Category[]> {
    return this.httpClient.get<Category[]>('/api/categories');
  }

  getCategory(id: string): Observable<Category> {
    return this.httpClient.get<Category>(`/api/categories/${id}`);
  }

  getCategoryPosts(id: string): Observable<Post[]> {
    return this.httpClient.get<Post[]>(`/api/categories/${id}/posts`);
  }
}
