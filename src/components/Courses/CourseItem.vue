<script setup lang="ts">
defineProps<{
  description: string;
}>();
</script>
<template>
  <div class="bg-[#f8fafc] p-4 rounded-xl shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1">
    <!-- start skelton -->
    <div class="bg-[#f8fafc] p-4 rounded-xl shadow-sm" v-if="false">
      <div class="bg-white sm:h-64 h-48 rounded-lg mb-4 animate-pulse">
        <div class="bg-gray-200 h-full w-full rounded-lg"></div>
      </div>
      <div class="space-y-2">
        <div class="bg-gray-200 h-4 w-full rounded animate-pulse"></div>
        <div class="bg-gray-200 h-4 w-3/4 rounded animate-pulse"></div>
        <div class="bg-gray-200 h-4 w-1/2 rounded animate-pulse"></div>
      </div>
    </div>
    <!-- end skelton -->
    <div>
      <div class="bg-white sm:h-64 h-48 rounded-lg mb-4 flex justify-center items-center">
        <span class="text-[#e6ebf2] text-6xl font-black">IMAGE</span>
      </div>
      <div class="space-y-2">
        <p class="text-[#bed6ed]">{{ description }}</p>
      </div>
    </div>
  </div>
</template>