<template>
  <section class="container mx-auto pb-10">
    <h2 class="text-xl md:text-2xl font-Righteous font-thin mb-6 md:mb-8 text-center md:text-left">Need any help...?
    </h2>
    <div class="flex flex-col md:flex-row gap-8 p-6 md:p-8 shadow-sm rounded-xl">
      <div class="flex-1">
        <form class="space-y-4">
          <div class="flex gap-5">
            <div class="w-full">
              <span class="text-[#d6d3dc]">Full Name</span>
              <input type="text" class="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#34d399]" />
            </div>
            <div class="w-full">
              <span class="text-[#d6d3dc]">Email</span>
              <input type="email" class="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#34d399]" />
            </div>
          </div>
          <div>
            <span class="text-[#d6d3dc]">Message</span>
            <textarea class="w-full px-4 py-2 border resize-none border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#34d399] h-32"></textarea>
          </div>
          <button
            class="w-full md:w-auto bg-[#34d399] text-white px-8 py-3 rounded-full hover:bg-emerald-600 transition-colors">Send</button>
        </form>
      </div>
      <div class="w-full md:w-72 h-48 md:h-auto bg-yellow-50 rounded-xl flex items-center justify-center">
        <img class="rotate-180 p-14" src="/icons/call-icon.svg" alt="call-icon">
      </div>
    </div>
  </section>
</template>