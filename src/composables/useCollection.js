import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'

const useCollection = (collection) => {
  const error = ref(null)
  const isPending = ref(false)

  const addDoc = async (doc) => {
    error.value = null
    const isPending = true

    try {
      await projectFirestore.collection(collection).add(doc)
      const isPending = false
    } catch (err) {
      console.log(err.message)
      error.value = 'could not send message'
      const isPending = false
    }
  }

  return { error, addDoc, isPending }
}

export default useCollection
