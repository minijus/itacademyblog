import { createReducer } from '@ngrx/store';
import { Post } from '../shared/post';


export const postsFeatureKey = 'posts';

export interface PostsState {
  data: Post[];
}

export const initialState: PostsState = {
  data: []
};


export const postsReducer = createReducer(
  initialState,
);

