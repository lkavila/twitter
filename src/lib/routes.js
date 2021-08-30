import Login from '../views/Auth/Login';
import SignUp from '../views/Auth/SignUp';
import ResetPasswordStepOne from "../views/Auth/ResetPassword/resetStepOne";
import ResetPasswordStepTwo from "../views/Auth/ResetPassword/resetStepTwo";
import ResetPasswordStepThree from "../views/Auth/ResetPassword/resetStepThree";
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
            path: "/profile",
            component: Profile,
        },
        {
            title: "Tweet page",
            path: "/username/tweet",
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
            path: "/search-account",
            component: ResetPasswordStepOne,
        },
        {
            title: "Password reset: send reset-link",
            path: "/send-reset-password",
            component: ResetPasswordStepTwo,
        },
                {
            title: "Password reset: new password",
            path: "/reset-password",
            component: ResetPasswordStepThree,
        },
    ]
}
export default routes;