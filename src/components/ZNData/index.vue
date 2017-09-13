<template>
  <ul v-if="data" class="data">
    <li>{{data.date}}</li>
    <li>{{data.avg}}</li>
    <li>{{data.max}}</li>
    <li>{{data.min}}</li>
  </ul>
</template>
<script>
import Vue from 'vue';

export default {
  props: ['data']
}
</script>
<style lang="less" scoped>

</style>
