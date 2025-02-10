<template>
  <div class="">
    <div class="navbar w-[100%] bg-ALDIdarkblue static">
      <figure class="absolute left-[2rem]">
        <img
          class="h-[5rem]"
          src="https://corporate.aldi.us/fileadmin/fm-dam/logos/ALDI_2017.png"
          alt="ALDIs"
        />
      </figure>
      <h1 class="absolute left-[50%] top-[50%] text-ALDIyellow text-[2rem]">Shop at ALDIs!</h1>
      <div class="dropdown dropdown-end">
        <div tabindex="0" role="button" class="btn m-1">Click</div>
        <ul
          tabindex="0"
          class="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
        >
          <li><a>Item 1</a></li>
          <li><a>Item 2</a></li>
        </ul>
      </div>
    </div>
    <div class="bg-ALDIorange flex flex-wrap justify-center min-w-screen">
      <ul class="steps">
        <li data-content="★" class="step step-neutral">Browse at ALDI</li>
        <li data-content="?" class="step step-neutral">Shop at ALDI</li>
        <li data-content="?" class="step">Beat the ALDI meter</li>
      </ul>
    </div>
    <div
      class="bg-ALDIorange flex flex-wrap justify-center gap-4 py-[1.5rem] min-w-screen min-h-screen"
    >
      <displaycard v-for="item in items" :key="item.name" :item="item" @click="console.log(item)" />
    </div>
  </div>
</template>
<script setup>
import displaycard from './components/displaycard.vue'
import { items } from './array.js'
let initbalance = 50
</script>
