import { createReducer, on } from '@ngrx/store';
import { Post } from '../shared/post';
import { loadPosts, loadPostsSuccess } from './posts.actions';


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
  }),
  on(loadPostsSuccess, (state, action) => {
    return {
      ...state,
      data: action.posts,
      loading: false,
      loaded: true
    };
  })
);

