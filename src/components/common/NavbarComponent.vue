<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { navbarStore } from '@/stores/navbarStore';

const store = navbarStore();
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
  <div class="bg-[#f0f5f9] relative">
    <div class="w-full h-2 bg-[#34d399]"></div>
    <nav class="justify-between items-center  container mx-auto px-4 sm:px-0 overflow-visible">
      <div
        class="sm:flex hidden items-center justify-between px-4 rounded-full py-4 gap-4 lg:gap-8 shadow-lg bg-white sticky top-5 z-50 transition-all duration-300" :class="store.isOurCoursesVisible ? ' w-[90%]' : ' w-[90%] lg:w-auto'">
        <div class="flex gap-2 items-center">
          <div class="relative w-6 h-6">
            <div class="absolute inset-1 bg-[#34d399] rounded-full"></div>
            <div class="absolute inset-0 bg-[#34d399] rounded-full"></div>
            <div class="absolute inset-1 bg-white rounded-full flex items-center justify-center" ref="eyeContainer">
              <div class="w-2 h-2 bg-[#475569] relative rounded-full flex justify-center items-center"
                :style="pupilStyle"></div>
            </div>
          </div>
          <b class="font-Righteous font-thin text-lg text-[#475569]">Knowleducation</b>
        </div>
        <div class="flex gap-6 items-center text-sm font-sans text-gray-400">
          <a href="#" class="hover:text-[#34d399] transition-colors">Course</a>
          <a href="#" class="hover:text-[#34d399] transition-colors">Contact Us</a>
          <a href="#" class="hover:text-[#34d399] transition-colors">Lorem</a>
          <button
            class="w-full lg:w-auto bg-[#34d399] text-white px-6 py-1 cursor-pointer rounded-full hover:bg-emerald-600 transition-colors">Contact
            Us</button>
        </div>
      </div>
      <!-- start hamburger menu -->
      <div
        class="sm:hidden flex items-center justify-between  rounded-full p-4 gap-4 lg:gap-8 w-[90%] mx-auto shadow-lg bg-white sticky top-5 z-50">
        <div class="flex gap-2 items-center">
          <div class="relative w-6 h-6">
            <div class="absolute inset-1 bg-[#34d399] rounded-full"></div>
            <div class="absolute inset-0 bg-[#34d399] rounded-full"></div>
            <div class="absolute inset-1 bg-white rounded-full flex items-center justify-center" ref="eyeContainer">
              <div class="w-2 h-2 bg-[#475569] relative rounded-full flex justify-center items-center"
                :style="pupilStyle"></div>
            </div>
          </div>
          <b class="font-Righteous font-thin text-lg text-[#475569]">Knowleducation</b>
        </div>
        <div class="flex gap-6 items-center text-sm font-sans text-gray-400">
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path fill="#34d399"
                d="M4 18q-.425 0-.712-.288T3 17t.288-.712T4 16h16q.425 0 .713.288T21 17t-.288.713T20 18zm0-5q-.425 0-.712-.288T3 12t.288-.712T4 11h16q.425 0 .713.288T21 12t-.288.713T20 13zm0-5q-.425 0-.712-.288T3 7t.288-.712T4 6h16q.425 0 .713.288T21 7t-.288.713T20 8z" />
            </svg>
          </button>
        </div>
      </div>
      <!-- end hamburger menu -->
    </nav>
  </div>
</template>

<style scoped></style>