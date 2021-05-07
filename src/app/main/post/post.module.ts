import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { FuseSharedModule } from '@fuse/shared.module';

import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';

import { PostComponent } from './post.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostCreateComponent } from './post-create/post-create.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostDeleteComponent } from './post-delete/post-delete.component';
import { PostEditComponent } from './post-edit/post-edit.component';


const routes = [
    {
        path: 'post',
        component: PostComponent
    },
    {
        path: 'post-create',
        component: PostCreateComponent
    },
    {
        path: 'post-detail/:id',
        component: PostDetailComponent
    },
    {
        path: 'post-edit/:id',
        component: PostEditComponent
    },
    {
        path: 'post-delete/:id',
        component: PostDeleteComponent
    }
];

@NgModule({
    declarations: [
        PostComponent,
        PostListComponent,
        PostCreateComponent,
        PostDetailComponent,
        PostDeleteComponent,
        PostEditComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        HttpClientModule,
        TranslateModule,
        FuseSharedModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatFormFieldModule,
        MatInputModule,
        MatSnackBarModule,
        MatProgressSpinnerModule,
        MatButtonModule,
        MatIconModule,
        MatSelectModule,
        MatStepperModule
    ],
    exports: [
        PostComponent
    ]
})

export class PostModule
{
}
