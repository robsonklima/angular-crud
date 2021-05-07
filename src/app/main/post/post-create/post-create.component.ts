import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

import { Post } from './../post.model';
import { PostService } from './../post.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss']
})
export class PostCreateComponent implements OnInit, OnDestroy {
  form: FormGroup;

  private _unsubscribeAll: Subject<any>;

  constructor(
    private _formBuilder: FormBuilder,
    private _postService: PostService,
    private _router: Router
  ) {
    this._unsubscribeAll = new Subject();
  }

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      title: ['', Validators.required],
      userId: ['', Validators.required],
      body: ['', [Validators.required, Validators.maxLength(300)]]
    });
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  save(): void {
    const post: Post = this.form.getRawValue();

    this._postService.create(post).subscribe(() => {
      this._postService.showMessage(`Registro ${post.title} criado com sucesso!`);

      this._router.navigate(['/post']);
    }, error => {}); 
  }
}
