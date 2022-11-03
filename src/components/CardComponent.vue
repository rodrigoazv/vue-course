<template>
  <div class="hello">
    <h1>{{ formatCurrency(moneyValue) }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { FormatCurrency } from '@/utils/format-currency'

export default defineComponent({
  name: 'CardComponent',
  props: {
    moneyValue: {
      type: Number,
      required: true
    }
  },
  methods: {
    formatCurrency: FormatCurrency
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  border: 1px solid #333;
  border-radius: 4px;
  padding: 10px;
}
</style>
