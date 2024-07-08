import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
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

const Template: ComponentStory<typeof AddCommentForm> = (args) => <AddCommentForm {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    onSendComment: action('onSendComment'),
};
Normal.decorators = [
    StoreDecorator({}),
];

export const Black = Template.bind({});
Black.args = {
    onSendComment: action('onSendComment'),
};
Black.decorators = [
    StoreDecorator({}),
    ThemeDecorator(Theme.DARK),
];

export const Green = Template.bind({});
Green.args = {
    onSendComment: action('onSendComment'),
};
Green.decorators = [
    StoreDecorator({}),
    ThemeDecorator(Theme.GREEN),
];
