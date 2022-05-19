import Tab from './Tab.vue';

export default {
  title: 'Tab/Tab',
  component: Tab,
};

const Template = (args) => ({
  components: { Tab },
  setup() {
    return { args };
  },
  template: '<Tab v-bind="args" />',
});

export const Default = Template.bind({});

Default.args = {
    options: ["Tab1", "Tab2", "Tab3", "Tab4"],
    texts: ["Texto do Tab1",
        "Texto do Tab2",
        "Texto do Tab3",
        "Texto do Tab4"]
  };