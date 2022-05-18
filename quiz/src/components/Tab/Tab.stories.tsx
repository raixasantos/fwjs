import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Tab } from './Tab';

export default {
  title: 'Tab/Tab',
  component: Tab
} as ComponentMeta<typeof Tab>;

const Template: ComponentStory<typeof Tab> = (args) => <Tab {...args} />;

export const Default = Template.bind({});

Default.args = {
  options: ["Tab1", "Tab2", "Tab3", "Tab4"],
  texts: ["Texto do Tab1",
      "Texto do Tab2",
      "Texto do Tab3",
      "Texto do Tab4"]
};
