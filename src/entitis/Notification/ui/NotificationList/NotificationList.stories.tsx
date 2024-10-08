import { ComponentStory, ComponentMeta } from '@storybook/react';

import { OldDesignDecorator } from '@/shared/config/storybook/OldDesignDecorator/OldDesignDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

import { NotificationList } from './NotificationList';
import { Notification } from '../../model/types/NotificationSchema';

export default {
    title: 'entities/Notification/NotificationList',
    component: NotificationList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof NotificationList>;

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

const Template: ComponentStory<typeof NotificationList> = (args) => (
    <NotificationList {...args} />
);

export const Deprecated = Template.bind({});
Deprecated.args = {};
Deprecated.parameters = {
    mockData: [
        {
            url: `${__API__}/notifications`,
            method: 'GET',
            status: 200,
            response: testData,
        },
    ],
};
Deprecated.decorators = [OldDesignDecorator];

export const Normal = Template.bind({});
Normal.args = {};
Normal.parameters = {
    mockData: [
        {
            url: `${__API__}/notifications`,
            method: 'GET',
            status: 200,
            response: testData,
        },
    ],
};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
Dark.parameters = {
    mockData: [
        {
            url: `${__API__}/notifications`,
            method: 'GET',
            status: 200,
            response: testData,
        },
    ],
};

export const Green = Template.bind({});
Green.args = {};
Green.decorators = [ThemeDecorator(Theme.GREEN)];
Green.parameters = {
    mockData: [
        {
            url: `${__API__}/notifications`,
            method: 'GET',
            status: 200,
            response: testData,
        },
    ],
};
