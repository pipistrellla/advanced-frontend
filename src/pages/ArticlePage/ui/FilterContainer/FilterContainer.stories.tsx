import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

import { FilterContainer } from './FilterContainer';

export default {
    title: 'pages/ArticlePage/FilterContainer',
    component: FilterContainer,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof FilterContainer>;

const Template: ComponentStory<typeof FilterContainer> = (args) => (
    <FilterContainer {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Green = Template.bind({});
Green.args = {};
Green.decorators = [ThemeDecorator(Theme.GREEN)];
