<template>
  <form @submit.prevent="handleSubmit">
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

export default {
  setup() {

    const title = ref('')
    const description = ref('')
    const file = ref(null)
    const fileError = ref(null)


    const handleSubmit = () => {
      if (file.value) {
        console.log('title: ', title.value, 'description: ', description.value, file.value)
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


    return { title, description, handleSubmit, handleChange, fileError }

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
