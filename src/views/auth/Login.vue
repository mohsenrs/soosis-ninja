<template>
  <form ref="form" @submit.prevent="handleSubmit">
    <h3>Login</h3>
    <input type="email" placeholder="Email" v-model="email" required />
    <input type="password" placeholder="password" v-model="password" required />
    <p v-if="error" class="error">{{ error }}</p>
    <button v-if="!isPending">Log in</button>
    <button v-if="isPending" disabled>Loading</button>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import useLogin from '../../composables/useLogin'
export default {
  setup() {
    const { error, login, isPending } = useLogin()
    const email = ref('')
    const password = ref('')
    const form = ref(null)
    const handleSubmit = async () => {
      const res = await login(email.value, password.value)
      if (!error.value) {
        form.value.reset()
        console.log(`${email.value} logged in`)
      }
    }

    return { error, email, password, handleSubmit, form, isPending }
  },
}
</script>

<style></style>
