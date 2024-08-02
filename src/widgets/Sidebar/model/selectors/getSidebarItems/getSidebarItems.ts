import { createSelector } from '@reduxjs/toolkit';

import { getUserAuthData } from '@/entitis/User';
import AboutIconDeprecated from '@/shared/assets/icons/about.svg';
import ArticleIcon from '@/shared/assets/icons/article.svg';
import ArticleIconDeprecated from '@/shared/assets/icons/articleOld.svg';
import ProfileIcon from '@/shared/assets/icons/avatar.svg';
import MainIcon from '@/shared/assets/icons/home.svg';
import AboutIcon from '@/shared/assets/icons/Info.svg';
import MainIconDeprecated from '@/shared/assets/icons/main.svg';
import ProfileIconDeprecated from '@/shared/assets/icons/profile.svg';
import {
    getRouteAbout,
    getRouteArticle,
    getRouteMain,
    getRouteProfile,
} from '@/shared/const/router';
import { toggleFeatures } from '@/shared/lib/features';

import { SidebarItemType } from '../../types/items';

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
    const sidebarItemsList: SidebarItemType[] = [
        {
            path: getRouteMain(),
            Icon: toggleFeatures({
                name: 'isAppRedesigned',
                off: () => MainIconDeprecated,
                on: () => MainIcon,
            }),
            text: 'Главная',
        },
        {
            path: getRouteAbout(),
            Icon: toggleFeatures({
                name: 'isAppRedesigned',
                off: () => AboutIconDeprecated,
                on: () => AboutIcon,
            }),
            text: 'О нас',
        },
    ];
    if (userData) {
        sidebarItemsList.push(
            {
                path: getRouteProfile(userData.id),

                Icon: toggleFeatures({
                    name: 'isAppRedesigned',
                    off: () => ProfileIconDeprecated,
                    on: () => ProfileIcon,
                }),
                text: 'Профиль',
                authOnly: true,
            },
            {
                path: getRouteArticle(),

                Icon: toggleFeatures({
                    name: 'isAppRedesigned',
                    off: () => ArticleIconDeprecated,
                    on: () => ArticleIcon,
                }),
                text: 'Статьи',
                authOnly: true,
            },
        );
    }
    return sidebarItemsList;
});
