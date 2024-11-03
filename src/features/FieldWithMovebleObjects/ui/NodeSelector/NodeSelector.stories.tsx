import { ComponentStory, ComponentMeta } from '@storybook/react';

import { NodeSelector } from './NodeSelector';

export default {
    title: 'shared/NodeSelector',
    component: NodeSelector,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof NodeSelector>;

const Template: ComponentStory<typeof NodeSelector> = (args) => (
    <NodeSelector {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
