import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ArticleEditableTextBlock } from './ArticleEditableTextBlock';

export default {
    title: 'shared/ArticleEditableTextBlock',
    component: ArticleEditableTextBlock,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleEditableTextBlock>;

const Template: ComponentStory<typeof ArticleEditableTextBlock> = (args) => (
    <ArticleEditableTextBlock {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
