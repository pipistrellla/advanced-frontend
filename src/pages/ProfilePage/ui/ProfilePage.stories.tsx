import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Country } from '@/entitis/Country';
import { Currency } from '@/entitis/Currency';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

import ProfilePage from './ProfilePage';

const avatar =
    'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => (
    <ProfilePage {...args} />
);
const testData = {
    age: 10,
    city: 'Ekaterinburg',
    username: 'test',
    lastname: 'test',
    country: Country.Russia,
    first: 'test',
    currency: Currency.JPY,
    avatar,
};

export const Primary = Template.bind({});
Primary.args = { testId: '1' };
Primary.decorators = [
    StoreDecorator({
        profile: {
            form: {
                ...testData,
            },
        },
    }),
];

export const Dark = Template.bind({});
Dark.args = { testId: '1' };
Dark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        profile: {
            form: {
                ...testData,
            },
        },
    }),
];

export const Green = Template.bind({});
Green.args = { testId: '1' };
Green.decorators = [
    ThemeDecorator(Theme.GREEN),
    StoreDecorator({
        profile: {
            form: {
                ...testData,
            },
        },
    }),
];
