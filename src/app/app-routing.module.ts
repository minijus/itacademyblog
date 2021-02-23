import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePostComponent } from './create-post/create-post.component';
import { HomeComponent } from './home/home.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PostGuardGuard } from './post-guard.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'post/:id',
    component: PostDetailsComponent,
    canActivate: [PostGuardGuard],
  },
  { path: 'new-post', component: CreatePostComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  providers: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
