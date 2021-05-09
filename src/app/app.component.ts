import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Platform } from '@angular/cdk/platform';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { FuseConfigService } from '@fuse/services/config.service';
import { FuseNavigationService } from '@fuse/components/navigation/navigation.service';
import { FuseSidebarService } from '@fuse/components/sidebar/sidebar.service';
import { FuseSplashScreenService } from '@fuse/services/splash-screen.service';
import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';

import { navigation } from 'app/navigation/navigation';
import { locale as navigationEnglish } from 'app/navigation/i18n/en';
import { locale as navigationPortuguese } from 'app/navigation/i18n/pt';

@Component({
    selector   : 'app',
    templateUrl: './app.component.html',
    styleUrls  : ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy
{
    fuseConfig: any;
    navigation: any;

    private _unsubscribeAll: Subject<any>;

    constructor(
        @Inject(DOCUMENT) private document: any,
        private _fuseConfigService: FuseConfigService,
        private _fuseNavigationService: FuseNavigationService,
        private _fuseSidebarService: FuseSidebarService,
        private _fuseSplashScreenService: FuseSplashScreenService,
        private _fuseTranslationLoaderService: FuseTranslationLoaderService,
        private _translateService: TranslateService,
        private _platform: Platform
    )
    {
        this.navigation = navigation;
        this._fuseNavigationService.register('main', this.navigation);
        this._fuseNavigationService.setCurrentNavigation('main');
        this._translateService.addLangs(['pt', 'en']);
        this._translateService.setDefaultLang('pt');
        this._fuseTranslationLoaderService.loadTranslations(navigationEnglish, navigationPortuguese);
        this._translateService.use('pt');
        
        setTimeout(() => {
         this._translateService.setDefaultLang('pt');
        });
         
        if ( this._platform.ANDROID || this._platform.IOS )
        {
            this.document.body.classList.add('is-mobile');
        }

        this._unsubscribeAll = new Subject();
    }

    ngOnInit(): void
    {
        this._fuseConfigService.config
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((config) => {

                this.fuseConfig = config;

                if ( this.fuseConfig.layout.width === 'boxed' )
                {
                    this.document.body.classList.add('boxed');
                }
                else
                {
                    this.document.body.classList.remove('boxed');
                }

                for ( let i = 0; i < this.document.body.classList.length; i++ )
                {
                    const className = this.document.body.classList[i];

                    if ( className.startsWith('theme-') )
                    {
                        this.document.body.classList.remove(className);
                    }
                }

                this.document.body.classList.add(this.fuseConfig.colorTheme);
            });
    }

    ngOnDestroy(): void
    {
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    toggleSidebarOpen(key): void
    {
        this._fuseSidebarService.getSidebar(key).toggleOpen();
    }
}
