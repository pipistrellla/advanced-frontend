import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { Text, TextSize, TextTheme } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const PrimaryText = Template.bind({});
PrimaryText.args = {
    text: 'test text',
    title: 'test text',
};

export const PrimaryTextDark = Template.bind({});
PrimaryTextDark.args = {
    text: 'test text',
    title: 'test text',
};
PrimaryTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const TextOnly = Template.bind({});
TextOnly.args = {
    text: 'test text',
};

export const TextDarkOnly = Template.bind({});
TextDarkOnly.args = {
    text: 'test text',
};
TextDarkOnly.decorators = [ThemeDecorator(Theme.DARK)];

export const TitleOnly = Template.bind({});
TitleOnly.args = {
    title: 'test text',
};

export const TitleDarkOnly = Template.bind({});
TitleDarkOnly.args = {
    title: 'test text',
};
TitleDarkOnly.decorators = [ThemeDecorator(Theme.DARK)];

export const ErrorAll = Template.bind({});
ErrorAll.args = {
    title: 'error test text',
    text: 'error test text',
    theme: TextTheme.ERROR,
};

export const ErrorAllDark = Template.bind({});
ErrorAllDark.args = {
    title: 'error test text',
    text: 'error test text',
    theme: TextTheme.ERROR,
};
ErrorAllDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ErrorText = Template.bind({});
ErrorText.args = {
    text: 'error test text',
    theme: TextTheme.ERROR,
};

export const ErrorTextDark = Template.bind({});
ErrorTextDark.args = {
    text: 'error test text',
    theme: TextTheme.ERROR,
};
ErrorTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ErrorTitle = Template.bind({});
ErrorTitle.args = {
    title: 'error test text',
    theme: TextTheme.ERROR,
};

export const ErrorTitleDark = Template.bind({});
ErrorTitleDark.args = {
    title: 'error test text',
    theme: TextTheme.ERROR,
};
ErrorTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const GreenTextTheme = Template.bind({});
GreenTextTheme.args = {
    title: ' test text',
    text: 'text test green',
};
GreenTextTheme.decorators = [ThemeDecorator(Theme.GREEN)];

export const TextSizeS = Template.bind({});
TextSizeS.args = {
    text: 'test text',
    title: 'test text',
    size: TextSize.S,
};

export const TextSizeM = Template.bind({});
TextSizeM.args = {
    text: 'test text',
    title: 'test text',
    size: TextSize.M,
};

export const TextSizeL = Template.bind({});
TextSizeL.args = {
    text: 'test text',
    title: 'test text',
    size: TextSize.L,
};

export const invertedText = Template.bind({});
invertedText.args = {
    title: 'error test text',
    text: 'error test text',
    theme: TextTheme.INVERTED,
};
