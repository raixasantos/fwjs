import Panel from './Panel.vue';

export default {
  title: 'Tab/Panel',
  component: Panel,
};

const Template = (args) => ({
  components: { Panel },
  setup() {
    return { args };
  },
  template: '<Panel v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  text: "Texto 1",
};