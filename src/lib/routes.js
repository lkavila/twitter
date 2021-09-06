import Login from '../views/Auth/Login';
import SignUp from '../views/Auth/SignUp';
import RecoverPassword from "../views/Auth/ResetPassword";
import Root from "../views/Auth";
import Home from "../views/Home/Home";
import Profile from "../views/Profile";
import TweetPage from "../views/Tweet";

const routes = {
    restricted: [
        {
            title: "Home",
            path: "/home",
            component: Home,
        },
        {
            title: "Profile",
            path: "/username",
            component: Profile,
        },
        {
            title: "Tweet page",
            path: "/username/tweet/:id",
            component: TweetPage,
        },
    ],
    unrestricted: [
        {
            title: "Home",
            path: "/",
            component: Root,
        },
        {
            title: "Login",
            path: "/login",
            component: Login,
        },
        {
            title: "Sign Up",
            path: "/signup",
            component: SignUp,
        },
        {
            title: "Password reset: search user",
            path: "/recover-password",
            component: RecoverPassword,
        },
    ]
}
export default routes;