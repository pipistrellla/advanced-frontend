import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

import AddProfileRating from './AddProfileRating';

export default {
    title: 'features/AddProfileRating',
    component: AddProfileRating,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AddProfileRating>;

const Template: ComponentStory<typeof AddProfileRating> = (args) => (
    <AddProfileRating {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
    ProfileId: 'testId',
};

export const Dark = Template.bind({});
Dark.args = {
    ProfileId: 'testId',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Green = Template.bind({});
Green.args = {
    ProfileId: 'testId',
};
Green.decorators = [ThemeDecorator(Theme.GREEN)];

export const Rated = Template.bind({});
Rated.args = {
    ProfileId: 'testId',
};
Rated.parameters = {
    mockData: [
        {
            url: `${__API__}/profile-ratings?userId=1&ProfileId=testId`,
            method: 'GET',
            status: 200,
            response: [
                {
                    rate: 4,
                },
            ],
        },
    ],
};

export const RatedWithComment = Template.bind({});
RatedWithComment.args = {
    ProfileId: 'testId',
};
RatedWithComment.parameters = {
    mockData: [
        {
            url: `${__API__}/profile-ratings?userId=1&ProfileId=testId`,
            method: 'GET',
            status: 200,
            response: [
                {
                    rate: 4,
                    feedback: 'testFeedback',
                },
            ],
        },
    ],
};
