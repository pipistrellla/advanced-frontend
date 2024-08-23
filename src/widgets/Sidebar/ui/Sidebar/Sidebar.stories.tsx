import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { FeatureFlagsDecorator } from '@/shared/config/storybook/FeatureFlagsDecorator/FeatureFlagsDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

import { Sidebar } from './Sidebar';

export default {
    // название сториса
    title: 'widget/Sidebar',
    // компонент
    component: Sidebar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        (Story) => (
            <div style={{ height: '600px' }}>
                <Story />
            </div>
        ),
    ],
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => (
    <Sidebar {...args} />
);

export const Deprecated = Template.bind({});

Deprecated.args = {};
Deprecated.decorators = [
    StoreDecorator({
        user: {
            authData: {},
        },
    }),
    FeatureFlagsDecorator({ isAppRedesigned: false }),
];

export const Light = Template.bind({});

Light.args = {};
Light.decorators = [
    StoreDecorator({
        user: {
            authData: {},
        },
    }),
];

export const Dark = Template.bind({});

Dark.args = {};
Dark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        user: {
            authData: {},
        },
    }),
];

export const nonAuth = Template.bind({});

nonAuth.decorators = [
    StoreDecorator({
        user: {},
    }),
];
