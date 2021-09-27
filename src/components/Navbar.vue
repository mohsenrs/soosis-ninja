<template>
  <div class="navbar">
    <nav>
      <img src="../assets/soosis-music.png" alt="soosis music" />
      <h1><router-link :to="{ name: 'Home' }">Soosis Music</router-link></h1>
      <div class="links">
        <div v-if="user">
          <button @click="handleClick">Logout</button>
        </div>
        <div v-else>
          <router-link class="btn" :to="{ name: 'Signup' }">Sign up</router-link>
          <router-link class="btn" :to="{ name: 'Login' }">Log in</router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import useLogout from '../composables/useLogout'
import getUser from '../composables/getUser'
import { useRouter } from 'vue-router'
export default {
  setup() {
    const { logout } = useLogout()
    const { user } = getUser()
    const router = useRouter()

    const handleClick = async () => {
      await logout()
      console.log('user logged out')
      router.push({ name: 'Login' })
    }

    return { handleClick, user }
  },
}
</script>

<style scoped>
.navbar {
  padding: 16px 10px;
  margin-bottom: 60px;
  background-color: white;
}
nav {
  display: block;
  text-align: center;
  margin: 0 auto;
  max-width: 1200px;
}
h1 {
  margin: 10px 0;
}
nav .links {
  margin-left: auto;
}
nav .links a,
button {
  margin-left: 16px;
  font-size: 16px;
}
nav img {
  width: 60px;
  height: auto;
}

@media screen and (min-width: 525px) {
  nav {
    display: flex;
    align-items: center;
  }
  h1 {
    margin-left: 20px;
  }
}
</style>
