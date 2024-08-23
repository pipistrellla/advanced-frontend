import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

import { Button } from './Button';

export default {
    // название сториса
    title: 'shared/Button',
    // компонент
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    children: 'Text',
};

export const Clear = Template.bind({});

Clear.args = {
    children: 'Text',
    variant: 'clear',
};

export const DarkTheme = Template.bind({});

DarkTheme.args = {
    children: 'Text',
};
DarkTheme.decorators = [ThemeDecorator(Theme.DARK)];

export const GreenTheme = Template.bind({});

GreenTheme.args = {
    children: 'Text',
};
GreenTheme.decorators = [ThemeDecorator(Theme.GREEN)];
