<template>
  <div class="card w-[8rem] bg-base-100 image-full w-96 shadow-xl self-auto">
    <figure>
      <img class="" :src="item.image_link" />
    </figure>
    <div class="card-body">
      <h1 class="text-ALDIlightblue font-bold text-[2rem]">{{ item.name }}</h1>
      <h1 class="text-ALDIlightblue font-bold">Price: ${{ item.price }}</h1>
      <h1 class="text-ALDIlightblue font-bold">ALDI Meter: {{ item.ALDI_meter }}/10</h1>
      <div class="card-actions justify-end">
        <button class="btn btn-primary">Shop</button>
      </div>
    </div>
  </div>
</template>
<script setup>
defineProps({
  item: Object,
})
</script>
