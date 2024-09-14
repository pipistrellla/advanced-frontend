import { ComponentStory, ComponentMeta } from '@storybook/react';

import { DetailsContainer } from './DetailsContainer';

export default {
    title: 'pages/ArticleDetailsPage/DetailsContainer',
    component: DetailsContainer,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof DetailsContainer>;

const Template: ComponentStory<typeof DetailsContainer> = (args) => (
    <DetailsContainer {...args} />
);
// TODO разобраться с useParams
export const Normal = Template.bind({});
Normal.args = {};
