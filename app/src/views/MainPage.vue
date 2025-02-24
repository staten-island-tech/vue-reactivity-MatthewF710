<template>
  <div class="min-h-screen bg-ALDIgray">
    <NavBar></NavBar>
    <div class="flex justify-center pt-[3rem] pb-[3rem]">
      <div class="card bg-ALDIblue w-96 shadow-xl border-2 border-ALDIblack">
        <div class="card-body items-center text-center">
          <h2 class="text-2xl font-bold text-ALDIyellow">ALDI Bucks: {{ balance }}</h2>
          <div class="flex justify-center py-6">
            <ul class="steps">
              <li data-content="★" class="step step-neutral text-ALDIblack">Shop at ALDI</li>
              <li data-content="?" class="step text-ALDIblack">Collect all the ALDIs!</li>
            </ul>
          </div>
          <div class="card-actions">
            <button
              class="btn bg-ALDIorange text-ALDIblack border-[.1rem] border-ALDIblack hover:bg-ALDIorange hover:border-ALDIblack"
              @click="increaseBalance()"
            >
              Click Here!
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-center pt-[2rem] pb-[1rem]" v-if="allItems.length != 0">
      <button
        class="btn bg-ALDIorange text-ALDIblack border-[.1rem] border-ALDIblack hover:bg-ALDIorange hover:border-ALDIblack"
        @click="shopRefresh(allItems.length)"
      >
        Refresh
      </button>
    </div>
    <div class="flex justify-center" v-if="allItems.length != 0">
      <h1 class="text-ALDIyellow text-3xl font-ALDIFont">Shop Items:</h1>
    </div>
    <div class="flex flex-wrap justify-center gap-[10rem] py-[3rem]">
      <displaycard v-for="item in selectedItems" :key="item.name" :item="item">
        <button
          class="btn btn-primary border-[.1rem] border-ALDIblack hover:border-ALDIblack"
          @click="addToCollection(item)"
        >
          Shop
        </button>
      </displaycard>
    </div>
    <div class="flex justify-center pt-[1rem] pb-[1rem]">
      <h1 class="text-ALDIyellow text-3xl font-ALDIFont">Collected Items:</h1>
    </div>
    <div class="flex flex-wrap justify-center gap-[10rem] py-6">
      <displaycard v-for="item in collectedItems" :key="item.name" :item="item">
        <button
          class="btn bg-ALDIred border-[.1rem] border-ALDIblack hover:bg-ALDIred hover:border-ALDIblack"
          @click="removeFromCollection(item)"
        >
          (Un)Shop
        </button>
      </displaycard>
    </div>
  </div>
</template>
<script setup>
import { ref, reactive } from 'vue'
import displaycard from '../components/displaycard.vue'
import NavBar from '../components/NavBar.vue'
import { items } from '../components/array.js'
const allItems = reactive(items)
const selectedItems = reactive([])
const collectedItems = reactive([])
const balance = ref(0)
const clickMultiplier = ref(1)
function shopRefresh(itemsLeft) {
  selectedItems.splice(0, selectedItems.length)
  const itemsdisplayed = 3
  if (itemsLeft > itemsdisplayed) {
    while (selectedItems.length < itemsdisplayed) {
      let randomNum = Math.floor(Math.random() * allItems.length)
      let shopItem = allItems[randomNum]
      if (!selectedItems.includes(shopItem) && !collectedItems.includes(shopItem)) {
        selectedItems.push(shopItem)
      }
    }
  } else {
    for (let i = 0; i < allItems.length; i++) {
      selectedItems.push(allItems[i])
    }
  }
}
function addToCollection(selectedItem) {
  if (balance.value > selectedItem.price && !collectedItems.includes(selectedItem)) {
    balance.value = Math.round(balance.value - selectedItem.price)
    clickMultiplier.value += selectedItem.ALDI_meter / 10
    collectedItems.push(selectedItem)
    selectedItems.splice(
      0,
      selectedItems.length,
      ...selectedItems.filter((item) => item !== selectedItem),
    ) //updating array with splice to not break reactivity
    allItems.splice(0, allItems.length, ...allItems.filter((item) => item !== selectedItem)) //updating array with splice to not break reactivity
  }
}
function removeFromCollection(selectedItem) {
  balance.value = Math.round(balance.value + selectedItem.price)
  allItems.push(selectedItem)
  clickMultiplier.value -= selectedItem.ALDI_meter / 10
  collectedItems.splice(
    0,
    collectedItems.length,
    ...collectedItems.filter((item) => item !== selectedItem),
  ) //updating array with splice to not break reactivity
}
function increaseBalance() {
  balance.value += 1 * clickMultiplier.value
  balance.value = Math.round(balance.value * 100) / 100
}
shopRefresh(allItems.length)
</script>
