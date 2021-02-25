import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { Post } from '../shared/post';
import { loadPosts, loadPostsSuccess } from './posts.actions';


export const postsFeatureKey = 'posts';

export interface PostsState extends EntityState<Post>{
  loading: boolean;
  loaded: boolean;
}

export const adapter = createEntityAdapter<Post>();

export const initialState: PostsState = adapter.getInitialState({
  loading: false,
  loaded: false
});

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
    return adapter.addMany(action.posts, {
      ...state,
      loading: false,
      loaded: true,
    });
  })
);

