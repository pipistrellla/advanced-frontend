import { ComponentStory, ComponentMeta } from '@storybook/react';

import TextArea from './TextArea';

export default {
    title: ' /TextArea',
    component: TextArea,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = (args) => (
    <TextArea {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
