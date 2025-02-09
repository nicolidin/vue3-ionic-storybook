import TestComponent from "../../src/components/TestComponent.vue";
import { defineCustomElements } from "@ionic/core/loader";

defineCustomElements(window); // Active les animations Ionic

export default {
  title: "Components/TestComponent",
  component: TestComponent,
  argTypes: {
    label: { control: "text" },
  },
};

const Template = (args: any) => ({
  components: { TestComponent },
  setup() {
    return { args };
  },
  template: '<TestComponent v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  label: "Clique moi",
};
