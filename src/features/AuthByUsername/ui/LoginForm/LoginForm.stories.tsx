import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import LoginForm from './LoginForm';

export default {
    title: 'entities/LoginForm',
    component: LoginForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [
    StoreDecorator({ loginForm: { username: 'username', password: 'password' } }),
];

export const PrimaryThemeDark = Template.bind({});
PrimaryThemeDark.args = {};
PrimaryThemeDark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({ loginForm: { username: 'username', password: 'password' } }),
];

export const PrimaryThemeGreen = Template.bind({});
PrimaryThemeGreen.args = {};
PrimaryThemeGreen.decorators = [
    ThemeDecorator(Theme.GREEN),
    StoreDecorator({ loginForm: { username: 'username', password: 'password' } }),
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

export const PrimaryLoading = Template.bind({});
PrimaryLoading.args = {};
PrimaryLoading.decorators = [
    StoreDecorator({
        loginForm: {
            isLoading: true,
        },
    }),
];

export const PrimaryDarkLoading = Template.bind({});
PrimaryDarkLoading.args = {};
PrimaryDarkLoading.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        loginForm: {
            isLoading: true,
        },
    }),
];
