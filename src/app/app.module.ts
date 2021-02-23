import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PostComponent } from './post/post.component';
import { RecentPostsComponent } from './recent-posts/recent-posts.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostComponent,
    PostDetailsComponent,
    RecentPostsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
