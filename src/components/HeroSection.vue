<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';

// Ref برای ذخیره موقعیت موس
const eyeContainerHero = ref<HTMLElement | null>(null);
const pupilPosition = ref({ x: 0, y: 0 });
// تابع برای محاسبه موقعیت موس
const handleMouseMove = (event: MouseEvent) => {
  if (eyeContainerHero.value) {
    // مختصات مرکز div والد
    const rect = eyeContainerHero.value.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // مختصات موس نسبت به مرکز div والد
    const mouseX = event.clientX - centerX;
    const mouseY = event.clientY - centerY;

    // فاصله موس از مرکز
    const distance = Math.sqrt(mouseX * mouseX + mouseY * mouseY);

    // حداکثر فاصله مجاز (نصف عرض دایره منهای نصف عرض pupil)
    const maxDistance = (rect.width / 2) * 0.5 ; // 1 نصف عرض div کوچک است
    
    // اگر موس خارج از محدوده باشد، موقعیت را محدود می‌کنیم
    if (distance > maxDistance) {
      const angle = Math.atan2(mouseY, mouseX);
      pupilPosition.value.x = Math.cos(angle) * maxDistance;
      pupilPosition.value.y = Math.sin(angle) * maxDistance;
    } else {
      // در غیر این صورت، موقعیت موس را دنبال می‌کند
      pupilPosition.value.x = mouseX;
      pupilPosition.value.y = mouseY;
    }
  }
};

// computed برای محاسبه استایل pupil
const pupilStyle = computed(() => ({
  transform: `translate(${pupilPosition.value.x}px, ${pupilPosition.value.y}px)`,
}));

// اضافه کردن رویداد mousemove به window هنگام mount
onMounted(() => {
  window.addEventListener('mousemove', handleMouseMove);
});

// حذف رویداد mousemove هنگام unmount
onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove);
});
</script>

<template>
  <header class="bg-[#f0f5f9] pt-24">
    <div class="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lggap-0 mb-12 lg:mb-20 max-w-[1248px] mx-auto px-6 pb-10">
      <div class="lg:max-w-xl text-center lg:text-left">
        <h1 class="text-3xl lg:text-4xl font-Righteous relative font-medium mb-4 text-[#475569]">
          Learn EDGE Cases
          <div
            className="h-3 w-28 mt-1 -bottom-2 lg:left-24 left-[42%] bg-gradient-to-r from-red-400 via-yellow-400 to-green-400 rounded-full absolute"
            style="clip-path: polygon(0% 100%, 100% 0%, 100% 100%, 0% 100%);"></div>
        </h1>
        <p class="text-gray-400 mb-6 text-justify leading-7">Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Maxime mollitia
          molestiae quas vel sint commodi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia
          molestiae quas vel sint commodi.</p>
        <div class="relative flex items-center w-full max-w-2xl mx-auto">
          <input type="text" placeholder="What do you want to learn?"
            class="w-full px-6 py-3 text-base bg-white rounded-full  whitespace-nowrap pr-28 shadow-sm border border-neutral-100 placeholder-neutral-400 outline-none focus:ring-2 focus:ring-[#34d399] focus:border-transparent transition-all duration-200" />
          <button
            class="absolute cursor-pointer right-2 bg-[#34d399] text-white px-6 py-2 rounded-full hover:bg-emerald-600 transform hover:scale-105 transition-all duration-200">
            search </button>
        </div>
      </div>
      <div class="relative w-64 h-64 lg:w-72 lg:h-72" >
        <div class="absolute inset-0 bg-[#34d399] rounded-full"></div>
        <div class="absolute inset-0 bg-[#34d399] rounded-full"></div>
        <div class="absolute inset-16 bg-white rounded-full flex items-center justify-center" ref="eyeContainerHero">
          <div class="w-12 h-12 bg-[#475569] relative rounded-full flex justify-center items-center" :style="pupilStyle">
            <div class="w-3 h-3 bg-[#64748b] rounded-full absolute inset-0 mx-auto my-auto"></div>
          </div>
        </div>
      </div>
  
    </div>
  </header>
</template>

<style></style>