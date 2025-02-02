<script setup lang="ts">
import { ref } from 'vue';

const imgScale = ref(1);

const enlargeImage = () => {
  imgScale.value = 1.3;
  setTimeout(() => {
    imgScale.value = 1;
  }, 300);
};
</script>

<template>
  <div class="bg-[#32cd95] rounded-t-[60px] relative overflow-hidden">
    <div class="h-[95px] flex items-end">
      <div
        class="bg-[#0f172a] font-Righteous text-[#768194] rounded-t-[60px] h-[90px] w-full flex gap-2 justify-center items-center">
        Give me FIVE
        <img @click="enlargeImage"  :style="{ scale: imgScale }" src="/icons/give-hand.svg" alt="give-hand"
          class="cursor-pointer transition-all duration-300">
      </div>
    </div>
  </div>
</template>