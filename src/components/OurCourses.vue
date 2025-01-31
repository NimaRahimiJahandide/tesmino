<script setup lang="ts">
import CourseItem from "./Courses/CourseItem.vue";

import { ref } from "vue";

interface CoursesItem {
  description: string;
}

const courses = ref<CoursesItem[]>([
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
]);
</script>
<template>
  <section class="my-12 md:my-20 bg-[#f0f5f9] py-10">
    <div class="container mx-auto">
      <h2 class="text-xl md:text-2xl mb-6 md:mb-8 text-center md:text-left font-Righteous font-thin">Our Courses</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <CourseItem v-for="(course, index) in courses" :key="index" :description="course.description"/>
      </div>
    </div>
  </section>
</template>