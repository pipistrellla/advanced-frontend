import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text } from 'shared/ui/Text';
import { text } from 'stream/consumers';
import { Card } from './Card';

export default {
    title: 'shared/Card',
    component: Card,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    children: <Text title="test title" text="test text" />,
};

export const Dark = Template.bind({});
Dark.args = {
    children: <Text title="test title" text="test text" />,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Green = Template.bind({});
Green.args = {
    children: <Text title="test title" text="test text" />,
};
Green.decorators = [ThemeDecorator(Theme.GREEN)];
