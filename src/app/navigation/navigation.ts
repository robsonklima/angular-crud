import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id       : 'main',
        title    : 'main',
        translate: 'NAV.MAIN_MENU',
        type     : 'group',
        children : [
            {
                id       : 'HOME',
                title    : 'HOME',
                translate: 'NAV.HOME.TITLE',
                type     : 'item',
                icon     : 'home',
                url      : '/home'
            },
            {
                id       : 'POST',
                title    : 'POST',
                translate: 'NAV.POST.TITLE',
                type     : 'item',
                icon     : 'today',
                url      : '/post'
            }
        ]
    }
];
