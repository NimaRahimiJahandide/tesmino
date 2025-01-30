<template>
  <div class="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0 mb-12 md:mb-20 container mx-auto pb-10">
    <div class="max-w-xl text-center md:text-left">
      <h1 class="text-3xl md:text-4xl font-Righteous relative font-medium mb-4">
        Learn EDGE Cases
        <div
          className="h-3 w-28 mt-1 -bottom-2 left-24 bg-gradient-to-r from-red-400 via-yellow-400 to-green-400 rounded-full absolute"
          style="clip-path: polygon(0% 100%, 100% 0%, 100% 100%, 0% 100%);"></div>
      </h1>
      <p class="text-gray-400 mb-6 text-justify leading-7">Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Maxime mollitia
        molestiae quas vel sint commodi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia
        molestiae quas vel sint commodi.</p>
      <div class="relative flex items-center w-full max-w-2xl mx-auto">
        <input type="text" placeholder="What do you want to learn?"
          class="w-full px-6 py-3 text-base bg-white rounded-full shadow-sm border border-neutral-100 placeholder-neutral-400 outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200" />
        <button
          class="absolute cursor-pointer right-2 bg-emerald-500 text-white px-6 py-2 rounded-full hover:bg-emerald-600 transform hover:scale-105 transition-all duration-200">
          search </button>
      </div>
    </div>
    <div class="relative w-64 h-64 md:w-72 md:h-72">
      <div class="absolute inset-0 bg-emerald-500 rounded-full"></div>
      <div class="absolute inset-8 bg-emerald-500 rounded-full"></div>
      <div class="absolute inset-16 bg-white rounded-full flex items-center justify-center">
        <div class="w-12 h-12 bg-gray-800 relative rounded-full flex justify-center items-center">
          <div class="w-3 h-3 bg-gray-500 rounded-full absolute inset-0 mx-auto my-auto"></div>
        </div>
      </div>
    </div>

  </div>
</template>

<style></style>