import { action } from '@storybook/addon-actions';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { OldDesignDecorator } from '@/shared/config/storybook/OldDesignDecorator/OldDesignDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

import AddCommentForm from './AddCommentForm';

export default {
    title: 'features/AddCommentForm',
    component: AddCommentForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AddCommentForm>;

const Template: ComponentStory<typeof AddCommentForm> = (args) => (
    <AddCommentForm {...args} />
);

export const Deprecated = Template.bind({});
Deprecated.args = {
    onSendComment: action('onSendComment'),
};
Deprecated.decorators = [OldDesignDecorator];

export const Normal = Template.bind({});
Normal.args = {
    onSendComment: action('onSendComment'),
};

export const Black = Template.bind({});
Black.args = {
    onSendComment: action('onSendComment'),
};
Black.decorators = [ThemeDecorator(Theme.DARK)];

export const Green = Template.bind({});
Green.args = {
    onSendComment: action('onSendComment'),
};
Green.decorators = [ThemeDecorator(Theme.GREEN)];
