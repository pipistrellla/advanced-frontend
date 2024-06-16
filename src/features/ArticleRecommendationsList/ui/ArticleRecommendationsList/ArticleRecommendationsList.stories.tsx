import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import withMock from 'storybook-addon-mock';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Article, ArticleType } from '@/entitis/Article';
import { ArticleRecommendationsList } from './ArticleRecommendationsList';

export default {
    title: 'features/ArticleRecommendationsList',
    component: ArticleRecommendationsList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [withMock],
} as ComponentMeta<typeof ArticleRecommendationsList>;

const Template: ComponentStory<typeof ArticleRecommendationsList> = (args) => <ArticleRecommendationsList {...args} />;

const article: Article = {
    id: '1',
    img: 'https://img.redbull.com/images/c_crop,x_136,y_0,h_1050,w_840/c_fill,w_450,h_600/q_auto:low,f_auto/redbullcom/2019/02/27/cdea6c7e-e9c8-44e6-af24-81bdc4900210/kayle-lol-splash',
    createdAt: '12.12.1212',
    views: 123,
    user: { id: '1', username: '123' },
    blocks: [],
    type: [ArticleType.IT],
    title: '123',
    subtitle: '123 123',
};

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({})];
Normal.parameters = {
    mockData: [
        {
            url: `${__API__}/articles?_limit=3`,
            method: 'GET',
            status: 200,
            response: [
                { ...article, id: '1' },
                { ...article, id: '2' },
                { ...article, id: '3' },
            ],
        },
    ],
};
