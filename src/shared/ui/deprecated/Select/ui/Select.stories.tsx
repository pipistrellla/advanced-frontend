import { ComponentStory, ComponentMeta } from '@storybook/react';

import { OldDesignDecorator } from '@/shared/config/storybook/OldDesignDecorator/OldDesignDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

import Select from './Select';

export default {
    title: 'shared/deprecated/Select',
    component: Select,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [OldDesignDecorator],
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

const DefaultOptions = [
    {
        content: 'test',
        value: '1231',
    },
    {
        content: 'test 2',
        value: '1232',
    },
    {
        content: 'test 3',
        value: '1233',
    },
    {
        content: 'test 4',
        value: '1234',
    },
];

export const Primary = Template.bind({});
Primary.args = {
    label: ' test text',
    options: DefaultOptions,
};

export const PrimaryThemeDark = Template.bind({});
PrimaryThemeDark.args = {
    label: ' test text',
    options: DefaultOptions,
};
PrimaryThemeDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Green = Template.bind({});
Green.args = {
    label: ' test text',
    options: DefaultOptions,
};
Green.decorators = [ThemeDecorator(Theme.GREEN)];
