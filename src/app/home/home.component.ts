import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PostService } from '../post.service';
import { Post } from '../shared/post';
import { loadPosts } from '../store/posts.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public posts: Observable<Post[]>;

  constructor(private postService: PostService, private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(loadPosts());

    this.posts = this.postService
      .loadPosts()
      .pipe(map((posts) => posts.reverse()));
  }
}
