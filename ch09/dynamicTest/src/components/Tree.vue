<template>
  <ul>
    <li v-for="s in subs" class="s.type" :key="s.name">
      {{ s.name }}
      <tree :subs="s.subs"/>
    </li>
  </ul>
</template>

<script>
export default {
  name : 'tree',
  props : ["subs"]
}
</script>

<style>

</style>
