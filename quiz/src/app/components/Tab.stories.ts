// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { TabComponent } from './tab.component';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Tab/Tab',
  component: TabComponent
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<TabComponent> = (args: TabComponent) => ({
  props: args,
});

export const Default = Template.bind({});

Default.args = {
    options: ["Tab1", "Tab2", "Tab3", "Tab4"],
    texts: ["Texto do Tab1",
        "Texto do Tab2",
        "Texto do Tab3",
        "Texto do Tab4"]
  };