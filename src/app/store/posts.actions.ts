import { createAction, props } from '@ngrx/store';
import { Post } from '../shared/post';

export const loadPosts = createAction(
  '[Post] Load Posts'
);

export const loadPostsSuccess = createAction(
  '[Post] Load Posts Success',
  props<{posts: Post[]}>()
);
