import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './views/Auth/Login';
import SignUp from './views/Auth/SignUp';
import Home from './views/Home/Home';
import Root from './views/Auth/index'
import ResetPasswordStepOne from './views/Auth/ResetPassword/resetStepOne';
import ResetPasswordStepTwo from './views/Auth/ResetPassword/resetStepTwo';
import ResetPasswordStepThree from './views/Auth/ResetPassword/resetStepThree';
import Profile from './views/Auth/Profile';
import TweetPage from './views/Tweet';

const App = () => {
  return (
    <main>
      <BrowserRouter>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/signup">
            <SignUp />
          </Route>

          <Route path="/signup">
            <SignUp />
          </Route>

          <Route path="/search-account">
            <ResetPasswordStepOne />
          </Route>

          <Route path="/send-reset-password">
            <ResetPasswordStepTwo />
          </Route>

          <Route path="/reset-password">
            <ResetPasswordStepThree />
          </Route>

          <Route path="/home">
            <Home />
          </Route>

          <Route path="/profile">
            <Profile />
          </Route>

          <Route path="/username/tweet">
            <TweetPage />
          </Route>

          <Route exact path="/">
            <Root />
          </Route>
        </Switch>

      </BrowserRouter>
    </main>
  );
};

export default App;