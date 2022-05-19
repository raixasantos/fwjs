import Tab from './Tab.svelte';

export default {
  title: 'Tab/Tab',
  component: Tab
};

const Template = (args) => ({
  Component: Tab,
  props: args,
  on: {
    click: args.onClick,
  },
});

export const Default = Template.bind({});
Default.args = {
    options: ["Tab1", "Tab2", "Tab3", "Tab4"],
    texts: ["Texto do Tab1",
        "Texto do Tab2",
        "Texto do Tab3",
        "Texto do Tab4"]
  };