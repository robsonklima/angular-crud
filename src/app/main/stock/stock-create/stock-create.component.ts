import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

import { Stock } from './../stock.model';
import { StockService } from './../stock.service';

@Component({
  selector: 'app-stock-create',
  templateUrl: './stock-create.component.html',
  styleUrls: ['./stock-create.component.scss']
})
export class StockCreateComponent implements OnInit, OnDestroy {
  form: FormGroup;

  private _unsubscribeAll: Subject<any>;

  constructor(
    private _formBuilder: FormBuilder,
    private _stockService: StockService,
    private _router: Router
  ) {
    this._unsubscribeAll = new Subject();
  }

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(5)]]
    });
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  save(): void {
    const stock: Stock = this.form.getRawValue();

    console.log(stock);
    

    this._stockService.create(stock).subscribe(() => {
      this._stockService.showMessage(`Registro ${stock.name} criado com sucesso!`);

      this._router.navigate(['/stock']);
    }, error => {}); 
  }
}
