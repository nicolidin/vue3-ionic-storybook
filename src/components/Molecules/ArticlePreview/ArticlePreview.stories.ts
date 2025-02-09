import ArticlePreview from '@/components/Molecules/ArticlePreview/ArticlePreview.vue';

export default {
  title: 'Molecules/ArticlePreview',
  component: ArticlePreview,
  argTypes: {
    size: {
      control: { type: 'select', options: ['short', 'tall', 'taller', 'tallest'] },
    },
    isDragging: { control: 'boolean' },
  },
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Article Preview can be use in mozaic but also everywhere',
      },
    },
  },};

const Template = (args) => ({
  components: { ArticlePreview },
  setup() {
    return { args };
  },
  template: '<ArticlePreview v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  id: '1',
  content: 'This is a sample article preview content. It supports **Markdown**.',
  size: 'short',
  isDragging: false,
};

export const Dragging = Template.bind({});
Dragging.args = {
  ...Default.args,
  isDragging: true,
};

export const Tallest = Template.bind({});
Tallest.args = {
  ...Default.args,
  size: 'tallest',
};
