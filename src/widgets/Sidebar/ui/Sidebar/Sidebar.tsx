import React, {
    FC, memo, useMemo, useState,
} from 'react';
import { classNames } from 'shared/lib/helpers/ClassNames/ClassNames';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher';
import { Button } from 'shared/ui/Button';
import { ButtonSize, ButtonTheme } from 'shared/ui/Button/ui/Button';
import { useSelector } from 'react-redux';
import { getSidebarItems } from '../../model/selectors/getSidebarItems/getSidebarItems';
import cls from './Sidebar.module.scss';
import SidebarItem from '../SidebarItem/SidebarItem';

interface SidebarProps {
    className?:string
}

export const Sidebar: FC<SidebarProps> = memo(({ className }:SidebarProps) => {

    const [collapsed, setCollapsed] = useState(false);
    const sidebarItemsList = useSelector(getSidebarItems);
    const onToggle = ():void => {

        setCollapsed((prev) => !prev);

    };

    // использование useMemo позволяет не ререндерить компонент, когда
    // перерисовывается родитель
    const itemsList = useMemo(() => sidebarItemsList.map((item) => (
        <SidebarItem
            item={item}
            collapsed={collapsed}
            key={item.path}
        />
    )), [collapsed, sidebarItemsList]);

    return (
        <menu
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
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
        </menu>
    );

});
