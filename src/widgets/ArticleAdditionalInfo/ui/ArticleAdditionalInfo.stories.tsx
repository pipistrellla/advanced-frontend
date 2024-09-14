import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

import { ArticleAdditionalInfo } from './ArticleAdditionalInfo';

export default {
    title: 'widget/ArticleAdditionalInfo',
    component: ArticleAdditionalInfo,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleAdditionalInfo>;

const Template: ComponentStory<typeof ArticleAdditionalInfo> = (args) => (
    <ArticleAdditionalInfo {...args} />
);

const testData = {
    author: { id: '12', username: 'test Author' },
    createdAt: 'date',
    views: 10022,
};

export const Normal = Template.bind({});
Normal.args = {
    ...testData,
};

export const Dark = Template.bind({});
Dark.args = {
    ...testData,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Green = Template.bind({});
Green.args = {
    ...testData,
};
Green.decorators = [ThemeDecorator(Theme.GREEN)];
