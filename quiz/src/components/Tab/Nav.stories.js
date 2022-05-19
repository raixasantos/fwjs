import Nav from './Nav.vue';

export default {
  title: 'Tab/Nav',
  component: Nav,
};

const Template = (args) => ({
  components: { Nav },
  setup() {
    return { args };
  },
  template: '<Nav v-bind="args" />',
});

export const ButtonDefault = Template.bind({});
ButtonDefault.args = {
  options: ['Botão 1']
};

export const ButtonSelected = Template.bind({});
ButtonSelected.args = {
  options: ['Botão 1'],
  selection: 0
};