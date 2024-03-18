import { RouterLink ,RouterLink } from 'vue-router';

<template>
   
    <div class="bg-gray-400 bg-cover h-screen">
    <nav class="p-4 w-full z-50 flex items-center justify-between bg-white text-black list-none
     ">
        <li class="text-4xl font-semibold">Home</li>
        <li class="bg-blue-500 p-3 px-4 text-white rounded-md hover:bg-transparent hover:text-black hover:border border-black transition-all">
            <RouterLink to="/signup">Signup</RouterLink>
        </li>
    </nav>
  </div>
  </template>