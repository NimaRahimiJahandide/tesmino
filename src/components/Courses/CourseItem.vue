<script setup lang="ts">
defineProps<{
  description: string;
}>();
</script>
<template>
  <div class="bg-[#f8fafc] p-4 rounded-xl shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1">
    <div class="bg-white sm:h-64 h-48 rounded-lg mb-4 flex justify-center items-center">
      <span class="text-[#e6ebf2] text-6xl font-black">IMAGE</span>
    </div>
    <div class="space-y-2">
      <p class="text-[#bed6ed]">{{description}}</p>
    </div>
  </div>
</template>