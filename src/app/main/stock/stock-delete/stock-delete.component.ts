import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Stock } from './../stock.model';
import { StockService } from './../stock.service';

@Component({
  selector: 'app-stock-delete',
  templateUrl: './stock-delete.component.html',
  styleUrls: ['./stock-delete.component.scss']
})
export class StockDeleteComponent implements OnInit {
  name: string;

  constructor(
    private _route: ActivatedRoute,
    private _stockService: StockService,
    private _router: Router,
  ) { }

  ngOnInit(): void {
    this.name = this._route.snapshot.paramMap.get('name');
  }

  delete(): void {
    this._stockService.delete(this.name).subscribe((stock: Stock) => {
      this._stockService.showMessage(`Registro '${ this.name }' deletado com sucesso!`);

      this._router.navigate(['/stock']);
    }, error => {})
  }
}