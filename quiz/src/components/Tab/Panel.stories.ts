import Panel from './Panel.svelte';

export default {
  title: 'Tab/Panel',
  component: Panel
};

const Template = (args) => ({
  Component: Panel,
  props: args,
  on: {
    click: args.onClick,
  },
});

export const Default = Template.bind({});
Default.args = {
  text: "Texto 1",
};