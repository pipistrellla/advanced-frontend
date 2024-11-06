import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ArticleEditHeader } from './ArticleEditHeader';

export default {
title: 'shared/ArticleEditHeader',
component: ArticleEditHeader,
argTypes: {
    backgroundColor: { control: 'color' },
},
} as ComponentMeta<typeof ArticleEditHeader>;

const Template: ComponentStory<typeof ArticleEditHeader> = (args) => <ArticleEditHeader { ...args } />;

export const Normal = Template.bind({});
Normal.args = {

};
