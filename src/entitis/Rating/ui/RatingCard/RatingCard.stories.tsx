import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { OldDesignDecorator } from '@/shared/config/storybook/OldDesignDecorator/OldDesignDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

import { RatingCard } from './RatingCard';

export default {
    title: 'entities/Rating/RatingCard',
    component: RatingCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof RatingCard>;

const Template: ComponentStory<typeof RatingCard> = (args) => (
    <RatingCard {...args} />
);

export const Deprecated = Template.bind({});
Deprecated.args = {
    hasFeedback: true,
    feedbackTitle: 'test text',
    title: 'with feedback',
};
Deprecated.decorators = [OldDesignDecorator];

export const Normal = Template.bind({});
Normal.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Green = Template.bind({});
Green.args = {};
Green.decorators = [ThemeDecorator(Theme.GREEN)];

export const WithTitle = Template.bind({});
WithTitle.args = { title: 'with title' };

export const ratedAndCommented = Template.bind({});
ratedAndCommented.args = {
    comment: 'testData',
    rate: 4,
};

export const WithFeedback = Template.bind({});
WithFeedback.args = {
    hasFeedback: true,
    feedbackTitle: 'test text',
    title: 'with feedback',
};
