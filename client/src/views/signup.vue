<script setup>
import { reactive } from "vue"
import axios from 'axios'
import { useRouter } from 'vue-router';

const router = useRouter();

const formdata = reactive({
  name: '',
  email:'',
  password: '',
})
console.log(formdata);

const handleSubmit = async () =>{
  try {
        console.log(formdata)
        const res = await axios.post("/api/register", formdata)
        if (res) {
            router.push('/')
            console.log(res.data)
            console.log("User Create Successfully")
        }
    } catch (error) {
        console.log(error)
    }
}

</script>
<template>
  <!-- <div class="bg-cover h-screen" style="background-image: url('path/to/your/image.jpg');"></div> -->
 
  <div class="bg-gray-400 bg-cover h-screen">
  <form @submit.prevent="handleSubmit"
     class="flex flex-col justify-center items-center space-y-10 h-screen">
    <h1 class="text-2xl "> Registration Form </h1>

    <input v-model="formdata.name" type="text" class="w-[400px] p-7 text-black  bg-slate-300 border-black border-2 rounded-lg  h-10 bg-zinc-300 placeholder-gray-900" placeholder="Enter name">

    <input v-model="formdata.email" type="email" class="w-[400px] p-7 bg-slate-300 border-black border-2 rounded-lg h-10 bg-zinc-300 placeholder-gray-900" placeholder="Enter email">

    <input v-model="formdata.password" type="password" class="w-[400px] p-7 bg-slate-300 border-black border-2 rounded-lg h-10 bg-zinc-300 placeholder-gray-900" placeholder="Enter password">

    <button class="border-2 border-black bg-blue-400 py-2 px-6 rounded-md">Submit</button>
  </form>
</div>
</template>
