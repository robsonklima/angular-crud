import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';
import { locale as english } from './../i18n/en';
import { locale as portuguese } from './../i18n/pt';

import { Stock } from './../stock.model';
import { StockService } from './../stock.service';


@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.scss']
})
export class StockListComponent {
  stocks: Stock[] = [];

  displayedColumns: string[] = ['logo_url', 'name', 'shortName', 'regularMarketPrice', 
    'regularMarketPreviousClose', 'actions'];
  dataSource: MatTableDataSource<Stock>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private _fuseTranslationLoaderService: FuseTranslationLoaderService,
    private _stockService: StockService,
  ) {
    this._fuseTranslationLoaderService.loadTranslations(english, portuguese);
  }

  ngAfterViewInit() {
    setInterval(() => { 
      this.loadStocks();
    }, 60000);

    this.loadStocks();
  }

  loadStocks() {
    this._stockService.read().subscribe((stocks: Stock[]) => {
      this.stocks = stocks;
      console.log(stocks);

      this.dataSource = new MatTableDataSource(this.stocks);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }, error => {});
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

