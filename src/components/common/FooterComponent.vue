<script setup lang="ts">
import { ref } from 'vue';

const imgScale = ref(1);
let timeoutId: number;

const enlargeImage = () => {
  imgScale.value = 1.3;
  clearTimeout(timeoutId);
  timeoutId = setTimeout(() => {
    imgScale.value = 1;
  }, 300);
};

const resetImageScale = () => {
  imgScale.value = 1;
};
</script>

<template>
  <div class="bg-footer-border rounded-t-[60px] relative overflow-hidden" @mouseenter="enlargeImage"
    @mouseleave="resetImageScale">
    <div class="h-[95px] flex items-end">
      <div
        class="bg-footer-bg font-Righteous text-[#768194] rounded-t-[60px] h-[90px] w-full flex gap-2 justify-center items-center">
        Give me FIVE
        <img @click="enlargeImage" :style="{ scale: imgScale }" src="/icons/give-hand.svg" alt="give-hand" aria-label="Give hand icon"
          class="cursor-pointer transition-all duration-300">
      </div>
    </div>
  </div>
</template>