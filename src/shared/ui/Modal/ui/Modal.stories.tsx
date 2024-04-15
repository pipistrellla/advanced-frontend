import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';

export default {
    // название сториса
    title: 'shared/Modal',
    // компонент
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    isOpen: true,
    children: '1232131231232131323123123123123123123123',
};

export const Dark = Template.bind({});

Dark.args = {
    isOpen: true,
    children: '1232131231232131323123123123123123123123',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
