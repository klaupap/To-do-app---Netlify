<template>
    <NavBar></NavBar>
    <RouterView />
</template>

<script setup>
import { onMounted } from "vue";
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useUserStore } from "./stores/user.js";
import { useRouter } from "vue-router";
import { RouterLink, RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";
import { supabase } from "./supabase";

const router = useRouter();
const userStore = useUserStore();
const { user } = storeToRefs(userStore);


onMounted(async () => {
  try {
    // Call to fetch user
    await userStore.fetchUser()
    if (!user.value) {
      // Not logged user. Redirect them to Home
      router.push({ name: "home" })
    } else {
      // Logged user. Redirect their dashboard
      router.push({ name: "dashboard" })
    }
  } catch (e) {
    console.log(e)
  }
});




</script>

<style>
html {
  font-family: "Roboto", sans-serif;
}
body,
html, 
#app {
  height: 100%;
}
</style>
