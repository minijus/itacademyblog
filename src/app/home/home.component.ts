import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest, Observable } from 'rxjs';
import { filter, take, tap } from 'rxjs/operators';
import { Post } from '../shared/post';
import { loadPosts } from '../store/posts.actions';
import { selectIsPostsLoaded, selectIsPostsLoading, selectPosts } from '../store/posts.selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public isPostsLoading$: Observable<boolean>;
  public isPostsLoaded$: Observable<boolean>;
  public posts$: Observable<Post[]>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.isPostsLoading$ = this.store.select(selectIsPostsLoading);
    this.isPostsLoaded$ = this.store.select(selectIsPostsLoaded);

    combineLatest([this.isPostsLoading$, this.isPostsLoaded$]).pipe(
      filter(([loading, loaded]) => !loading && !loaded),
      take(1),
      tap(() => {
        this.store.dispatch(loadPosts());
      })
    ).subscribe();

    this.posts$ = this.store.select(selectPosts);
  }
}
