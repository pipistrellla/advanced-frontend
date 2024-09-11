import { ComponentStory, ComponentMeta } from '@storybook/react';

import { User, UserRole } from '@/entitis/User';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

import { AvatarDropdown } from './AvatarDropdown';

export default {
    title: 'features/AvatarDropdown',
    component: AvatarDropdown,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AvatarDropdown>;

const Template: ComponentStory<typeof AvatarDropdown> = (args) => (
    <div style={{ width: '150px' }}>
        <AvatarDropdown {...args} />
    </div>
);

const testData: User = {
    id: '123',
    username: 'testUser',
    roles: [UserRole.ADMIN],
};

export const Normal = Template.bind({});
Normal.decorators = [
    StoreDecorator({
        user: {
            authData: testData,
        },
    }),
];
Normal.args = {};

export const Dark = Template.bind({});
Dark.decorators = [
    StoreDecorator({
        user: {
            authData: testData,
        },
    }),
    ThemeDecorator(Theme.DARK),
];
Dark.args = {};

export const Green = Template.bind({});
Green.decorators = [
    StoreDecorator({
        user: {
            authData: testData,
        },
    }),
    ThemeDecorator(Theme.GREEN),
];
Green.args = {};
