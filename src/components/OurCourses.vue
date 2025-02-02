<script setup lang="ts">
import CourseItem from "./Courses/CourseItem.vue";
import CourseItemSkeleton from "./Courses/CourseItemSkeleton.vue";

import { ref, onMounted } from "vue";

interface CoursesItem {
  description: string;
}

const loading = ref(true); // Add loading state


const courses = ref<CoursesItem[]>([]);

onMounted(() => {
  setTimeout(() => {
    courses.value = [
      {
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab culpa veniam cumque temporibus quia? Harum iure facilis quaerat expedita. Nulla nesciunt obcaecati explicabo consequatur in et natus eum reprehenderit tempora.",
      },
      {
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab culpa veniam cumque temporibus quia? Harum iure facilis quaerat expedita. Nulla nesciunt obcaecati explicabo consequatur in et natus eum reprehenderit tempora.",
      },
      {
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab culpa veniam cumque temporibus quia? Harum iure facilis quaerat expedita. Nulla nesciunt obcaecati explicabo consequatur in et natus eum reprehenderit tempora.",
      },
      {
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab culpa veniam cumque temporibus quia? Harum iure facilis quaerat expedita. Nulla nesciunt obcaecati explicabo consequatur in et natus eum reprehenderit tempora.",
      },
      {
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab culpa veniam cumque temporibus quia? Harum iure facilis quaerat expedita. Nulla nesciunt obcaecati explicabo consequatur in et natus eum reprehenderit tempora.",
      },
      {
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab culpa veniam cumque temporibus quia? Harum iure facilis quaerat expedita. Nulla nesciunt obcaecati explicabo consequatur in et natus eum reprehenderit tempora.",
      },
    ];
    loading.value = false; 
  }, 2000);
});
</script>
<template>
  <section class="my-12 md:my-20 bg-[#f0f5f9] py-10">
    <div class="container mx-auto">
      <h2 class="text-xl md:text-2xl mb-6 md:mb-8 text-center md:text-left font-Righteous font-thin">Our Courses</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <template v-if="loading">
          <CourseItemSkeleton v-for="item in 6" :key="item"/>
        </template>
        <template v-else>
          <CourseItem v-for="(course, index) in courses" :key="index" :description="course.description" />
        </template>
      </div>
    </div>
  </section>
</template>