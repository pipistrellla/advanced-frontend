import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

import { ArticleFilters } from './ArticleFilters';

export default {
    title: 'widget/ArticleFilters',
    component: ArticleFilters,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleFilters>;

const Template: ComponentStory<typeof ArticleFilters> = (args) => (
    <ArticleFilters {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Green = Template.bind({});
Green.args = {};
Green.decorators = [ThemeDecorator(Theme.GREEN)];
