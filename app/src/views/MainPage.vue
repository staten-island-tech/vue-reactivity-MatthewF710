<template>
  <div class="min-h-screen bg-ALDIgray">
    <NavBar></NavBar>
    <div class="card bg-ALDIblue w-96 shadow-xl">
      <div class="card-body items-center text-center border-2 rounded-3xl">
        <h2 class="text-2xl font-bold text-ALDIyellow">ALDI Bucks: {{ balance }}</h2>
        <div class="flex justify-center py-6">
          <ul class="steps">
            <li data-content="★" class="step step-neutral text-ALDIblack">Shop at ALDI</li>
            <li data-content="?" class="step text-ALDIblack">Beat the ALDI meter</li>
          </ul>
        </div>
        <div class="card-actions">
          <button class="btn bg-ALDIorange text-ALDIblack">Filler Button</button>
        </div>
      </div>
    </div>
    <div class="flex flex-wrap justify-center gap-[10rem] py-6">
      <displaycard v-for="item in selectedItems" :key="item.name" :item="item">
        <button class="btn btn-primary" @click="addToCart(item.name)">Shop</button>
      </displaycard>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import displaycard from '../components/displaycard.vue'
import NavBar from '../components/NavBar.vue'
import { items } from '../array.js'
const selectedItems = ref([])
const addedItems = ref([])
const balance = ref(50)
function addToCart(selectedItem) {
  console.log(selectedItem)
  addedItems.value.push(selectedItem)
}
function increaseBalance() {
  initbalance.value += 5
}
while (selectedItems.value.length < 3) {
  let randomNum = Math.floor(Math.random() * items.length)
  if (!selectedItems.value.includes(items[randomNum])) {
    selectedItems.value.push(items[randomNum])
  }
}
</script>
