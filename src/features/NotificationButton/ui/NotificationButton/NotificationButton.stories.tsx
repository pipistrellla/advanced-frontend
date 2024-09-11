import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Notification } from '@/entitis/Notification';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

import { NotificationButton } from './NotificationButton';

const testData: Notification[] = [
    {
        id: '1',
        description: 'test description 1',
        title: 'test title 1',
    },
    {
        id: '2',
        description: 'test description 2',
        title: 'test title 2',
    },
    {
        id: '3',
        description: 'test description 3',
        title: 'test title 3',
    },
    {
        id: '4',
        description: 'test description with link',
        title: 'test title with link',
        href: '123123',
    },
];

export default {
    title: 'features/NotificationButton',
    component: NotificationButton,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    parameters: {
        mockData: [
            {
                url: `${__API__}/notifications`,
                method: 'GET',
                status: 200,
                response: testData,
            },
        ],
    },
} as ComponentMeta<typeof NotificationButton>;

const Template: ComponentStory<typeof NotificationButton> = (args) => (
    <div style={{ width: '550px' }}>
        <NotificationButton {...args} />
    </div>
);

export const Normal = Template.bind({});
Normal.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Green = Template.bind({});
Green.args = {};
Green.decorators = [ThemeDecorator(Theme.GREEN)];
