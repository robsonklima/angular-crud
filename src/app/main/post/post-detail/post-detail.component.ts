import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Post } from './../post.model';
import { PostService } from './../post.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {
  post: Post;

  constructor(
    private _route: ActivatedRoute,
    private _postService: PostService
  ) { }

  ngOnInit(): void {
    const id = this._route.snapshot.paramMap.get('id');

    this._postService.readById(Number(id)).subscribe((post: Post) => {
      this.post = post;
    }, error => {})
  }
}
