import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Country } from 'entitis/Country';
import { Currency } from 'entitis/Currency';
import avatar from 'shared/assets/tests/Storybook.png';
import { ProfileCard } from './ProfileCard';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    data: {
        age: 10,
        city: 'Ekaterinburg',
        username: 'test',
        lastname: 'test',
        country: Country.Russia,
        first: 'test',
        currency: Currency.JPY,
        avatar,
    },
};

export const PrimaryThemeDark = Template.bind({});
PrimaryThemeDark.args = {
    data: {
        age: 10,
        city: 'Ekaterinburg',
        username: 'test',
        lastname: 'test',
        country: Country.Russia,
        first: 'test',
        currency: Currency.JPY,
        avatar,
    },
};

PrimaryThemeDark.decorators = [ThemeDecorator(Theme.DARK)];

export const PrimaryWithError = Template.bind({});
PrimaryWithError.args = {
    error: 'true',
};

export const DarkWithError = Template.bind({});
DarkWithError.args = {
    error: 'true',
};
DarkWithError.decorators = [ThemeDecorator(Theme.DARK)];

export const PrimaryLoading = Template.bind({});
PrimaryLoading.args = {
    isLoading: true,
};

export const DarkLoading = Template.bind({});
DarkLoading.args = {
    isLoading: true,
};
DarkLoading.decorators = [ThemeDecorator(Theme.DARK)];
