import { defineStore } from "pinia";
import { supabase } from "../supabase";

export const useTaskStore = defineStore("tasks", {
  state: () => ({
    tasks: null,
    errors: null,
  }),

  actions: {
    async fetchTasks() {
      const { data: tasks } = await supabase
        .from("tasks")
        .select("*")
        .order("id", { ascending: false });
      this.tasks = tasks;
    },
    //async createTask

    async createTask(title, complete, user_id) {
      console.log(user_id, title, complete);
      const { error } = await supabase
        .from("tasks")
        .insert([{ title: title, is_complete: complete, user_id: user_id }]);
    },

    //async deleteTask

    async deleteTask(task_id) {
      const { data, error } = await supabase
        .from("tasks")
        .delete()
        .match({ id: task_id });
    },

    //async toggleCompleted

    async toggleCompleted(title, task_id, is_complete) {
      const { data, error } = await supabase
        .from("tasks")
        .update({ title: title, is_complete: is_complete })
        .match({ id: task_id });
    },

    //async deleteTask

    async deleteAllTasks() {
      const { data, error } = await supabase
        .from("tasks")
        .delete()
        .neq("id", 0);
    },
  },
});
