<template>
  <div class="navbar bg-ALDIdarkblue w-full px-6 py-3 flex justify-between items-center shadow-lg">
    <figure>
      <img
        class="h-[5rem]"
        src="https://corporate.aldi.us/fileadmin/fm-dam/logos/ALDI_2017.png"
        alt="ALDI Logo"
      />
    </figure>
    <h1 class="text-ALDIyellow text-6xl font-ALDIFont">ALDI Clicker</h1>
    <div class="dropdown dropdown-end">
      <button tabindex="0" class="btn btn-primary">Instructions</button>
      <ul
        tabindex="0"
        class="dropdown-content menu bg-ALDIgray shadow-md rounded-box w-[30rem] mt-2 border-2 border-ALDIblack space-y-[.5rem]"
      >
        <li class="bg-ALDIblue rounded border-1 border-ALDIblack">
          <a>Click to farm ALDI bucks!</a>
        </li>
        <li class="bg-ALDIblue rounded border-1 border-ALDIblack">
          <a
            >The "ALDI meter" indicates how much of a multiplier each item will add to your
            clicks!</a
          >
        </li>
        <li class="bg-ALDIblue rounded">
          <a
            >Buy all the items to have officially shopped at ALDIs! (once nothing appears after
            refresh, everything has been bought)</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>
