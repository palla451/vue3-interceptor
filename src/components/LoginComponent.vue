<template>
  <div id="login">
    <form @submit.prevent="handleLogin">
      <div class="form-inputs">
        <label for="username">Username</label>
        <input type="text" id="username" name="username" v-model="username" placeholder="Username" />
      </div>
      <div class="form-inputs">
        <label for="password">Password</label>
        <input type="password" id="password" name="password" v-model="password" placeholder="Password" />
      </div>
      <button type="submit">Login</button>
    </form>

      <span>{{ userLogged }}</span>
      <span>{{ token }}</span>
      <span>{{ isLoggedIn }}</span>
  </div>

</template>

<script>
// import axios from "axios";

export default {
  data(){
    return {
      username:'',
      password:'',
      user: null
    }
  },
  methods:{
    async handleLogin() {
      console.log(this.username);
      await this.$store.dispatch("login",{
        'username' : this.username,
        'password' : this.password
      });
    }
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.getUser !== null;
    },
    userLogged() {
      return this.$store.getters.getUser;
    },
    token() {
      return this.$store.getters.getToken;
    },
  },
  // methods: {
  //   async login(){
  //     const res = await axios.post(process.env.VUE_APP_BASE_URI+'login',{
  //       'username': this.username,
  //       'password': this.password
  //     });
  //     console.log(res.data);
  //     this.user = res.data.user
  //   }
  // }
}
</script>

<style scoped lang="scss">

</style>
