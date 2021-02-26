import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePostComponent } from './create-post/create-post.component';
import { HomeComponent } from './home/home.component';
import { PostDetailsComponent } from './post-details/post-details.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'posts/add', component: CreatePostComponent },
  { path: 'post/:id', component: PostDetailsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // { path: "**", component: NotFoundComponent }
];

@NgModule({
  providers: [],
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
