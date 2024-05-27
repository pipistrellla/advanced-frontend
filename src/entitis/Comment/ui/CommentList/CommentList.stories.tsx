import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Comment } from '../../model/types/comment';
import { CommentList } from './CommentList';

export default {
    title: 'entities/Comment/CommentList',
    component: CommentList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

const testData:Comment[] = [
    {
        id: '1',
        text: 'test text',
        user: { id: '1', username: 'test', avatar: 'https://img.freepik.com/premium-photo/bearded-man-illustration_665280-67047.jpg' },
    },
    {
        id: '1',
        text: 'test text 2',
        user: { id: '1', username: 'test 2' },
    },
];

export const Normal = Template.bind({});
Normal.args = {
    comments: testData,
};

export const Dark = Template.bind({});
Dark.args = {
    comments: testData,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Green = Template.bind({});
Green.args = {
    comments: testData,
};

Green.decorators = [ThemeDecorator(Theme.GREEN)];

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
};
