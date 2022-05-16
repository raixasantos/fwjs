import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Panel } from './Panel';

export default {
  title: 'Tab/Panel',
  component: Panel,
} as ComponentMeta<typeof Panel>;

const Template: ComponentStory<typeof Panel> = (args) => <Panel {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: "Texto 1",
};
