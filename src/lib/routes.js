import Login from '../views/Auth/Login';
import SignUp from '../views/Auth/SignUp';
import RecoverPassword from "../views/Auth/ResetPassword";
import Root from "../views/Auth";
import Home from "../views/Home/Home";
import Profile from "../views/Profile";
import TweetPage from "../views/Tweet";
import Explore from "../views/Explore";
import Bookmarks from "../views/Bookmarks";
import Messages from "../views/Messages";
import Notifications from "../views/Notifications";
import Lists from "../views/Lists";

const routes = {
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
    ],
    restricted: [
        {
            title: "Home",
            path: "/home",
            component: Home,
        },

        {
            title: "Tweet page",
            path: "/username/tweet/:id",
            component: TweetPage,
        },
        {
            title: "Explore",
            path: "/explore",
            component: Explore,
        },
        {
            title: "Notifications",
            path: "/notifications",
            component: Notifications,
        },
        {
            title: "Lists",
            path: "/lists",
            component: Lists,
        },
        {
            title: "Messages",
            path: "/messages",
            component: Messages,
        },
        {
            title: "Bookmarks",
            path: "/bookmarks",
            component: Bookmarks,
        },
        {
            title: "Profile",
            path: "/:username",
            component: Profile,
        },
    ]
}
export default routes;