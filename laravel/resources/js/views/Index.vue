<template>
  <h1 class="text-xl text-green-300">This is an example component</h1>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class Index extends Vue {
  //
  mounted() {
    console.log("Component mounted.");
  }
}
</script>
