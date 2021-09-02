<template>
  <form ref="form" @submit.prevent="handleSubmit">
    <h3>Login</h3>
    <input type="email" placeholder="Email" v-model="email" />
    <input type="password" placeholder="password" v-model="password" />
    <button>Log in</button>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import useLogin from '../../composables/useLogin'
export default {
  setup() {
    const { error, login } = useLogin()
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

    return { error, email, password, handleSubmit, form }
  },
}
</script>

<style></style>
