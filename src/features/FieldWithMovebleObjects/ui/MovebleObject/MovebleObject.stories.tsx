import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MovebleObject } from './MovebleObject';

export default {
    title: ' /MovebleObject',
    component: MovebleObject,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof MovebleObject>;

const Template: ComponentStory<typeof MovebleObject> = (args) => (
    <MovebleObject {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
