import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

import AppLink, { AppLinkTheme } from './AppLink';

export default {
    // название сториса
    title: 'shared/deprecated/AppLink',
    // компонент
    component: AppLink,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => (
    <AppLink {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
    children: 'Text',
    theme: AppLinkTheme.PRIMARY,
};

export const Secondary = Template.bind({});

Secondary.args = {
    children: 'Text',
    theme: AppLinkTheme.SECONDARY,
};

export const PrimaryDark = Template.bind({});

PrimaryDark.args = {
    children: 'Text',
    theme: AppLinkTheme.PRIMARY,
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SecondaryDark = Template.bind({});

SecondaryDark.args = {
    children: 'Text',
    theme: AppLinkTheme.SECONDARY,
};
SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const PrimaryGreen = Template.bind({});

PrimaryGreen.args = {
    children: 'Text',
    theme: AppLinkTheme.PRIMARY,
};
PrimaryGreen.decorators = [ThemeDecorator(Theme.GREEN)];

export const SecondaryGreen = Template.bind({});

SecondaryGreen.args = {
    children: 'Text',
    theme: AppLinkTheme.PRIMARY,
};
SecondaryGreen.decorators = [ThemeDecorator(Theme.GREEN)];
