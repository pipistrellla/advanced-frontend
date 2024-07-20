import { createSelector } from '@reduxjs/toolkit';

import { getUserAuthData } from '@/entitis/User';
import AboutIcon from '@/shared/assets/icons/about.svg';
import ArticleIcon from '@/shared/assets/icons/article.svg';
import MainIcon from '@/shared/assets/icons/main.svg';
import ProfileIcon from '@/shared/assets/icons/profile.svg';
import {
    getRouteAbout,
    getRouteArticle,
    getRouteMain,
    getRouteProfile,
} from '@/shared/const/router';

import { SidebarItemType } from '../../types/items';

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
    const sidebarItemsList: SidebarItemType[] = [
        {
            path: getRouteMain(),
            Icon: MainIcon,
            text: 'Главная',
        },
        {
            path: getRouteAbout(),
            Icon: AboutIcon,
            text: 'О нас',
        },
    ];
    if (userData) {
        sidebarItemsList.push(
            {
                path: getRouteProfile(userData.id),
                Icon: ProfileIcon,
                text: 'Профиль',
                authOnly: true,
            },
            {
                path: getRouteArticle(),
                Icon: ArticleIcon,
                text: 'Статьи',
                authOnly: true,
            },
        );
    }
    return sidebarItemsList;
});
