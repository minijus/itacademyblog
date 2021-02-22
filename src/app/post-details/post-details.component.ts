import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {postList} from "../shared/post-list";
import {Post} from "../shared/post";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {
  postId: string;
  post: Post;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.postId = this.route.snapshot.paramMap.get('id');
    this.post = postList.find((post) => post.id === this.postId);
  }

}
