import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { OldDesignDecorator } from '@/shared/config/storybook/OldDesignDecorator/OldDesignDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

import { ThemeSwitcher } from './ThemeSwitcher';

export default {
    // название сториса
    title: 'features/ThemeSwitcher',
    // компонент
    component: ThemeSwitcher,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ThemeSwitcher>;

const Template: ComponentStory<typeof ThemeSwitcher> = (args) => (
    <ThemeSwitcher {...args} />
);

export const Deprecated = Template.bind({});
Deprecated.args = {};
Deprecated.decorators = [OldDesignDecorator];

export const Normal = Template.bind({});

Normal.args = {};

export const Dark = Template.bind({});

Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Green = Template.bind({});

Green.args = {};
Green.decorators = [ThemeDecorator(Theme.GREEN)];
