<template>
  <ion-button @click="onClick">{{ label }}</ion-button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IonButton } from "@ionic/vue";

export default defineComponent({
  components: {
    IonButton,
  },
  props: {
    label: {
      type: String,
      required: true,
    },
  },
  methods: {
    onClick() {
      console.log("Bouton cliqué !");
    },
  },
});
</script>
