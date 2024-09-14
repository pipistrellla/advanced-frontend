import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

import { UIDesignSwitcher } from './UIDesignSwitcher';

export default {
    title: 'features/UIDesignSwitcher',
    component: UIDesignSwitcher,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof UIDesignSwitcher>;

const Template: ComponentStory<typeof UIDesignSwitcher> = (args) => (
    <UIDesignSwitcher {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Green = Template.bind({});
Green.args = {};
Green.decorators = [ThemeDecorator(Theme.GREEN)];
