<template>
  <div>
    <p>
      <span>Hi, {{username}}</span>
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    username: String
  }
})
</script>

<style scoped>
p span {
  padding-bottom: 8px;
  border-bottom: solid 2px #77CB5B;
}
</style>
