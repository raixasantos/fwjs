import Nav from './Nav.svelte';

export default {
  title: 'Tab/Nav',
  component: Nav
};

const Template = (args) => ({
  Component: Nav,
  props: args,
  on: {
    click: args.onClick,
  },
});

export const ButtonDefault = Template.bind({});
ButtonDefault.args = {
  options: ['Botão 1']
};

export const ButtonSelected = Template.bind({});
ButtonSelected.args = {
  options: ['Botão 1'],
  currentTab: 0
};
