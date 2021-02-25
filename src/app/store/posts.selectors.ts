import { createFeatureSelector, createSelector } from '@ngrx/store';
import { postsFeatureKey, PostsState } from './posts.reducer';

export const selectPostsState = createFeatureSelector<PostsState>(postsFeatureKey);

export const selectIsPostsLoading = createSelector(selectPostsState, postsState => postsState.loading);
export const selectIsPostsLoaded = createSelector(selectPostsState, postsState => postsState.loaded);
export const selectPosts = createSelector(selectPostsState, postsState => postsState.data);
export const selectPostById = (id: string) => createSelector(selectPosts, posts => posts.find(post => post.id === id));
export const selectRecentPosts = createSelector(selectPosts, posts => [...posts].reverse().slice(0, 3));
