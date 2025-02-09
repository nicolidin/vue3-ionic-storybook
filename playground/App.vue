<template>
  <ion-app>
    <ion-content>
      <TestComponent label="Clique moi" />
      <ArticlePreview id="dqqd" content="yeh" size="tall" :is-dragging="false"/>
    </ion-content>
  </ion-app>
</template>

<script setup lang="ts">
import { IonApp, IonContent } from '@ionic/vue';
import ArticlePreview from "@/components/Molecules/ArticlePreview/ArticlePreview.vue";
import TestComponent from "@/components/TestComponent.vue";
</script>
