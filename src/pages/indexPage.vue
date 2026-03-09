<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
<template>
  <div class="m-3">
    <main class="flex mt-12 justify-around">
      <div>
        <h1 class="text-5xl font-bold">Home Page</h1>
        <p class="mt-12 w-[500px]">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
          consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
        </p>
        <RouterLink to="/auth"
          ><Button
            class="cursor-pointer bg-[#FF6464] text-white items-center w-50 py-3 rounded-sm mt-12"
            >Authorization</Button
          ></RouterLink
        >
      </div>
      <img src="/public\tools 1.png" alt="" />
    </main>
  </div>
</template>
