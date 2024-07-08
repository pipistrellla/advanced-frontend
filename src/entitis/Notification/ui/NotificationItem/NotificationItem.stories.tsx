import { ComponentStory, ComponentMeta } from '@storybook/react';
import { NotificationItem } from './NotificationItem';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';

export default {
    title: 'entities/Notification/NotificationItem',
    component: NotificationItem,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof NotificationItem>;

const Template: ComponentStory<typeof NotificationItem> = (args) => <NotificationItem {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    item: {
        description: 'test',
        id: '1',
        title: 'test title',
    },
};

export const Dark = Template.bind({});
Dark.args = {
    item: {
        description: 'test',
        id: '1',
        title: 'test title',
    },
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Green = Template.bind({});
Green.args = {
    item: {
        description: 'test',
        id: '1',
        title: 'test title',
    },
};
Green.decorators = [ThemeDecorator(Theme.GREEN)];
