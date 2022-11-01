<template>

  <section class="background-radial-gradient overflow-hidden">
    <div class="container px-4 py-4 px-md-5 text-center text-lg-start my-5">
      <div class="row gx-lg-5 align-items-center mb-5 ">
        <div class="col-lg-6 mb-5 mb-lg-0" style="z-index: 10">
          <h1
            class="my-5 display-5 fw-bold ls-tight"
            style="color: hsl(218, 81%, 95%)"
          >
            Are you ready <br />
            <span style="color: hsl(218, 81%, 75%)">to do your best?</span>
          </h1>
          <p class="mb-4 opacity-70" style="color: hsl(218, 81%, 85%)">
            Stay ordered.
            <br />
            Stay focus.
          </p>
        </div>

        <div class="col-lg-6 mb-5 mb-lg-0 position-relative">
          <div class="card bg-glass">
            <div class="card-body px-4 py-5 px-md-5">
              <form @submit.prevent="signup">
                <!-- Email input -->
                <div class="form-outline mb-4">
                  <input
                    type="email"
                    id="email"
                    class="form-control"
                    required
                    placeholder="Email Address"
                    v-model="email"
                  />
                </div>

                <!-- Password input -->
                <div class="form-outline mb-4">
                  <input
                    type="password"
                    id="password"
                    class="form-control"
                    required
                    placeholder="Password"
                    v-model="password"
                  />
                </div>

                <!-- Confirm password input -->
                <div class="form-outline mb-4">
                  <input
                    type="password"
                    id="confirmPassword"
                    class="form-control"
                    required
                    placeholder="Confirm password"
                    v-model="confirmPassword"
                  />
                </div>
                <!-- Mensaje error / falta el CSS -->
                <div id="error-message" class= "alert text-danger text-center animate__animated animate__swing" v-if="errorMsg" role="alert">
    <p><i class="bi bi-exclamation-circle"></i>
      {{ errorMsg }}</p>
  </div>
    <!-- Mensaje verificació mail / falta el CSS -->

    <div id="verify-message" class="alert text-success text-center animate__animated animate__bounce" v-if="verifyEmail" role="alert">
    <p><i class="bi bi-check-circle"></i>
{{ verifyEmail }}</p>
  </div>
                <!-- Submit button -->
                <button type="submit" class="btn btn-primary btn-block mb-4">
                  Register
                </button>

                <!-- Pendiente el sign in-->
                <!-- Register buttons -->
                <div class="text-center">
                  <p>
                    Already have an account?
                    <router-link class="signin-btn" to="/signin">
                      Sign In
                    </router-link>
                  </p>
                </div>

              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { supabase } from "../supabase";
import { useRouter } from "vue-router";
import { storeToRefs } from "pinia";
import { useUserStore } from "../stores/user.js";
import { computed } from 'vue';

const email = ref(null);
const password = ref(null);
const confirmPassword = ref(null);
const errorMsg = ref(null);
const router = useRouter();
const verifyEmail = ref(null);
const userStore = useUserStore();

const signup = async () => {
  if (password.value === confirmPassword.value) {
    try {
      await userStore.signUp(email.value, password.value);
      verifyEmail.value =
        "Success! To verify your identity, we need you to confirm your email";
      setTimeout(() => {
        router.push({ name: "dashboard" });
        verifyEmail.value = null;
      }, 10000);
    } catch (error) {
      errorMsg.value = error.message;
      setTimeout(() => {
        errorMsg.value = null;
      }, 5000);
    }
    return;
  }
  errorMsg.value = "Error: Passwords do not match";
  setTimeout(() => {
    errorMsg.value = null;
  }, 7000);
};
</script>

<style scoped>
.background-radial-gradient {
  background-color: hsl(218, 41%, 15%);
  background-image: url("../components/icons/mug.jpeg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
}

.bg-glass {
  background-color: hsla(0, 0%, 100%, 0.9) !important;
  backdrop-filter: saturate(200%) blur(25px);
}

.signin-btn {
  text-decoration: none;
  color: #82C0CC;
}

.btn{
 background-color: #82C0CC;
 border:none;

}
</style>
