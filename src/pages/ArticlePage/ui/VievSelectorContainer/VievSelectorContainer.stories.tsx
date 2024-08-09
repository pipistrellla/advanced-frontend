import { ComponentStory, ComponentMeta } from '@storybook/react';

import { VievSelectorContainer } from './VievSelectorContainer';

export default {
    title: 'shared/VievSelectorContainer',
    component: VievSelectorContainer,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof VievSelectorContainer>;

const Template: ComponentStory<typeof VievSelectorContainer> = (args) => (
    <VievSelectorContainer {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
