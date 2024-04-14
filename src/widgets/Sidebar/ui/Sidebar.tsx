import React, { FC, useState } from 'react';
import { classNames } from 'shared/lib/helpers/ClassNames/ClassNames';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher';
import { Button } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    classname?:string
}

export const Sidebar: FC<SidebarProps> = ({ classname }) => {

    const [collapsed, setCollapsed] = useState(false);
    const { t } = useTranslation('sidebar');
    const onToggle = ():void => {

        setCollapsed((prev) => !prev);

    };

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [classname])}
        >
            <Button
                data-testid="sidebarToggle"
                onClick={() => onToggle()}
            >
                {t('Сменить')}
            </Button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} />
            </div>
        </div>
    );

};
