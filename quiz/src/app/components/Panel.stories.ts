// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { PanelComponent } from './panel.component';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Tab/Panel',
  component: PanelComponent
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<PanelComponent> = (args: PanelComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  text: "Texto 1",
};