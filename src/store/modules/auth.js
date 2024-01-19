import axios from "axios";

export default{
    state: {
        user: null,
        token: null,
        isAuthenticated:false
    },
    getters: {
        getUser: state => state.user,
        getToken: state => state.token
    },
    mutations: {
        setUser(state,user) { state.user = user},
        setToken(state,user) { state.user = user}
    },
    actions: {
        async login({ commit }, credentials){
            console.log(credentials);
            try {
                const res = await axios.post(process.env.VUE_APP_BASE_URI+'login', credentials);
                commit("setToken", res.data.token);
                commit("setUser", res.data.user);
                localStorage.setItem('token', res.data.token);
                this.isAuthenticated = true;
                localStorage.setItem('isAuthenticated', this.isAuthenticated);
            }catch (e) {
                console.log(e)
            }
        }
    },
    modules: {
    }
}
