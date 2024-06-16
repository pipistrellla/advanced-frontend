import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { Skeleton } from './Skeleton';

export default {
    title: 'shared/Skeleton',
    component: Skeleton,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => <Skeleton {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    width: '100%',
    height: '200px',
};

export const Dark = Template.bind({});
Dark.args = {
    width: '100%',
    height: '200px',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Green = Template.bind({});
Green.args = {
    width: '100%',
    height: '200px',
};
Green.decorators = [ThemeDecorator(Theme.GREEN)];

export const Circle = Template.bind({});
Circle.args = {
    border: '50%',
    width: '100px',
    height: '100px',
};

export const CircleDark = Template.bind({});
CircleDark.args = {
    border: '50%',
    width: '100px',
    height: '100px',
};
CircleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const CircleGreen = Template.bind({});
CircleGreen.args = {
    border: '50%',
    width: '100px',
    height: '100px',
};
CircleGreen.decorators = [ThemeDecorator(Theme.GREEN)];
