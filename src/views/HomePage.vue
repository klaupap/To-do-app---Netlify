<template>
  <section class="background-radial-gradient overflow-hidden">
    <div class="container justify-content-center align-items-center px-4 py-4 px-md-5 text-center my-5">
      <div class= "row">
        <div class= "col  d-flex justify-content-center">
          <div class= "text-center">
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
      <div class="row justify-content-evenly">
        <router-link to="/signin" class="btn btn-primary btn-block mb-4 p-2 col-3">
          Sign in
        </router-link>
        <router-link to="/signup" class="btn btn-primary btn-block mb-4 p-2 col-3">
          Sign up
        </router-link>
      </div>
    </div>
  </div>
    </div>
  </div>
  </section>
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
 .btn:hover {
  background-color: #53b0c2;
 

 }


</style>
