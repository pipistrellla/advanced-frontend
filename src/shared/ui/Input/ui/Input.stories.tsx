import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import Input from './Input';

export default {
    title: 'shared/Input',
    component: Input,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    placeholder: 'test text',
};

export const PrimaryWithText = Template.bind({});
PrimaryWithText.args = {
    placeholder: 'test text',
    value: 'test text',
};

export const PrimaryThemeDark = Template.bind({});
PrimaryThemeDark.args = {
    placeholder: 'test text',
    value: 'test text',
};
PrimaryThemeDark.decorators = [ThemeDecorator(Theme.DARK)];

export const PrimaryThemeGreen = Template.bind({});
PrimaryThemeGreen.args = {
    placeholder: 'test text',
    value: 'test text',
};
PrimaryThemeGreen.decorators = [ThemeDecorator(Theme.GREEN)];
