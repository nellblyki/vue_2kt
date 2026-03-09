<script setup lang="ts">
import { type User } from '@/types/type'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
const data = ref<User>()
const router = useRouter()
onMounted(async () => {
  const token = localStorage.getItem('token')
  if (!token) {
    router.push('/auth')
  }
  const resp = await fetch('https://dummyjson.com/auth/me', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  if (resp.ok) {
    data.value = await resp.json()
    console.log(data.value)
  } else {
    router.push('/auth')
    localStorage.removeItem('token')
  }
})
</script>
<template>
  <div class="flex justify-center gap-20 mt-17">
    <div>
      <p class="text-[#21243D] text-5xl mb-16 font-bold">My profile</p>
      <div>
        <div v-if="data" class="flex flex-col gap-4">
          <div class="font-medium shadow rounded-xl p-3 w-max">Username: {{ data.username }}</div>
          <div class="font-medium shadow rounded-xl p-3 w-max">Name: {{ data.firstName }}</div>
          <div class="font-medium shadow rounded-xl p-3 w-max">Lastname: {{ data.lastName }}</div>
          <div class="font-medium shadow rounded-xl p-3 w-max">Gender: {{ data.gender }}</div>
          <div class="font-medium shadow rounded-xl p-3 w-max">Email: {{ data.email }}</div>
        </div>
      </div>
    </div>
    <div v-if="data" class="flex items-center">
      <img :src="data.image"/>
    </div>
  </div>
</template>
