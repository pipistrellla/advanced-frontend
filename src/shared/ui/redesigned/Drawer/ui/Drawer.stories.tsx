import { useState } from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

import { Drawer } from './Drawer';

export default {
    title: 'shared/Drawer',
    component: Drawer,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Drawer>;

const Template: ComponentStory<typeof Drawer> = (args) => {
    const [isOpen, setIsOpen] = useState(false);

    const onOpenDrawer = () => {
        setIsOpen(true);
    };
    const oncloseDrawer = () => {
        setIsOpen(false);
    };

    return (
        <div>
            <div onClick={onOpenDrawer}>open drawer</div>
            <Drawer isOpen={isOpen} onClose={oncloseDrawer} {...args} />
        </div>
    );
};

export const Normal = Template.bind({});
Normal.args = {
    children: <div>testDrawer</div>,
};

export const Dark = Template.bind({});
Dark.args = { children: <div>testDrawer</div> };
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Green = Template.bind({});
Green.args = { children: <div>testDrawer</div> };
Green.decorators = [ThemeDecorator(Theme.GREEN)];
