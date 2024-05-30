import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ListBox, ListBoxItem } from './ListBox';

export default {
    title: 'shared/ListBox',
    component: ListBox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ListBox>;

const testData: ListBoxItem[] = [
    {
        content: 'first',
        value: 'first',
    },
    {
        content: 'second',
        value: 'second',
    },
    {
        content: 'disabled',
        value: 'disabled',
        disabled: true,
    },
    {
        content: 'third',
        value: 'third',
    },
];

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    items: testData,
    defaultValue: testData[0].value,
    value: undefined,
    label: 'test data',
};

export const Black = Template.bind({});
Black.args = {
    items: testData,
    defaultValue: testData[0].value,
    value: undefined,
    label: 'test data',
};
Black.decorators = [ThemeDecorator(Theme.DARK)];

export const Green = Template.bind({});
Green.args = {
    items: testData,
    defaultValue: testData[0].value,
    value: undefined,
    label: 'test data',
};
Green.decorators = [ThemeDecorator(Theme.GREEN)];

export const Readonly = Template.bind({});
Readonly.args = {
    readonly: true,
    items: testData,
    defaultValue: testData[0].value,
    value: undefined,
};

export const TopDirection = Template.bind({});
TopDirection.args = {
    items: testData,
    defaultValue: testData[0].value,
    value: undefined,
    direction: 'top',
};

export const NoLabel = Template.bind({});
NoLabel.args = {
    items: testData,
    defaultValue: testData[0].value,
};
