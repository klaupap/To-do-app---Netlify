<template>
  <section class="background-radial-gradient overflow-hidden">
    <div class="container justify-content-center align-items-center px-4 py-4 px-md-5 text-center my-5">
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
      <p>
        <router-link to="/signin" class="btn btn-primary btn-block mb-4">
          Sign in
        </router-link>
        <router-link to="/signup" class="btn btn-primary btn-block mb-4">
          Sign up
        </router-link>
      </p>
    </div>
  </section>
  <!-- Section: Design Block -->
</template>

<script></script>

<style scoped>
.background-radial-gradient {
  background-color: hsl(218, 41%, 15%);
  background-image: url("../components/icons/mug.jpeg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
}
.btn{
 background-color: #82C0CC;
 border:none;

}
</style>
