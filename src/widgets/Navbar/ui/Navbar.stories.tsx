import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

import { Navbar } from './Navbar';

export default {
    // название сториса
    title: 'widget/Navbar',
    // компонент
    component: Navbar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [
    StoreDecorator({}),
];

export const Dark = Template.bind({});

Dark.args = {};
Dark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({}),
];

export const AuthNavbar = Template.bind({});
AuthNavbar.args = {};
AuthNavbar.decorators = [
    StoreDecorator({ user: { authData: {} } }),
];

export const AuthNavbarDark = Template.bind({});
AuthNavbarDark.args = {};
AuthNavbarDark.decorators = [
    StoreDecorator({ user: { authData: {} } }),
    ThemeDecorator(Theme.DARK),
];
