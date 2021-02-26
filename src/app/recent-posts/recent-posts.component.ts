import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PostService } from '../post.service';
import { Post } from '../shared/post';

@Component({
  selector: 'app-recent-posts',
  templateUrl: './recent-posts.component.html',
  styleUrls: ['./recent-posts.component.scss'],
})
export class RecentPostsComponent implements OnInit {
  public posts$: Observable<Post[]>;
  constructor(private postsService: PostService) {}

  ngOnInit() {
    this.posts$ = this.postsService.getRecentPosts(5);
  }
}
