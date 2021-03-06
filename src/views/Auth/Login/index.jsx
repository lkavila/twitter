import { Link } from 'react-router-dom';
import { useState, useContext } from 'react';
import Metadata from "../../../lib/metadata";
import { Form, Input, Button, Logo } from '../../../components'
import { AuthContext } from '../../../context/AuthContext';
import { loginUser } from '../../../services/userService';
import { useHistory } from "react-router";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isIncorrect, setIsIncorrect] = useState("")

    const auth = useContext(AuthContext);
    const history = useHistory();

    const handleLogin = (event) => {
        event.preventDefault();
        loginUser(username, password)
            .then(data => {
                if (data.message === "ok") {
                    const user = data.data;
                    auth.login(user);
                    history.push("/home");
                } else {
                    setIsIncorrect(data.message)
                }
            })
            .catch((err) => {
                console.log("err", err);
            });
    };

    return (
        <>
            <Metadata title="Sign in to Twitter." description="Twitter is the best social network out there, log in here." route="login" />
            <div className='h-full flex justify-center items-center py-8 px-8'>
                <section className='w-96 space-y-4'>
                    <Logo />
                    <p className='text-black-light text-base font-normal'>My Twitter</p>
                    <h1 className='text-black font-bold text-3xl'>Login to your account</h1>
                    {
                        isIncorrect !== ""
                            ? <div className='bg-opacity-30  w-full text-redTwitter'>{isIncorrect}, check username and password </div>
                            : <></>
                    }

                    <Form>
                        <Input id="emailInput" type="email" name="email" title='Email or Username' required onChange={event => setUsername(event.target.value)} value={username} />
                        <Input id="passwordInput" type='password' name="password" title='Password' required onChange={event => setPassword(event.target.value)} value={password} />
                        <div className='pt-8 space-y-6'>
                            <Link className='text-blueTwitter' to="/recover-password">Forgot password?</Link>
                            <Button onClick={handleLogin} aria-label='sign up on twitter' title='Login Now' />
                        </div>
                    </Form>
                    <div className='flex justify-center' >
                        <p className='text-black-light text-base'>
                            Don't have an account?
                            <Link className='text-blueTwitter' to="/signup"> Join free today </Link>
                        </p>
                    </div>
                </section>
            </div>
        </>

    );
}

export default Login;