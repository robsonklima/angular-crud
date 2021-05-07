import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';

import { Post } from './../post.model';
import { PostService } from './../post.service';


@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.scss']
})
export class PostEditComponent implements OnInit {
  form: FormGroup;
  private _unsubscribeAll: Subject<any>;

  constructor(
    private _formBuilder: FormBuilder,
    private _postService: PostService,
    private _router: Router,
    private _route: ActivatedRoute,
  ) {
    this._unsubscribeAll = new Subject();
  }

  ngOnInit(): void {
    const id = this._route.snapshot.paramMap.get('id');

    this._postService.readById(Number(id)).subscribe((post: Post) => {
      this.form = this._formBuilder.group({
        id: [
          {
            value   : post.id,
            disabled: true
          }, Validators.required
        ],
        title: [post.title, Validators.required],
        userId: [post.userId, Validators.required],
        body: [post.body, [Validators.required, Validators.maxLength(300)]]
      });
    }, error => {})
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  save(): void {
    const post: Post = this.form.getRawValue();

    this._postService.update(post).subscribe(() => {
      this._postService.showMessage(`Registro ${post.title} salvo com sucesso!`);

      this._router.navigate(['/post']);
    }, error => {}); 
  }
}
