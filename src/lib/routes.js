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
            Component: Root,
        },
        {
            title: "Login",
            path: "/login",
            Component: Login,
        },
        {
            title: "Sign Up",
            path: "/signup",
            Component: SignUp,
        },
        {
            title: "Password reset: search user",
            path: "/recover-password",
            Component: RecoverPassword,
        },
    ],
    restricted: [
        {
            title: "Home",
            path: "/home",
            Component: Home,
        },

        {
            title: "Tweet page",
            path: "/username/tweet/:id",
            Component: TweetPage,
        },
        {
            title: "Explore",
            path: "/explore",
            Component: Explore,
        },
        {
            title: "Notifications",
            path: "/notifications",
            Component: Notifications,
        },
        {
            title: "Lists",
            path: "/lists",
            Component: Lists,
        },
        {
            title: "Messages",
            path: "/messages",
            Component: Messages,
        },
        {
            title: "Bookmarks",
            path: "/bookmarks",
            Component: Bookmarks,
        },
        {
            title: "Profile",
            path: "/:username",
            Component: Profile,
        },
    ]
}
export default routes;