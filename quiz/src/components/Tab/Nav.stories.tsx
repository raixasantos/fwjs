import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Nav } from './Nav';

export default {
  title: 'Tab/Nav',
  component: Nav
} as ComponentMeta<typeof Nav>;

const Template: ComponentStory<typeof Nav> = (args) => <Nav {...args} />;

export const ButtonDefault = Template.bind({});
ButtonDefault.args = {
  options: ['Botão 1']
};

export const ButtonSelected = Template.bind({});
ButtonSelected.args = {
  options: ['Botão 1'],
  currentTab: 0
};
