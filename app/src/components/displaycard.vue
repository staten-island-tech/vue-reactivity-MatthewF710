<template>
  <div
    class="card h-[12rem] w-[18rem] bg-ALDIlightblue image-full shadow-xl self-auto border border-solid border-ALDIdark rounded-lg overflow-hidden"
  >
    <figure class="flex justify-center items-center h-1/2">
      <img class="h-full object-contain" :src="item.image_link" alt="Product Image" />
    </figure>
    <div class="card-body flex flex-col justify-between p-4">
      <h1 class="text-ALDIlightblue font-bold text-[1.5rem]">{{ item.name }}</h1>
      <h2 class="text-ALDIlightblue font-semibold text-[1rem]">Price: ${{ item.price }}</h2>
      <h2 class="text-ALDIlightblue font-semibold text-[1rem]">
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
