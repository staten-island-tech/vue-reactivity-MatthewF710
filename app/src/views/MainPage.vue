<template>
  <div class="min-h-screen bg-ALDIgray">
    <NavBar></NavBar>
    <div class="flex justify-center pt-[3rem] pb-[3rem]">
      <div class="card bg-ALDIblue w-96 shadow-xl">
        <div class="card-body items-center text-center border-2 rounded-3xl">
          <h2 class="text-2xl font-bold text-ALDIyellow">ALDI Bucks: {{ balance }}</h2>
          <div class="flex justify-center py-6">
            <ul class="steps">
              <li data-content="★" class="step step-neutral text-ALDIblack">Shop at ALDI</li>
              <li data-content="?" class="step text-ALDIblack">Collect all the ALDIs!</li>
            </ul>
          </div>
          <div class="card-actions">
            <button class="btn bg-ALDIorange text-ALDIblack" @click="increaseBalance()">
              Click Here!
            </button>
          </div>
        </div>
      </div>
    </div>
    <h1>add refresh items btn somewhere lol</h1>
    <div class="flex justify-center pt-[1rem] pb-[1rem]">
      <h1 class="text-ALDIyellow text-3xl font-ALDIFont">Shop Items:</h1>
    </div>
    <div class="flex flex-wrap justify-center gap-[10rem] py-6">
      <displaycard v-for="item in selectedItems" :key="item.name" :item="item">
        <button class="btn btn-primary" @click="addToCart(item)">Shop</button>
      </displaycard>
    </div>
    <div class="flex justify-center pt-[1rem] pb-[1rem]">
      <h1 class="text-ALDIyellow text-3xl font-ALDIFont">Collected Items:</h1>
    </div>
    <div class="flex flex-wrap justify-center gap-[10rem] py-6">
      <displaycard v-for="item in addedItems" :key="item.name" :item="item">
        <h1>Shopped</h1>
      </displaycard>
    </div>
  </div>
</template>
<script setup>
import { ref, reactive } from 'vue'
import displaycard from '../components/displaycard.vue'
import NavBar from '../components/NavBar.vue'
import { items } from '../array.js'
const selectedItems = reactive([])
const addedItems = reactive([])
const balance = ref(0)
function addToCart(selectedItem) {
  if (balance.value > selectedItem.price && !addedItems.includes(selectedItem)) {
    balance.value -= selectedItem.price
    //balance.value = Math.round()
    addedItems.push(selectedItem)
  }
}
function increaseBalance() {
  balance.value += 1
}
while (selectedItems.length < 3) {
  let randomNum = Math.floor(Math.random() * items.length)
  if (!selectedItems.includes(items[randomNum]) && !addedItems.includes(items[randomNum])) {
    selectedItems.push(items[randomNum])
  }
}
</script>
