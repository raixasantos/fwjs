import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Tab } from './Tab';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Tab/Tab',
  component: Tab,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Tab>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Tab> = (args) => <Tab {...args} />;

export const Primary = Template.bind({});