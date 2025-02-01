<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';

const eyeContainer = ref<HTMLElement | null>(null);
const pupilPosition = ref({ x: 0, y: 0 });
const handleMouseMove = (event: MouseEvent) => {
  if (eyeContainer.value) {
    const rect = eyeContainer.value.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const mouseX = event.clientX - centerX;
    const mouseY = event.clientY - centerY;

    const distance = Math.sqrt(mouseX * mouseX + mouseY * mouseY);

    const maxDistance = rect.width / 2 - 5; 

    if (distance > maxDistance) {
      const angle = Math.atan2(mouseY, mouseX);
      pupilPosition.value.x = Math.cos(angle) * maxDistance;
      pupilPosition.value.y = Math.sin(angle) * maxDistance;
    } else {
      pupilPosition.value.x = mouseX;
      pupilPosition.value.y = mouseY;
    }
  }
};

const pupilStyle = computed(() => ({
  transform: `translate(${pupilPosition.value.x}px, ${pupilPosition.value.y}px)`,
}));

onMounted(() => {
  window.addEventListener('mousemove', handleMouseMove);
});

onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove);
});
</script>

<template>
  <div class="bg-[#f0f5f9]">
    <div class="w-full h-2 bg-[#34d399]"></div>
    <nav class="flex flex-col md:flex-row justify-between items-center py-4 container mx-auto">
      <div class="flex flex-col md:flex-row items-center px-4 rounded-full py-2 gap-4 md:gap-8 w-full md:w-auto shadow-md bg-white fixed top-5 z-50">
        <div class="flex gap-2 items-center">
          <div class="relative w-6 h-6">
            <div class="absolute inset-1 bg-[#34d399] rounded-full"></div>
            <div class="absolute inset-0 bg-[#34d399] rounded-full"></div>
            <div class="absolute inset-1 bg-white rounded-full flex items-center justify-center"  ref="eyeContainer">
              <div class="w-2 h-2 bg-[#475569] relative rounded-full flex justify-center items-center" :style="pupilStyle"></div>
            </div>
          </div>      
          <b class="font-Righteous font-thin text-lg text-[#475569]">Knowleducation</b>
        </div>
        <div class="flex gap-6 items-center text-sm font-sans text-gray-400">
          <a href="#" class="hover:text-[#34d399] transition-colors">Course</a>
          <a href="#" class="hover:text-[#34d399] transition-colors">Contact Us</a>
          <a href="#" class="hover:text-[#34d399] transition-colors">Lorem</a> 
          <button class="w-full md:w-auto bg-[#34d399] text-white px-6 py-1 cursor-pointer rounded-full hover:bg-emerald-600 transition-colors">Contact Us</button>
        </div>
      </div>
    </nav>
  </div>
</template>

<style scoped>
</style>