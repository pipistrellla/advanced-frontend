import React, { FC, memo } from 'react';

import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getUserAuthData } from '@/entitis/User';
import { ToggleFeaturesComponent } from '@/shared/lib/features';
import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';
import {
    AppLink as AppLinkDeprecated,
    AppLinkTheme,
} from '@/shared/ui/deprecated/AppLink';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { Icon } from '@/shared/ui/redesigned/Icon';

import cls from './SidebarItem.module.scss';
import { SidebarItemType } from '../../model/types/items';

interface SidebarItemProps {
    item: SidebarItemType;
    collapsed: boolean;
}
// если обернуть в мемо, то перерисовка будет происходить только тогда, когда
// изменились пропсы
const SiedebarItem: FC<SidebarItemProps> = memo((props: SidebarItemProps) => {
    const { item, collapsed } = props;
    const { t } = useTranslation('sidebar');
    const isAuth = useSelector(getUserAuthData);

    if (item.authOnly && !isAuth) {
        return null;
    }

    return (
        <ToggleFeaturesComponent
            feature="isAppRedesigned"
            off={
                <AppLinkDeprecated
                    to={item.path}
                    theme={AppLinkTheme.SECONDARY}
                    className={classNames(
                        cls.item,
                        { [cls.collapsed]: collapsed },
                        [],
                    )}
                >
                    <item.Icon className={cls.icon} />
                    <span className={cls.link}>{t(item.text)}</span>
                </AppLinkDeprecated>
            }
            on={
                <AppLink
                    activeClassName={cls.active}
                    to={item.path}
                    variant="primary"
                    className={classNames(
                        cls.itemRedesigned,
                        { [cls.collapsedRedesigned]: collapsed },
                        [],
                    )}
                >
                    <Icon Svg={item.Icon} />
                    <span className={cls.link}>{t(item.text)}</span>
                </AppLink>
            }
        />
    );
});

export default SiedebarItem;
