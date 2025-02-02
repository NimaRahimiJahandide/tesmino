
<script setup lang="ts">
defineProps<{
  title: string;
  description: string;
  image: string;
  watermark: String;
}>();
</script>

<template>
  <div class="bg-white relative rounded-xl shadow-lg p-4 hover:shadow-xl transition-shadow duration-300 w-full lg:w-[280px] group">
    <div class="absolute top-2 right-10 text-gray-200 text-4xl font-bold opacity-50 pointer-events-none rotate-45 z-[1]">
      {{ watermark }}
    </div>
    <div class="flex gap-4 items-center">
      <div class="flex justify-center items-center relative">
        <div class="bg-yellow-50 rounded-full p-3 w-16 h-16 flex justify-center items-center"></div>
        <img :src="image" :alt="title" 
             class="w-10 md:w-12 h-10 md:h-12 object-contain scale-200 absolute bottom-6 transition-transform duration-300 group-hover:-rotate-12" />
      </div>
      <div class="z-[1]">
        <h3 class="text-gray-800 text-base md:text-lg font-Righteous font-thin z-10">{{title}}</h3>
        <p class="text-gray-500 text-xs md:text-sm">{{description}}</p>
      </div>
    </div>
  </div>
</template>