import { defineStore } from 'pinia';
import { ref } from 'vue';

export const navbarStore = defineStore('visibility', () => {
  const isOurCoursesVisible = ref(false);

  const setVisibility = (value: boolean) => {
    isOurCoursesVisible.value = value;
  };

  return { isOurCoursesVisible, setVisibility };
});
