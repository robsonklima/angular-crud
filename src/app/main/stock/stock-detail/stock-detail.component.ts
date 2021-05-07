import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Stock } from './../stock.model';
import { StockService } from './../stock.service';

@Component({
  selector: 'app-stock-detail',
  templateUrl: './stock-detail.component.html',
  styleUrls: ['./stock-detail.component.scss']
})
export class StockDetailComponent implements OnInit {
  stock: Stock;

  constructor(
    private _route: ActivatedRoute,
    private _stockService: StockService
  ) { }

  ngOnInit(): void {
    const name = this._route.snapshot.paramMap.get('name');

    this._stockService.readByIName(name).subscribe((stock: Stock) => {
      this.stock = stock;

      console.log(stock);
      
    }, error => {})
  }
}
