import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

import { Dropdown, DropdownItem } from './Dropdown';
import { Button } from '../../../Button';

export default {
    title: 'shared/Popups/Dropdown',
    component: Dropdown,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        (Story) => (
            <div style={{ padding: 120, width: '100px' }}>
                <Story />
            </div>
        ),
    ],
} as ComponentMeta<typeof Dropdown>;

const testData: DropdownItem[] = [
    {
        content: 'first',
    },
    {
        content: 'second',
    },
    {
        content: 'third',
    },
];

const Template: ComponentStory<typeof Dropdown> = (args) => (
    <Dropdown {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
    trigger: <Button>open</Button>,
    items: testData,
};

export const Dark = Template.bind({});
Dark.args = {
    trigger: <Button>open</Button>,
    items: testData,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Green = Template.bind({});
Green.args = {
    trigger: <Button>open</Button>,
    items: testData,
};
Green.decorators = [ThemeDecorator(Theme.GREEN)];

export const TopRightDirection = Template.bind({});
TopRightDirection.args = {
    trigger: <Button>open</Button>,
    items: testData,
    direction: 'top right',
};

export const TopLeftDirection = Template.bind({});
TopLeftDirection.args = {
    trigger: <Button>open</Button>,
    items: testData,
    direction: 'top left',
};

export const BotRightDirection = Template.bind({});
BotRightDirection.args = {
    trigger: <Button>open</Button>,
    items: testData,
    direction: 'bottom right',
};

export const BotLeftDirection = Template.bind({});
BotLeftDirection.args = {
    trigger: <Button>open</Button>,
    items: testData,
    direction: 'bottom left',
};
