import { createRouter, createWebHistory } from "vue-router";
import SignUpComponent from "../components/Authentication/SignUpComponent.vue"
import LoginComponent from "../components/Authentication/LoginComponent.vue"

const routes = [
    {
        path:'/Login',
        name:'Login',
        component: LoginComponent
    },
    {
        path:'/SignUp',
        name:'SignUp',
        component: SignUpComponent
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router