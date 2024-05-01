import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Country } from 'entitis/Country';
import { Currency } from 'entitis/Currency';
import avatar from 'shared/assets/tests/Storybook.png';
import ProfilePage from './ProfilePage';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({
    profile: {
        form: {
            age: 10,
            city: 'Ekaterinburg',
            username: 'test',
            lastname: 'test',
            country: Country.Russia,
            first: 'test',
            currency: Currency.JPY,
            avatar,
        },
    },
})];

export const PrimaryThemeDark = Template.bind({});
PrimaryThemeDark.args = {};
PrimaryThemeDark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        profile: {
            form: {
                age: 10,
                city: 'Ekaterinburg',
                username: 'test',
                lastname: 'test',
                country: Country.Russia,
                first: 'test',
                currency: Currency.JPY,
                avatar,
            },
        },
    }),
];
