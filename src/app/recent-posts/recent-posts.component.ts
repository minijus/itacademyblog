import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { PostService } from '../post.service';

@Component({
  selector: 'app-recent-posts',
  templateUrl: './recent-posts.component.html',
  styleUrls: ['./recent-posts.component.scss'],
})
export class RecentPostsComponent implements OnInit {
  posts$: any;

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.posts$ = this.postService
      .loadPosts()
      .pipe(map((posts) => posts.reverse().slice(0, 3)));
  }
}
