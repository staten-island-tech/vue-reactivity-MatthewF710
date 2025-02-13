<template>
  <div class="navbar bg-ALDIdarkblue w-full px-6 py-3 flex justify-between items-center shadow-lg">
    <figure>
      <img
        class="h-[5rem]"
        src="https://corporate.aldi.us/fileadmin/fm-dam/logos/ALDI_2017.png"
        alt="ALDI Logo"
      />
    </figure>
    <h1 class="text-ALDIyellow text-6xl font-bold font-ALDIFont">Shop at ALDI!</h1>
    <div class="dropdown dropdown-end">
      <button tabindex="0" class="btn btn-primary">Instructions</button>
      <ul
        tabindex="0"
        class="dropdown-content menu bg-ALDIwhite shadow-md rounded-box w-40 mt-2 border-2 border-ALDIblack"
      >
        <li class="bg-ALDIblue rounded"><a>Click to farm ALDI bucks!</a></li>
        <li class="bg-ALDIblue rounded"><a>Item 2</a></li>
      </ul>
    </div>
  </div>
</template>
<script setup>
import { ref, toRef } from 'vue'
</script>
