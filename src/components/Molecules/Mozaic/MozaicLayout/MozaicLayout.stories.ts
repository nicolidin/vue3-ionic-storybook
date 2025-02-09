import MozaicLayout from "./MozaicLayout.vue";

export default {
  title: 'Molecules/MozaicLayout',
  component: MozaicLayout,
  argTypes: {
    items: {
      control: 'object',
    },
  },
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Mozaic layout utilisable pour créer des mozaic d\'élements en injanctant en slot les éléments',
      },
    },
  },};


const Template = (args) => ({
  components: { MozaicLayout },
  setup() {
    return { args };
  },
  template: `
    <MozaicLayout v-bind="args">
      <template #default="{ element, index, isDragging }">
        <div :style="{ background: 'gray', color: 'white' }">
          <p> Mock Div for story-book with slot data: </p>
          <strong>{{ element.contentMd }}</strong>
          <p> index: {{index}}</p>
          <p> isDragging: {{isDragging}}</p>
        </div>
      </template>
    </MozaicLayout>
  `,
});

export const Default = Template.bind({});
Default.args = {
  items: [
    { contentMd: 'Short text', id: '1' },
    { contentMd: 'A bit longer text to test the sizing logic.', id: '2' },
    { contentMd: 'An even longer text that should probably be classified as taller.', id: '3' },
    { contentMd: 'This is a very long text that will be categorized as the tallest size.', id: '4' },
  ],
};
