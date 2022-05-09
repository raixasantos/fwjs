import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Tab } from './Tab';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Tab/Tab',
  component: Tab
} as ComponentMeta<typeof Tab>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Tab> = (args) => <Tab {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  options: ["Tab1", "Tab2", "Tab3", "Tab4"],
  texts: ["Texto do Tab1",
      "Texto do Tab2",
      "Texto do Tab3",
      "Texto do Tab4"]
};

