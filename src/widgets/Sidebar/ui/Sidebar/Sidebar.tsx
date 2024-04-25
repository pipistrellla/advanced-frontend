import React, {
    FC, memo, useMemo, useState,
} from 'react';
import { classNames } from 'shared/lib/helpers/ClassNames/ClassNames';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher';
import { Button } from 'shared/ui/Button';
import { ButtonSize, ButtonTheme } from 'shared/ui/Button/ui/Button';
import cls from './Sidebar.module.scss';
import { SidebarItemsList } from '../../model/items';
import SidebarItem from '../SidebarItem/SidebarItem';

interface SidebarProps {
    classname?:string
}

export const Sidebar: FC<SidebarProps> = memo(({ classname }:SidebarProps) => {

    const [collapsed, setCollapsed] = useState(false);
    const onToggle = ():void => {

        setCollapsed((prev) => !prev);

    };

    // использование useMemo позволяет не ререндерить компонент, когда
    // перерисовывается родитель
    const itemsList = useMemo(() => SidebarItemsList.map((item) => (
        <SidebarItem
            item={item}
            collapsed={collapsed}
            key={item.path}
        />
    )), [collapsed]);

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [classname])}
        >
            <Button
                data-testid="sidebarToggle"
                onClick={() => onToggle()}
                className={cls.collapseBtn}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                square
                size={ButtonSize.L}
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={cls.items}>
                {itemsList}
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher
                    short={collapsed}
                    className={cls.lang}
                />
            </div>
        </div>
    );

});