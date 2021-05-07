import { Component } from '@angular/core';
import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';

import { locale as english } from './i18n/en';
import { locale as portuguese } from './i18n/pt';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent {
  constructor(
    private _fuseTranslationLoaderService: FuseTranslationLoaderService
  ) {
    this._fuseTranslationLoaderService.loadTranslations(english, portuguese);
  }
}