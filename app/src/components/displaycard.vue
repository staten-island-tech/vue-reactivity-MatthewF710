<template>
  <div
    class="card h-[40vh] w-[40vh] bg-ALDIblue image-full shadow-xl self-auto border-2 border-ALDIred rounded-lg border-solid overflow-hidden"
  >
    <figure class="flex justify-center items-center h-1/2">
      <img class="h-full object-contain" :src="item.image_link" alt="Product" />
    </figure>
    <div class="card-body flex flex-col justify-between p-4">
      <h1 class="text-ALDIwhite font-ALDIFont font-bold text-[1.5rem]">{{ item.name }}</h1>
      <h2 class="text-ALDIyellow font-semibold text-[1rem]">Price: ${{ item.price }}</h2>
      <h2 class="text-ALDIyellow font-semibold text-[1rem]">
        ALDI Meter: {{ item.ALDI_meter }}/10
      </h2>
      <div class="card-actions mt-2 flex justify-end">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script setup>
defineProps({
  item: Object,
})
</script>
