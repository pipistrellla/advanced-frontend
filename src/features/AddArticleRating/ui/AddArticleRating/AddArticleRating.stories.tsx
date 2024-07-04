import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import AddArticleRating from './AddArticleRating';

export default {
    title: 'features/AddArticleRating',
    component: AddArticleRating,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AddArticleRating>;

const Template: ComponentStory<typeof AddArticleRating> = (args) => <AddArticleRating {...args} />;

export const Normal = Template.bind({});
Normal.args = {

};
