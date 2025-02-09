import MozaicArticles from "./MozaicArticles.vue";

export default {
  title: 'Molecules/MozaicArticles',
  component: MozaicArticles,
  tags: ['autodocs'],
  argTypes: {
    articles: {
      control: 'object',
    },
  },

  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'MozaicArticles utilise Mozaic Layout en injectant ArticlePreview',
      },
    },
  },
};

const Template = (args) => ({
  components: { MozaicArticles },
  setup() {
    return { args };
  },
  template: '<MozaicArticles v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  articles: [
    {
      documentId: '1',
      slug: 'article-1',
      contentMd: '# Article 1\nThis is some sample markdown content.',
      size: 'short',
    },
    {
      documentId: '2',
      slug: 'article-2',
      contentMd: '## Article 2\nAnother markdown example.',
      size: 'tall',
    },
  ],
};
