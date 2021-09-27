<template>
  <form ref="form" @submit.prevent="handleSubmit">
    <h3>Sign up</h3>
    <input type="text" placeholder="display name" v-model="displayName" />
    <input type="email" placeholder="Email" v-model="email" required />
    <input type="password" placeholder="password" v-model="password" required />
    <p v-if="error" class="error">{{ error }}</p>
    <button v-if="!isPending">Sign up</button>
    <button v-if="isPending" disabled>Loading</button>
  </form>
</template>

<script>
import useSignup from '@/composables/useSignup'
import { ref } from '@vue/reactivity'
export default {
  setup() {
    const { error, signup, isPending} = useSignup()
    const email = ref('')
    const password = ref('')
    const displayName = ref('')
    const form = ref(null)

    const handleSubmit = async () => {
      const res = await signup(email.value, password.value, displayName.value)
      if (!error.value) {
        form.value.reset()
        console.log(`${email.value} signed up`)
      }
    }

    return { email, password, form, displayName, error, isPending, handleSubmit }
  }
}
</script>

<style></style>
