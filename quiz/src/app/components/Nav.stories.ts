// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { NavComponent } from './nav.component';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Tab/Nav',
  component: NavComponent
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<NavComponent> = (args: NavComponent) => ({
  props: args,
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
