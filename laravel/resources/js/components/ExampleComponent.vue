<template>
  <div class="mx-auto text-center p-20">
    <h1 class="text-green-700">This is an example component</h1>
    <p class="italic text-sm">Tailwindcss</p>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({ components: {} })
export default class ExampleComponent extends Vue {}
</script>
