import { StockListComponent } from './stock-list/stock-list.component';
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

import { StockDeleteComponent } from './stock-delete/stock-delete.component';
import { StockDetailComponent } from './stock-detail/stock-detail.component';
import { StockCreateComponent } from './stock-create/stock-create.component';
import { StockComponent } from './stock.component';


const routes = [
  {
      path: 'stock',
      component: StockComponent
  },
  {
      path: 'stock-create',
      component: StockCreateComponent
  },
  {
      path: 'stock-detail/:name',
      component: StockDetailComponent
  },
  {
      path: 'stock-delete/:name',
      component: StockDeleteComponent
  }
];

@NgModule({
  declarations: [
    StockComponent,
    StockCreateComponent,
    StockDetailComponent,
    StockListComponent,
    StockDeleteComponent
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
})
export class StockModule { }
