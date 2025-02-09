<template>
  <MozaicLayout :items="props.articles">
    <template #default="{ element, index, isDragging }">
      <ArticlePreview :id="element.documentId" :content="element.contentMd" :size="element.size" :isDragging="isDragging" @click="openArticle(element)"/>
    </template>
  </MozaicLayout>
</template>

<script setup lang="ts">
import ArticlePreview from "@/components/Molecules/ArticlePreview/ArticlePreview.vue";
import MozaicLayout from "@/components/Molecules/Mozaic/MozaicLayout/MozaicLayout.vue";

type ArticleType = {
  documentId: string;
  slug: string;
  contentMd: string;
}
const props = defineProps<{
  articles: Array<ArticleType>
}>()


const openArticle = (article: ArticleType) => {
  console.log("click open article: ", article)
}
</script>

<style scoped lang="scss">

</style>
