import { createReducer, on } from '@ngrx/store';
import { Post } from '../shared/post';
import { loadPosts } from './posts.actions';


export const postsFeatureKey = 'posts';

export interface PostsState {
  data: Post[];
  loading: boolean;
  loaded: boolean;
}

export const initialState: PostsState = {
  data: [],
  loading: false,
  loaded: false
};


export const postsReducer = createReducer(
  initialState,
  on(loadPosts, (state) => {
    return {
      ...state,
      loading: true,
      loaded: false
    };
  })
);

