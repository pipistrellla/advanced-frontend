import React, { FC, useState } from 'react'
import cls from './Sidebar.module.scss'
import { classNames } from 'shared/lib/helpers/ClassNames/ClassNames';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';

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
            <button onClick={() => onToggle()} >TOGGLE</button>
            <div className={cls.switchers}>
                <ThemeSwitcher/> 

            </div>
        </div>
    )
}

