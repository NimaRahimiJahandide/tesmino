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
    <div class="bg-[#f0f5f9]">
      <NavbarComponent />
      <header>
        <HeroSection />
      </header>
    </div>
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