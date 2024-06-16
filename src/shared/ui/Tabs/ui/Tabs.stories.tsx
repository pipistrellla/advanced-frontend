import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Theme } from '@/app/providers/ThemeProvider';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Tabs } from './Tabs';

export default {
    title: 'shared/Tabs',
    component: Tabs,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

const testData = [
    {
        value: 'tab1',
        content: 'tab1',
    },
    {
        value: 'tab2',
        content: 'tab2',
    },
    {
        value: 'tab3',
        content: 'tab3',
    },
    {
        value: 'tab4',
        content: 'tab4',
    },
];

export const Normal = Template.bind({});
Normal.args = {
    tabs: testData,
    value: 'tab2',
    onTabClick: action('onTabClick'),
};

export const Dark = Template.bind({});
Dark.args = {
    tabs: testData,
    value: 'tab2',
    onTabClick: action('onTabClick'),
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Green = Template.bind({});

Green.args = {
    tabs: testData,
    value: 'tab2',
    onTabClick: action('onTabClick'),
};
Green.decorators = [ThemeDecorator(Theme.GREEN)];
