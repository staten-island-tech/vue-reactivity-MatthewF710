<template>
  <div class="min-h-screen bg-ALDIorange">
    <!-- Navbar -->
    <div
      class="navbar bg-ALDIdarkblue w-full px-6 py-3 flex justify-between items-center shadow-lg"
    >
      <figure>
        <img
          class="h-16"
          src="https://corporate.aldi.us/fileadmin/fm-dam/logos/ALDI_2017.png"
          alt="ALDI Logo"
        />
      </figure>
      <h1 class="text-ALDIyellow text-3xl font-bold">Shop at ALDI!</h1>
      <div class="dropdown dropdown-end">
        <button tabindex="0" class="btn btn-primary">Menu</button>
        <ul tabindex="0" class="dropdown-content menu bg-white shadow-md rounded-box w-40 mt-2">
          <li><a>Item 1</a></li>
          <li><a>Item 2</a></li>
        </ul>
      </div>
    </div>
    <div class="flex justify-center py-6">
      <ul class="steps">
        <li data-content="★" class="step step-neutral">Browse at ALDI</li>
        <li data-content="?" class="step step-neutral">Shop at ALDI</li>
        <li data-content="?" class="step">Beat the ALDI meter</li>
      </ul>
    </div>
    <div class="flex flex-wrap justify-center gap-6 py-6">
      <displaycard
        v-for="item in selectedItems"
        :key="item.name"
        :item="item"
        @click="console.log(item)"
      />
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import displaycard from './components/displaycard.vue'
import { items } from './array.js'
const selectedItems = ref([])
let initbalance = 50
while (selectedItems.length < 3) {
  let randomNum = Math.floor(Math.random() * items.length)
  if (!items[randomNum].includes(items[randomNum])) {
    items[randomNum].push(items[randomNum])
  }
}
</script>
