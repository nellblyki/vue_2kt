<script setup lang="ts">
import { type User, type UsersResponse } from '@/types/type'
import ky from 'ky'
import { onMounted, ref } from 'vue'

const data = ref<User[]>([])
onMounted(async () => {
  const resp = await ky.get<UsersResponse>('https://dummyjson.com/users').json()
  data.value = resp.users
  console.log(data.value)
})
const limit = ref(5)
</script>
<template>
  <div class="flex justify-center" v-for="user in data.slice(0, limit)" :key="user.id">
    <div
      class="border rounded-2xl p-3 flex justify-between bg-[#00000004] border-[#00000019] shadow w-[500px]"
    >
      <p class="font-[500]">{{ user.firstName }} {{ user.lastName }} {{ user.maidenName }}</p>
      <p class="font-[400] text-[#00000060]">{{ user.email }}</p>
    </div>
  </div>
  <div class="flex justify-center">
    <div v-if="limit < data.length"
      @click="limit += 5"
      class="cursor-pointer border rounded-2xl p-3 flex justify-between bg-[#00000004] border-[#00000019] shadow w-[500px]"
    >
      ...
    </div>
  </div>
</template>
