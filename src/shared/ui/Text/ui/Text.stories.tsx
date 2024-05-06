import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
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

export const TitileOnly = Template.bind({});
TitileOnly.args = {
    title: 'test text',
};

export const TitileDarkOnly = Template.bind({});
TitileDarkOnly.args = {
    title: 'test text',
};
TitileDarkOnly.decorators = [ThemeDecorator(Theme.DARK)];

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

export const ErrorTtitleDark = Template.bind({});
ErrorTtitleDark.args = {
    title: 'error test text',
    theme: TextTheme.ERROR,
};
ErrorTtitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const GreenTextTheme = Template.bind({});
GreenTextTheme.args = {
    title: ' test text',
    text: 'text test green',
};
GreenTextTheme.decorators = [ThemeDecorator(Theme.GREEN)];

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
