<script setup lang="ts">
import { ref, watch } from "vue";

const fullName = ref("");
const email = ref("");
const message = ref("");

const emailInput = ref<HTMLElement | null>(null);
const messageInput = ref<HTMLElement | null>(null);
const submitButton = ref<HTMLElement | null>(null);

const errors = ref<{ fullName?: string; email?: string; message?: string }>({});

const validateForm = () => {
  errors.value = {};

  if (!fullName.value.trim()) {
    errors.value.fullName = "Full Name is required.";
  }

  if (!email.value.trim()) {
    errors.value.email = "Email address is required.";
  } else if (!/^\S+@\S+\.\S+$/.test(email.value)) {
    errors.value.email = "Email address is incorrect";
  }

  if (!message.value.trim()) {
    errors.value.message = "Field can not be empty.";
  }

  return Object.keys(errors.value).length === 0;
};

const submitForm = () => {
  if (validateForm()) {
    console.log("Form submitted:", {
      fullName: fullName.value,
      email: email.value,
      message: message.value,
    });
  }
};

const handleKeyDown = (event: KeyboardEvent, nextElement: HTMLElement | null) => {
  if (event.key === "Enter") {
    event.preventDefault();
    if (nextElement) {
      nextElement.focus();
    }
  }
};

watch(fullName, (newVal) => {
  if (newVal.trim()) {
    delete errors.value.fullName;
  }
});

watch(email, (newVal) => {
  if (newVal.trim() && /^\S+@\S+\.\S+$/.test(newVal)) {
    delete errors.value.email;
  }
});

watch(message, (newVal) => {
  if (newVal.trim()) {
    delete errors.value.message;
  }
});
</script>
<template>
  <section class="max-w-[1248px] mx-auto px-6 pb-10">
    <h2 class="text-xl md:text-2xl font-Righteous font-thin mb-6 md:mb-8 text-center md:text-left">Need any help...?
    </h2>
    <div class="flex flex-col md:flex-row gap-8 p-6 md:p-8 shadow-sm rounded-xl">
      <div class="flex-1">
        <form class="space-y-4" @submit.prevent="submitForm">
          <div class="flex flex-col sm:flex-row gap-5">
            <div class="w-full">
              <div class="flex gap-3 items-center">
                <span class="text-light-grey">Full Name</span>
                <p v-if="errors.fullName" class="text-red-400 text-sm">{{ errors.fullName }}</p>
              </div>
              <input v-model="fullName" type="text" aria-label="Full Name"
                class="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-primary"
                @keydown="handleKeyDown($event, emailInput)" :class="errors.fullName ? 'border-red-400 ' : ''" />
            </div>
            <div class="w-full">
              <div class="flex gap-3 items-center">
                <span class="text-light-grey">Email</span>
                <p v-if="errors.email" class="text-red-400 text-sm">{{ errors.email }}</p>
              </div>
              <input ref="emailInput" aria-label="Email" v-model="email" type="email" @keydown="handleKeyDown($event, messageInput)"
                class="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-primary"
                :class="errors.email ? 'border-red-400' : ''" />
            </div>
          </div>
          <div>
            <div class="flex gap-3 items-center">
              <span class="text-light-grey">Message</span>
              <p v-if="errors.message" class="text-red-400 text-sm">{{ errors.message }}</p>
            </div>
            <textarea ref="messageInput" v-model="message" @keydown="handleKeyDown($event, submitButton)" aria-label="Message"
              class="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-primary h-32"
              :class="errors.message ? 'border-red-400' : ''"></textarea>

          </div>
          <button ref="submitButton" :disabled="Object.keys(errors).length > 0"
            class="w-full md:w-auto bg-primary text-white px-8 py-3 rounded-full hover:bg-emerald-600 transition-colors"
            :class="Object.keys(errors).length > 0 ? 'cursor-not-allowed' : ''">Send</button>
        </form>
      </div>
      <div class="md:flex hidden md:w-72 h-48 md:h-auto bg-yellow-50 rounded-xl items-center justify-center">
        <img class="rotate-180 p-14" src="/icons/call-icon.svg" alt="call-icon">
      </div>
    </div>
  </section>
</template>