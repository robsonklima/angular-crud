import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id       : 'main',
        title    : 'Menu Principal',
        translate: 'NAV.MAIN_MENU',
        type     : 'group',
        children : [
            {
                id       : 'HOME',
                title    : 'Home',
                translate: 'NAV.HOME.TITLE',
                type     : 'item',
                icon     : 'home',
                url      : '/home'
            },
            // {
            //     id       : 'POST',
            //     title    : 'Posts',
            //     translate: 'NAV.POST.TITLE',
            //     type     : 'item',
            //     icon     : 'today',
            //     url      : '/post'
            // },
            {
                id       : 'STOCK',
                title    : 'Ações',
                translate: 'NAV.STOCK.TITLE',
                type     : 'item',
                icon     : 'today',
                url      : '/stock'
            }
        ]
    }
];
