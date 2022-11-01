import { defineStore } from "pinia";
import { supabase } from "../supabase";

export const useUserStore = defineStore("user", {
  state: () => ({
    user: null,
  }),

  actions: {

    async fetchUser() {
      const user = await supabase.auth.user();
      if (user) {
        this.user = user;
      }
    },
    // LOGIN
    async logIn(email, password) {
      const { user, error } = await supabase.auth.signIn({
        email: email,
        password: password,
      });
      if (error) throw error;
      if (user) this.user = user;
    },
    // SIGNUP
    async signUp(email, password) {
      const { user, error } = await supabase.auth.signUp({
        email: email,
        password: password,
      });
      if (error) throw error;
      if (user) this.user = user;
    },

    //LOGOUT
    async signOut() {
      try {
        const { error } = await supabase.auth.signOut();
        if (error) throw error;
        this.user = null;
        this.errors = null;
      } catch (error) {
        this.errors = error;
      }
    },
  },

  //PINIA
  persist: {
    enabled: true,
    strategies: [
      {
        key: "user",
        storage: localStorage,
      },
    ],
  },
});
