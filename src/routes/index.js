
import AsyncComponent from "../utils/AsyncComponent";

const Home = AsyncComponent(() => import("../containers/Home"));
const Test = AsyncComponent(() => import("../containers/Test"));
const Login = AsyncComponent(() => import("../containers/Login"));

export default [
    { path: "/", name: "home", component: Home, auth: true },
    { path: "/test", name: "test", component: Test, auth: true },
    { path: "/login", name: "login", component: Login, auth: false }
]
