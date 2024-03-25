import React, { FC, useState } from 'react'
import cls from './Sidebar.module.scss'
import { classNames } from 'shared/lib/helpers/ClassNames/ClassNames';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import Button from 'shared/ui/Button/ui/Button';
import { LangSwitcher } from 'shared/ui/LangSwitcher';

interface SidebarProps {
    classname?:string
}

export const Sidebar: FC<SidebarProps> = ({classname}) => {

    const [collapsed, setCollapsed] = useState(false);

    const onToggle = ():void => { 
        setCollapsed(prev=> !prev)
    }

    return (
        <div 
        className={classNames(cls.Sidebar,{[cls.collapsed] :collapsed}, [classname])}
        >
            <Button onClick={() => onToggle()} >TOGGLE</Button>
            <div className={cls.switchers}>
                <ThemeSwitcher/> 
                <LangSwitcher className={cls.lang}/>
            </div>
        </div>
    )
}

