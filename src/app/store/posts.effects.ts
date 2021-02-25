import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import { PostService } from '../post.service';
import { loadPosts, loadPostsSuccess } from './posts.actions';


@Injectable()
export class PostsEffects {
  constructor(private actions$: Actions, private postsService: PostService) {}

  loadPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadPosts),
      mergeMap(() => this.postsService.loadPosts()
        .pipe(
          map(posts => loadPostsSuccess({posts})),
        )
      )
    )
  );
}
