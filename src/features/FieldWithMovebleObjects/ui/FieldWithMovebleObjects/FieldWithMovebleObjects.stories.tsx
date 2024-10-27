import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { FieldWithMovebleObjects } from './FieldWithMovebleObjects';

export default {
    title: 'features/FieldWithMovebleObjects',
    component: FieldWithMovebleObjects,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof FieldWithMovebleObjects>;

const Template: ComponentStory<typeof FieldWithMovebleObjects> = (args) => (
    <FieldWithMovebleObjects {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
