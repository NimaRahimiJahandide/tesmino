<script setup lang="ts">
import CourseItem from "./Courses/CourseItem.vue";
import CourseItemSkeleton from "./Courses/CourseItemSkeleton.vue";

import { ref, onMounted } from "vue";
import { makeServer } from "@/server.js";
interface CoursesItem {
  id: number;
  description: string;
}

const loading = ref(true);


const courses = ref<CoursesItem[]>([]);

onMounted(async () => {
  makeServer();
  try {
    const response = await fetch('/api/courses');
    const data = await response.json();
    courses.value = data.courses;
  } catch (error) {
    console.error('Error fetching courses:', error);
  } finally {
    loading.value = false;
  }
});
</script>
<template>
  <section class="my-12 md:my-20 bg-[#f0f5f9] py-10">
    <div class="max-w-[1248px] mx-auto px-6">
      <h2 class="text-xl md:text-2xl mb-6 md:mb-8 text-center md:text-left font-Righteous font-thin">Our Courses</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4">
        <template v-if="loading">
          <CourseItemSkeleton v-for="item in 6" :key="item"/>
        </template>
        <template v-else>
          <CourseItem v-for="(course, index) in courses" :key="course.id" :description="course.description" />
        </template>
      </div>
    </div>
  </section>
</template>