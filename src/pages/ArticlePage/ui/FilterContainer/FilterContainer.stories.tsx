import { ComponentStory, ComponentMeta } from '@storybook/react';

import { FilterContainer } from './FilterContainer';

export default {
    title: 'shared/FilterContainer',
    component: FilterContainer,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof FilterContainer>;

const Template: ComponentStory<typeof FilterContainer> = (args) => (
    <FilterContainer {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
