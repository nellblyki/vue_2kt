<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="flex gap-3 justify-end text-2xl mr-[117px] font-medium cursor-pointer">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/user">Users</RouterLink>
    <RouterLink to="/profile">Profile</RouterLink>
  </header>
  <main>
    <RouterView />
  </main>
  <footer class="mt-60">
    <div class="flex justify-center gap-10">
      <img src="/public\fb.png" alt="" />
      <img src="/public\Group.png" alt="" />
      <img src="/public\Insta.png" alt="" />
      <img src="/public\Linkedin.png" alt="" />
    </div>
    <div class="flex justify-center mt-6">
      <p>Copyright ©2020 All rights reserved</p>
    </div>
  </footer>
</template>

<style scoped></style>
