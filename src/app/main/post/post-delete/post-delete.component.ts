import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Post } from './../post.model';
import { PostService } from './../post.service';

@Component({
  selector: 'app-post-delete',
  templateUrl: './post-delete.component.html',
  styleUrls: ['./post-delete.component.scss']
})
export class PostDeleteComponent implements OnInit {
  post: Post;

  constructor(
    private _route: ActivatedRoute,
    private _postService: PostService,
    private _router: Router,
  ) { }

  ngOnInit(): void {
    const id = +this._route.snapshot.paramMap.get('id');

    this._postService.readById(id).subscribe((post: Post) => {
      this.post = post;
    }, error => {})
  }

  delete(): void {
    this._postService.delete(this.post.id).subscribe((post: Post) => {
      this._postService.showMessage(`Registro '${ this.post.title }' deletado com sucesso!`);

      this._router.navigate(['/post']);
    }, error => {})
  }
}
