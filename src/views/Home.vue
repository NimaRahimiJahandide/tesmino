<script setup lang="ts">
import NavbarComponent from '@/components/common/navbarComponent.vue'
import HeroSection from '@/components/HeroSection.vue'
import KnowleducationSection from "@/components/KnowleducationSection.vue"
import OurCourses from "@/components/OurCourses.vue"
import ContactUs from '@/components/ContactUs.vue';
import FooterComponent from '@/components/common/FooterComponent.vue';
</script>

<template>
  <div class="w-full">
    <NavbarComponent/>
    <HeroSection />
    <main>
      <KnowleducationSection/>
      <OurCourses />
      <ContactUs />
    </main>
    <footer>
      <FooterComponent/>
    </footer>
  </div>
</template>