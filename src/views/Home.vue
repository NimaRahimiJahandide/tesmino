<script setup lang="ts">
import { ref, onMounted } from 'vue';

import NavbarComponent from '@/components/common/navbarComponent.vue'
import HeroSection from '@/components/HeroSection.vue'
import KnowleducationSection from "@/components/KnowleducationSection.vue"
import OurCourses from "@/components/OurCourses.vue"
import ContactUs from '@/components/ContactUs.vue';
import FooterComponent from '@/components/common/FooterComponent.vue';
import { navbarStore } from '@/stores/navbarStore';

const store = navbarStore();
const navbarFullPage = ref<HTMLElement | null>(null);

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      store.setVisibility(entry.isIntersecting);
    },
    { threshold: 0.3 } 
  );

  if (navbarFullPage.value) {
    observer.observe(navbarFullPage.value);
  }
});
</script>

<template>
  <div class="w-full">
    <NavbarComponent/>
    <HeroSection />
    <main>
      <KnowleducationSection/>
      <section ref="navbarFullPage">
        <OurCourses/>
        <ContactUs />
      </section>
    </main>
    <footer>
      <FooterComponent/>
    </footer>
  </div>
</template>