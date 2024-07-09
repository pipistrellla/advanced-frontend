import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

import Avatar from './Avatar';

const AvatarImg = 'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg';

export default {
    title: 'shared/Avatar',
    component: Avatar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    size: 150,
    src: AvatarImg,
};

export const Small = Template.bind({});
Small.args = {
    size: 50,
    src: AvatarImg,
};

export const PrimaryThemeDark = Template.bind({});
PrimaryThemeDark.args = {
    size: 150,
    src: AvatarImg,
};
PrimaryThemeDark.decorators = [ThemeDecorator(Theme.DARK)];

export const PrimaryThemeGreen = Template.bind({});
PrimaryThemeGreen.args = {
    size: 150,
    src: AvatarImg,
};
PrimaryThemeGreen.decorators = [ThemeDecorator(Theme.GREEN)];
