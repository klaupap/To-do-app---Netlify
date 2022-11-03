<template>
  <section class="bg d-flex">
    <div class="container d-flex justify-content-center">
      <div class="row gx-lg-5 align-items-center mb-5">
        <div class="col">
          <form @submit.prevent="createTask">
            <h1
              class="my-5 display-5 fw-bold ls-tight animate__animated animate__bounce"
              style="color: hsl(218, 81%, 75%)"
            >
            ☕ What's on your todo list?
            </h1>
            <div class="row">
              <div class="col input-group mb-3">
                <input
                  class="form-control"
                  placeholder="Buy some cookies 🍪"
                  type="text"
                  id="inputText"
                  v-model="title"
                  aria-describedby="basic-addon2"
                />
                <div class="input-group-append">
                  <button class="btn btn-primary">Add</button>
                </div>
              </div>
            </div>
          </form>


          <div class="d-flex">
            <ul style="list-style: none" class="list-group">
              <li
                v-for="task in tasks"
                :key="task.id"
                class="list-group-item d-flex justify-content-between align-items-center"
                :class="{ completed: task.is_complete }"
              >
                <div class="form-check form-switch ">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    v-model="task.is_complete"
                    id="flexSwitchCheckDefault"
                    @change="toggleCompleted(task)"
                  />
                  <label
                    class="form-check-label me-5"
                    for="flexSwitchCheckDefault"
                  ></label>
                </div>
                <p class="mx-5 align-items-start ">{{ task.title }}</p>
                <div class="btn ms-5 trash p-2 align-self-baseline" @click="deleteTask(task)">
                  <i class="bi bi-trash3-fill align-self-baseline"></i>
                </div>
              </li>

            </ul>

          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { supabase } from "../supabase";
import { useRouter } from "vue-router";
import { storeToRefs } from "pinia";
import { ref, reactive, computed } from "vue";
import { useUserStore } from "../stores/user";
import { useTaskStore } from "../stores/task";

const userStore = useUserStore();
const { user } = storeToRefs(userStore);
const taskStore = useTaskStore();
const { tasks } = storeToRefs(taskStore);

//const createTask

const title = ref("");
const complete = ref(false);

const createTask = async () => {
  await taskStore.createTask(title.value, complete.value, user._object.user.id);
  title.value = "";
  complete.value = false;
  await taskStore.fetchTasks();
};

const loadTasks = async () => {
  if (user) {
    await taskStore.fetchTasks();
  }
};
loadTasks();

//deleteTask

const deleteTask = async (task) => {
  await taskStore.deleteTask(task.id);
  loadTasks();
};

// const toggleCompleted

const toggleCompleted = async (task) => {
  await taskStore.toggleCompleted(task.title, task.id, task.is_complete);
  console.log("toggleCompleted");
  await taskStore.fetchTasks();
};
</script>
<style scoped>
html {
  height: 100%;
  margin: 0%;
  padding: 0%;
}
.btn {
  border: none;
}
.container {
  margin: 0%;
  padding: 0%;
}
.bg {
  background-color: rgba(245, 202, 195, 0.347);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
}

.trash {
  color: grey;
  font-size: 20px;
}

.trash:hover {
  color: red;
  transform: scale(1.1);
}

.btn-primary {
  background-color: #82c0cc;
  border: none;
}

p {
  color: 514D67;
}

.btn-primary:hover {
  background-color: #53b0c2;
 }

.completed {
  text-decoration: line-through;
  color: grey;
  background-color: rgb(247, 247, 247);
}

.list-group-item {

}


</style>
