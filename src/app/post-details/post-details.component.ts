import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { PostsService } from '../services/posts.service';
import { Post } from '../shared/post';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss'],
})
export class PostDetailsComponent implements OnInit {
  postId: string;
  post$: Observable<Post>;
  post: Post;

  constructor(
    private route: ActivatedRoute,
    private postService: PostsService
  ) {}

  ngOnInit(): void {
    this.post$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        const id = params.get('id');
        return this.postService.getPost(id);
      })
    );
  }

  addLike(post: Post): void {
    this.postService.addLike(post).subscribe();
  }

  removeLike(post: Post): void {
    this.postService.removeLike(post).subscribe();
  }
}
