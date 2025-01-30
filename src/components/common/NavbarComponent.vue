<template>
  <nav class="flex flex-col md:flex-row justify-between items-center px-4 md:px-6 py-4">
    <div class="flex flex-col md:flex-row items-center px-4 rounded-full py-2 gap-4 md:gap-8 w-full md:w-auto shadow-md">
      <div class="flex">
        <div class="relative w-6 h-6">
          <div class="absolute inset-1 bg-emerald-500 rounded-full"></div>
          <div class="absolute inset-0 bg-emerald-500 rounded-full"></div>
          <div class="absolute inset-1 bg-white rounded-full flex items-center justify-center">
            <div class="w-2 h-2 bg-gray-800 relative rounded-full flex justify-center items-center">
            </div>
          </div>
        </div>      
        <b class="font-Righteous font-thin text-lg">Knowleducation</b>
      </div>
      <div class="flex gap-6 items-center text-sm font-sans text-gray-400">
        <a href="#" class="hover:text-emerald-500 transition-colors">Course</a>
        <a href="#" class="hover:text-emerald-500 transition-colors">Contact Us</a>
        <a href="#" class="hover:text-emerald-500 transition-colors">Lorem</a> 
        <button class="w-full md:w-auto bg-emerald-500 text-white px-6 py-1 rounded-full hover:bg-emerald-600 transition-colors">Contact Us</button>
      </div>
    </div>
    
  </nav>
</template>

<style scoped>
</style>