import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ArticlePageGreetings } from './ArticlePageGreetings';

export default {
    title: 'features/ArticlePageGreetings',
    component: ArticlePageGreetings,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticlePageGreetings>;

const Template: ComponentStory<typeof ArticlePageGreetings> = (args) => (
    <ArticlePageGreetings />
);

export const Normal = Template.bind({});
Normal.args = {};
