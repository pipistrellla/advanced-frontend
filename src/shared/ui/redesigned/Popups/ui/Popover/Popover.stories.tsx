import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

import { Popover } from './Popover';

export default {
    title: 'shared/Popups/Popover',
    component: Popover,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Popover>;

const Template: ComponentStory<typeof Popover> = (args) => (
    <Popover {...args} />
);

const testData: string[] = new Array(5).fill(<div>test Data</div>);

export const Normal = Template.bind({});
Normal.args = {
    trigger: <div>popover test</div>,
    children: testData,
};

export const Dark = Template.bind({});
Dark.args = {
    trigger: <div>popover test</div>,
    children: testData,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Green = Template.bind({});
Green.args = {
    trigger: <div>popover test</div>,
    children: testData,
};
Green.decorators = [ThemeDecorator(Theme.GREEN)];
