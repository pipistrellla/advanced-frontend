import { createSelector } from '@reduxjs/toolkit';

import { getUserAuthData } from '@/entitis/User';
import AboutIcon from '@/shared/assets/icons/about.svg';
import ArticleIcon from '@/shared/assets/icons/article.svg';
import MainIcon from '@/shared/assets/icons/main.svg';
import ProfileIcon from '@/shared/assets/icons/profile.svg';
import { RoutePath } from '@/shared/const/router';

import { SidebarItemType } from '../../types/items';

export const getSidebarItems = createSelector(
    getUserAuthData,
    (userData) => {

        const sidebarItemsList: SidebarItemType[] = [

            {
                path: RoutePath.main,
                Icon: MainIcon,
                text: 'Главная',
            },
            {
                path: RoutePath.about,
                Icon: AboutIcon,
                text: 'О нас',
            },

        ];
        if (userData) {

            sidebarItemsList.push(
                {
                    path: RoutePath.profile + userData.id,
                    Icon: ProfileIcon,
                    text: 'Профиль',
                    authOnly: true,
                },
                {
                    path: RoutePath.articles,
                    Icon: ArticleIcon,
                    text: 'Статьи',
                    authOnly: true,
                },
            );

        }
        return sidebarItemsList;

    },
);
