import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Flex } from './Flex';

export default {
    title: 'shared/Flex',
    component: Flex,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Flex>;

const testData = (
    <>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
    </>
);

const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args} />;

export const Row = Template.bind({});
Row.args = {
    children: testData,
    direction: 'row',
};

export const RowGap4 = Template.bind({});
RowGap4.args = {
    children: testData,
    gap: '4',
    direction: 'row',
};

export const RowGap8 = Template.bind({});
RowGap8.args = {
    children: testData,
    gap: '8',
    direction: 'row',
};

export const RowGap16 = Template.bind({});
RowGap16.args = {
    children: testData,
    gap: '16',
    direction: 'row',
};

export const RowGap32 = Template.bind({});
RowGap32.args = {
    children: testData,
    gap: '32',
    direction: 'row',
};

export const Column = Template.bind({});
Column.args = {
    children: testData,
    direction: 'column',
};

export const ColumnGap4 = Template.bind({});
ColumnGap4.args = {
    children: testData,
    gap: '4',
    direction: 'column',
};

export const ColumnGap8 = Template.bind({});
ColumnGap8.args = {
    children: testData,
    gap: '8',
    direction: 'column',
};

export const ColumnGap16 = Template.bind({});
ColumnGap16.args = {
    children: testData,
    gap: '16',
    direction: 'column',
};

export const ColumnGap32 = Template.bind({});
ColumnGap32.args = {
    children: testData,
    gap: '32',
    direction: 'column',
};

export const ColumnAlignCenter = Template.bind({});
ColumnAlignCenter.args = {
    children: testData,
    align: 'center',
    direction: 'column',
};

export const ColumnAlignEnd = Template.bind({});
ColumnAlignEnd.args = {
    children: testData,
    align: 'end',
    direction: 'column',
};

export const ColumnAlignStart = Template.bind({});
ColumnAlignStart.args = {
    children: testData,
    align: 'start',
    direction: 'column',
};
