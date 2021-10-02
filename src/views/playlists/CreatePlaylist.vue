<template>
  <form ref="form" @submit.prevent="handleSubmit">
    <h4>Create new playlist</h4>
    <input type="text" placeholder="playlist title" v-model="title" />
    <input
      type="text"
      placeholder="playlist description"
      v-model="description"
    />
    <label>upload playlist cover</label>
    <input type="file" @change="handleChange" />
    <div class="error">{{ fileError }}</div>
    <button>Create</button>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import useStorage from '@/composables/useStorage'
import { router, useRouter } from 'vue-router'

export default {
  setup() {
    const { url, filePath, uploadImage } = useStorage()

    const form = ref(null)
    const title = ref('')
    const description = ref('')
    const file = ref(null)
    const fileError = ref(null)
    const router = useRouter()

    const handleSubmit = async () => {
      if (file.value) {
        await uploadImage(file.value)
        console.log('image uploaded', 'url :', url.value);
        // form.value.reset()
        alert('playlist successfully created')
        router.push({ name: 'Home' })
      }
    }

    // allowed file types
    const types = ['image/png', 'image/jpeg']

    const handleChange = (e) => {
      const selected = e.target.files[0]
      // console.log(selected)

      if (selected && types.includes(selected.type)) {
        file.value = selected
        fileError.value = null
      } else {
        file.value = null
        fileError.value = 'please select correct type(png or jpeg)'
      }
    }

    return { form, title, description, handleSubmit, handleChange, fileError }
  },
}
</script>

<style>
input[type='file'] {
  border: 0;
  padding: 0;
}
label {
  font-size: 12px;
  display: block;
  margin-top: 30px;
}
button {
  margin-top: 20px;
}
</style>
