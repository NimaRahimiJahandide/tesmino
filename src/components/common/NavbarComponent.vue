<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { navbarStore } from '@/stores/navbarStore';

const store = navbarStore();
const eyeContainer = ref<HTMLElement | null>(null);
const pupilPosition = ref({ x: 0, y: 0 });

const handleMouseMove = (event: MouseEvent) => {
  if (eyeContainer.value) {
    const rect = eyeContainer.value.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2
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
    <div class="w-full h-2 bg-primary"></div>
    <div class="fixed top-0 left-0 right-0 z-50 px-6">
      <nav class="max-w-[1248px] mx-auto pt-6">
        <div
          class="items-center flex justify-between px-4 rounded-full py-4 gap-4 lg:gap-8 shadow-lg bg-white transition-all duration-300"
          :class="store.isOurCoursesVisible ? 'max-w-[1248px] mx-auto' : 'w-full lg:w-fit'"
        >
          <div class="flex gap-2 items-center">
            <div class="relative w-6 h-6">
              <div class="absolute inset-1 bg-primary rounded-full"></div>
              <div class="absolute inset-0 bg-primary rounded-full"></div>
              <div class="absolute inset-1 bg-white rounded-full flex items-center justify-center" ref="eyeContainer">
                <div class="w-2 h-2 bg-secondary relative rounded-full flex justify-center items-center"
                  :style="pupilStyle"></div>
              </div>
            </div>
            <b class="font-Righteous font-thin sm:text-lg text-base text-secondary">Knowleducation</b>
          </div>
          <div class="flex gap-6 items-center justify-end text-sm font-sans text-gray-400 w-full">
            <a href="#" aria-label="Course" class="hover:text-primary transition-colors sm:flex hidden">Course</a>
            <a href="#" aria-label="Contact Us" class="hover:text-primary transition-colors sm:flex hidden">Contact Us</a>
            <a href="#" aria-label="Lorem" class="hover:text-primary transition-colors sm:flex hidden">Lorem</a>
            <button aria-label="Contact Us"
              class="bg-primary text-white sm:px-6 px-3 py-1 cursor-pointer rounded-full hover:bg-emerald-600 transition-colors w-auto">Contact
              Us</button>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<style scoped></style>