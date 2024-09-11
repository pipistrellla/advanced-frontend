import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

import { VievSelectorContainer } from './VievSelectorContainer';

export default {
    title: 'pages/ArticlePage/VievSelectorContainer',
    component: VievSelectorContainer,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof VievSelectorContainer>;

const Template: ComponentStory<typeof VievSelectorContainer> = (args) => (
    <VievSelectorContainer {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Green = Template.bind({});
Green.args = {};
Green.decorators = [ThemeDecorator(Theme.GREEN)];
