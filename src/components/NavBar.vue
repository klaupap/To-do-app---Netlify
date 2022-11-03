<template>
  <nav
    class="navbar navbar-expand-lg navbar-light p-3"
    style="background-color: #f5cac3"
  >
    <div class="container-fluid">
      <a title="Doing my best" href="#"
        ><img
          class="navbar-brand"
          src="./icons/mug-white.png"
          style="height: 60px; width: 50px"
      /></a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"> </span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link v-if="user" to="/dashboard" class="nav-link mx-2"
              >My tasks
            </router-link>
          </li>
          <li class="nav-item">
            <router-link v-if="!user" to="/signin" class="nav-link mx-2"
              >Sign In</router-link
            >
          </li>
          <li class="nav-item">
            <a v-if="user" class="nav-link mx-2" role="button" @click="logout"
              >Sign Out</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { supabase } from "../supabase";
import { useRouter } from "vue-router";
import { computed } from "vue";
import { useUserStore } from "../stores/user.js";
import { storeToRefs } from "pinia";

const userStore = useUserStore();
const router = useRouter();
const { user } = storeToRefs(userStore);

const logout = async () => {
  try {
    await userStore.signOut();
    await router.push({ name: "home" });
  } catch (e) {
    console.log(e);
  }
};
</script>

<style scoped>
.nav-item:hover {
  color: yellow;
  transform: scale(1.1);
}
</style>
