import { ComponentStory, ComponentMeta } from '@storybook/react';

import { OldDesignDecorator } from '@/shared/config/storybook/OldDesignDecorator/OldDesignDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

import LoginForm from './LoginForm';

export default {
    title: 'features/LoginForm/LoginForm',
    component: LoginForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => (
    <LoginForm {...args} />
);

export const Deprecated = Template.bind({});
Deprecated.args = {};
Deprecated.decorators = [
    StoreDecorator({
        loginForm: { username: 'username', password: 'password' },
    }),
    OldDesignDecorator,
];

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [
    StoreDecorator({
        loginForm: { username: 'username', password: 'password' },
    }),
];

export const PrimaryThemeDark = Template.bind({});
PrimaryThemeDark.args = {};
PrimaryThemeDark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        loginForm: { username: 'username', password: 'password' },
    }),
];

export const PrimaryThemeGreen = Template.bind({});
PrimaryThemeGreen.args = {};
PrimaryThemeGreen.decorators = [
    ThemeDecorator(Theme.GREEN),
    StoreDecorator({
        loginForm: { username: 'username', password: 'password' },
    }),
];

export const PrimaryWithError = Template.bind({});
PrimaryWithError.args = {};
PrimaryWithError.decorators = [
    StoreDecorator({
        loginForm: {
            username: 'username',
            password: 'password',
            error: 'error test text',
        },
    }),
];

export const PrimaryThemeDarkWithError = Template.bind({});
PrimaryThemeDarkWithError.args = {};
PrimaryThemeDarkWithError.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        loginForm: {
            username: 'username',
            password: 'password',
            error: 'error test text',
        },
    }),
];
