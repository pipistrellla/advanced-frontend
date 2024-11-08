import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AddMovableObject } from './AddMovableObject';

export default {
title: 'shared/AddMovableObject',
component: AddMovableObject,
argTypes: {
    backgroundColor: { control: 'color' },
},
} as ComponentMeta<typeof AddMovableObject>;

const Template: ComponentStory<typeof AddMovableObject> = (args) => <AddMovableObject { ...args } />;

export const Normal = Template.bind({});
Normal.args = {

};
