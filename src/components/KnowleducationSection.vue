
<script setup lang="ts">
import { ref } from "vue";

import HandComponent from "./Knowleducation/HandComponent.vue";

interface HandItem {
  title: string;
  description: string;
  image: string;
  watermark: string;
}

const handItems = ref<HandItem[]>([
  {
    title: "Zeroth Reason",
    description: "Lorem ipsum 1st",
    image: "/images/hand-0.png",
    watermark: '0th',
  },
  {
    title: "Second Reason",
    description: "Lorem ipsum 2nd",
    image: "/images/hand-1.png",
    watermark: '1st',

  },
  {
    title: "Third Reason",
    description: "Lorem ipsum 3rd",
    image: "/images/hand-2.png",
    watermark: '2nd',
  },
]);
</script>

<template>
  <section class="flex flex-col lg:flex-row items-center gap-4 lg:gap-8 rounded-lg max-w-[1248px] mx-auto px-6">
    <div class="flex flex-col gap-5 lg:gap-7 w-full lg:w-auto">
      <HandComponent v-for="(hand, i) in handItems" :key="i" :title="hand.title" :description="hand.description"
        :image="hand.image" :watermark="hand.watermark" />
    </div>
    <div class="flex-1 mt-6 lg:mt-0">
      <div class="relative mb-4">
        <h2 class="text-2xl lg:text-3xl text-gray-800 font-Righteous font-thin hidden sm:flex">Choose Knowleducation over&nbsp;
          <span class="relative">
            <span class="absolute -right-10 -top-9 -rotate-[30deg] text-primary">ALL</span>
            <span class="parentheses"></span>
          </span> 
          others...!
        </h2>
        <h2 class="text-2xl lg:text-3xl text-gray-800 font-Righteous font-thin sm:hidden">Choose Knowleducation over
            <span class="text-primary">ALL</span>
          others...!
        </h2>
      </div>
      <p class="text-gray-400 text-sm lg:text-base leading-relaxed"> Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Adipisci minus dolores architecto animi maiores voluptatibus quo culpa commodi sunt beatae
        dicta veniam, vel fuga odio, quaerat, inventore amet ab sit. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Adipisci minus dolores architecto animi maiores voluptatibus quo culpa commodi sunt beatae
        dicta veniam, vel fuga odio, quaerat, inventore amet ab sit. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Adipisci minus dolores architecto animi maiores voluptatibus quo culpa commodi sunt beatae
        dicta veniam, vel fuga odio, quaerat, inventore amet ab sit. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Adipisci minus dolores architecto animi maiores voluptatibus quo culpa commodi sunt beatae
        dicta veniam, vel fuga odio, quaerat, inventore amet ab sit. </p>
    </div>
  </section>
</template>
<style scoped>
.parentheses {
  position: absolute;
  bottom: -5px;
  left: -18px;
  width: 25px;
  height: 20px;
}

.parentheses::before,
.parentheses::after {
  content: "";
  position: absolute;
  width: 10px;
  height: 25px;
  border: 2px solid #00BC7D;
  border-radius: 50%;
}

.parentheses::before {
  right: 0;  
  border-left: none; 
  border-bottom: none;
  border-top: none;
  rotate: 160deg; 
}

.parentheses::after {
  left: 0;  
  border-right: none;
  border-bottom: none;
  border-top: none;
  rotate: 200deg; 
}

</style>
