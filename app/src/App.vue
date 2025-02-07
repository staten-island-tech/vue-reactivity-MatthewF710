<template>
  <div class="bg-ALDIorange">
    <div class="navbar flex justify-between w-[100%] bg-ALDIdarkblue static">
      <figure>
        <img
          class="h-[5rem]"
          src="https://corporate.aldi.us/fileadmin/fm-dam/logos/ALDI_2017.png"
          alt="ALDIs"
        />
      </figure>
      <h1 class="text-ALDIyellow text-[2rem]">Shop at ALDIs!</h1>
      <h1>s</h1>
    </div>
    <ul class="steps">
      <li data-content="★" class="step step-neutral">Step 1</li>
      <li data-content="?" class="step step-neutral">Step 2</li>
      <li data-content="?" class="step">Step 3</li>
      <li data-content="?" class="step">Step 4</li>
    </ul>
    <div class="flex flex-wrap justify-center gap-4 py-[1.5rem] min-w-screen">
      <displaycard v-for="item in items" :key="item.name" :item="item" />
    </div>
  </div>
</template>
<script setup>
import displaycard from './components/displaycard.vue'
import { items } from './array.js'
</script>
