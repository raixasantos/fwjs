import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Nav } from './Nav';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Tab/Nav',
  component: Nav
} as ComponentMeta<typeof Nav>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Nav> = (args) => <Nav {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
// Separar em padrão e selecionado
Primary.args = {
  options: ['Botão 1', 'Botão 2'],
  currentTab: 0
};
