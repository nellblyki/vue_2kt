<script setup lang="ts">
import { type AuthApi } from '@/types/type'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const username = ref('')
const router = useRouter()
const password = ref('')
const error = ref(false)
const data = ref<AuthApi[]>([])
async function post() {
  // const resp = await ky.post<AuthApi>('https://dummyjson.com/auth/login', {json: {username: username ,password: password}}).json()
  const resp = await fetch('https://dummyjson.com/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username: username.value,
      password: password.value,
      expiresInMins: 60,
    }),
  })
  data.value = await resp.json()
  console.log(data.value)
  if (resp.ok) {
    localStorage.setItem('token', data.value.accessToken)
    console.log('добавлена хуйня')
    router.push('/profile')
  } else {
    error.value = true
  }
}
</script>
<template>
  <div class="flex justify-center mt-25">
    <div class="border rounded-2xl shadow border-[#00000019] bg-[#0000004] w-[350px]">
      <div class="flex justify-between items-center">
        <p class="font-medium p-4">Authorization</p>
        <p v-if="error" class="text-[#ff0000] font-medium p-4">Invalid credentials</p>
      </div>
      <div class="flex justify-center">
        <div class="flex flex-col items-center">
          <form class="w-full max-w-[200px]" @submit.prevent="post()">
            <p class="text-left text-[#00000060] my-2">Login</p>
            <input
              v-model="username"
              type="text"
              placeholder=""
              class="w-full shadow p-2 rounded-xl"
            />
            <p class="text-left text-[#00000060] my-2">Password</p>
            <input
              v-model="password"
              type="text"
              placeholder=""
              class="w-full shadow p-2 rounded-xl"
            />
            <button class="text-center text-[#00000060] my-5">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
