import MarkdownText from "./MarkdownText.vue";

export default {
  title: 'Molecules/MarkdownText',
  component: MarkdownText,
  argTypes: {
    size: {
      control: { type: 'select', options: ['medium', 'small'] },
    },
  },
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Markdown readonly text component',
      },
    },
  },};

const Template = (args) => ({
  components: { MarkdownText },
  setup() {
    return { args };
  },
  template: '<MarkdownText v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  contentMd: '# Hello World\nThis is a **Markdown** text.',
  size: 'medium',
};

export const Small = Template.bind({});
Small.args = {
  ...Default.args,
  size: 'small',
};
