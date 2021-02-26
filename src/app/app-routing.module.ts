import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorPageComponent } from './author-page/author-page.component';
import { AuthorsPageComponent } from './authors-page/authors-page.component';
import { CategoryPageComponent } from './category-page/category-page.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PostDetailsComponent } from './post-details/post-details.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'posts/add', component: CreatePostComponent },
  { path: 'post/:id', component: PostDetailsComponent },
  { path: 'category/:id', component: CategoryPageComponent },
  { path: 'authors', component: AuthorsPageComponent },
  { path: 'authors/:id', component: AuthorPageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  providers: [],
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
