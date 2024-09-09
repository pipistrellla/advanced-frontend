import { ComponentStory, ComponentMeta } from '@storybook/react';

import { OldDesignDecorator } from '@/shared/config/storybook/OldDesignDecorator/OldDesignDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

import { CommentCard } from './CommentCard';

export default {
    title: 'entities/Comment/CommentCard',
    component: CommentCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentCard>;

const commentData = {
    id: '1',
    text: 'test text',
    user: {
        id: '1',
        username: 'test',
        avatar: 'https://img.freepik.com/premium-photo/bearded-man-illustration_665280-67047.jpg',
    },
};

const Template: ComponentStory<typeof CommentCard> = (args) => (
    <CommentCard {...args} />
);

export const Deprecated = Template.bind({});
Deprecated.args = {
    comment: commentData,
};
Deprecated.decorators = [OldDesignDecorator];

export const LoadingDeprecated = Template.bind({});
LoadingDeprecated.args = {
    isLoading: true,
};
LoadingDeprecated.decorators = [OldDesignDecorator];

export const Normal = Template.bind({});
Normal.args = {
    comment: commentData,
};

export const Dark = Template.bind({});
Dark.args = {
    comment: commentData,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Green = Template.bind({});
Green.args = {
    comment: commentData,
};
Green.decorators = [ThemeDecorator(Theme.GREEN)];

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
};
