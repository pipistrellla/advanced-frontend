import React, { FC, memo } from 'react';
import { t } from 'i18next';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink';
import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';
import { getUserAuthData } from '@/entitis/User';
import { SidebarItemType } from '../../model/types/items';
import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
    item:SidebarItemType;
    collapsed: boolean
}
// если обернуть в мемо, то перерисовка будет происходить только тогда, когда
// изменились пропсы
const SiedebarItem: FC<SidebarItemProps> = memo((props:SidebarItemProps) => {

    const {
        item,
        collapsed,
    } = props;
    const { t } = useTranslation('sidebar');
    const isAuth = useSelector(getUserAuthData);

    if (item.authOnly && !isAuth)
        return null;

    return (
        <AppLink
            to={item.path}
            theme={AppLinkTheme.SECONDARY}
            className={classNames(cls.item, { [cls.collapsed]: collapsed }, [])}
        >
            <item.Icon className={cls.icon} />
            <span className={cls.link}>{t(item.text)}</span>
        </AppLink>
    );

});

export default SiedebarItem;
