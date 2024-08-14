import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MainLayout } from './MainLayout';

export default {
    title: 'shared/layout/MainLayout',
    component: MainLayout,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof MainLayout>;

const Template: ComponentStory<typeof MainLayout> = (args) => (
    <MainLayout {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
    content: <div>content</div>,
    header: <div>header</div>,
    sidebar: <div>sidebar</div>,
    toolbar: <div>toolbar</div>,
};
