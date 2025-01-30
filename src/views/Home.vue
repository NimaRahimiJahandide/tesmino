<script setup lang="ts">
import NavbarComponent from '@/components/common/navbarComponent.vue'
import HeroSection from '@/components/HeroSection.vue'
import KnowleducationSection from "@/components/KnowleducationSection.vue"
</script>

<template>
  <div class="w-full">
    <div class="bg-gray-100">
      <NavbarComponent />
      <header>
        <HeroSection />
      </header>
    </div>
    <main>
      <KnowleducationSection/>
    </main>
  </div>
</template>