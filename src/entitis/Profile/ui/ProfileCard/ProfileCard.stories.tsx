import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Country } from '@/entitis/Country';
import { Currency } from '@/entitis/Currency';
import { OldDesignDecorator } from '@/shared/config/storybook/OldDesignDecorator/OldDesignDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

import { ProfileCard } from './ProfileCard';
import { Profile } from '../../model/types/profile';

const avatar =
    'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg';
export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => (
    <ProfileCard {...args} />
);

const defaultData: Profile = {
    age: 10,
    city: 'Ekaterinburg',
    username: 'test',
    lastname: 'test',
    country: Country.Russia,
    first: 'test',
    currency: Currency.JPY,
    avatar,
};

export const Deprecated = Template.bind({});
Deprecated.args = {
    data: {
        ...defaultData,
    },
};
Deprecated.decorators = [OldDesignDecorator];

export const LoadingDeprecated = Template.bind({});
LoadingDeprecated.args = {
    isLoading: true,
};
LoadingDeprecated.decorators = [OldDesignDecorator];

export const Primary = Template.bind({});
Primary.args = {
    data: {
        ...defaultData,
    },
};

export const PrimaryThemeDark = Template.bind({});
PrimaryThemeDark.args = {
    data: {
        ...defaultData,
    },
};

PrimaryThemeDark.decorators = [ThemeDecorator(Theme.DARK)];

export const PrimaryThemeGreen = Template.bind({});
PrimaryThemeGreen.args = {
    data: {
        ...defaultData,
    },
};

PrimaryThemeGreen.decorators = [ThemeDecorator(Theme.GREEN)];

export const PrimaryWithError = Template.bind({});
PrimaryWithError.args = {
    error: 'true',
};

export const DarkWithError = Template.bind({});
DarkWithError.args = {
    error: 'true',
};
DarkWithError.decorators = [ThemeDecorator(Theme.DARK)];

export const GreenWithError = Template.bind({});
GreenWithError.args = {
    error: 'true',
};
GreenWithError.decorators = [ThemeDecorator(Theme.GREEN)];

export const PrimaryLoading = Template.bind({});
PrimaryLoading.args = {
    isLoading: true,
};

export const DarkLoading = Template.bind({});
DarkLoading.args = {
    isLoading: true,
};
DarkLoading.decorators = [ThemeDecorator(Theme.DARK)];

export const GreenLoading = Template.bind({});
GreenLoading.args = {
    isLoading: true,
};
GreenLoading.decorators = [ThemeDecorator(Theme.GREEN)];
