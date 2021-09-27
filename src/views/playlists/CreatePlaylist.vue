<template>
  <form>
    <h4>Create new playlist</h4>
    <input type="text" placeholder="playlist title" v-model="title">
    <input type="text" placeholder="playlist description" v-model="description">
    <label>upload playlist cover</label>
    <input type="file">
    <button>Create</button>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
  setup() {
    const title = ref('')
    const description = ref('')

    return { title, description }
  }
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