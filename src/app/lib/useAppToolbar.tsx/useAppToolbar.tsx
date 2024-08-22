import { ReactElement } from 'react';

import LogoImg from '@/shared/assets/icons/logo.svg';
import { AppRoutes } from '@/shared/const/router';
import { useAppRoutechange } from '@/shared/lib/router/useAppRoutechange/useAppRoutechange';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { ScrollToolbar } from '@/widgets/ScrollToolbar';

export function useAppToolbar() {
    const appRoute = useAppRoutechange();

    const toolbarByAppRoute: optionalRecord<AppRoutes, ReactElement> = {
        [AppRoutes.ARTICLES]: <ScrollToolbar />,
        [AppRoutes.ARTICLE_DETAILS]: <ScrollToolbar />,
        [AppRoutes.MAIN]: <Icon Svg={LogoImg} />,
        [AppRoutes.ABOUT]: <Icon Svg={LogoImg} />,
    };

    return toolbarByAppRoute[appRoute];
}
