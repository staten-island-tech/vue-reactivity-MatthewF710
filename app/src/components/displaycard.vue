<template>
  <div class="">
    <img class="" :src="item.image_link" />
    <h2 class="">{{ item.name }}</h2>
    <h3 class="">Price: ${{ item.price }}</h3>
    <h3 class="">ALDI Meter: {{ item.ALDI_meter }}/10</h3>
  </div>
</template>
<script setup>
defineProps({
  item: Object,
})
</script>
