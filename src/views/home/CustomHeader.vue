<template>
  <h1 class="font-black text-brand-main">Home</h1>
  <card-component :money-value=10 />
</template>

<script lang="ts">
import CardComponent from '@/components/CardComponent.vue'

export default {
  components: {
    CardComponent
  }
}

</script>
