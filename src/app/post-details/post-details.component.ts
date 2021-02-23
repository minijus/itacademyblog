import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { PostService } from '../post.service';
import { Post } from '../shared/post';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss'],
})
export class PostDetailsComponent implements OnInit {
  postId: string;
  post$: Observable<Post>;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) {}

  ngOnInit(): void {
    this.post$ = this.route.paramMap.pipe(
      switchMap((params) => {
        const id = params.get('id');
        return this.postService.getPost(id);
      })
    );
  }
}
