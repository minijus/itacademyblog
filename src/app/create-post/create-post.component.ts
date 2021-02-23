import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../shared/post';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss'],
})
export class CreatePostComponent implements OnInit {
  public post: Post;

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.reset();
  }

  reset() {
    this.post = {
      author: '',
      title: '',
      content: '',
    };
  }

  submitForm() {
    this.postService.addPost(this.post).subscribe(() => {
      this.reset();
    });
  }
}
