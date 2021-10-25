import { Link } from 'react-router-dom'
import Metadata from "../../../lib/metadata";
import { Input, Form, Button, Logo } from '../../../components'
import { useState } from 'react';
import { useHistory } from 'react-router'
import { signUpUser } from '../../../services/userService'
import { validateEmail, validatePasswordComplex, validateUsername } from '../../../lib/validators'

const SignUp = () => {
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfir, setPasswordConfir] = useState("");
    const [errors, setErrors] = useState(["", "", "", "",]);
    const [error, setError] = useState("");
    const messagePassword = "Password not valid; at least: 1 lowercase, 1 uppercase 1 number, 1 special character and be at least 8 characters long"
    const history = useHistory();
    let aux;
    const handleChange = (event, func, num) => {
        func(event.target.value)
        aux = errors
        switch (num) {
            case 1:
                break;
            case 2:
                if (!validateUsername(event.target.value))
                    aux[0] = "Username not valid";
                else
                    aux[0] = "";
                setErrors(aux)
                break;
            case 3:
                if (!validateEmail(event.target.value))
                    aux[1] = "Email not valid";
                else
                    aux[1] = "";
                setErrors(aux)
                break;
            case 4:
                if (!validatePasswordComplex(event.target.value))
                    aux[2] = messagePassword;
                else
                    aux[2] = "";
                setErrors(aux)
                break;
            case 5:
                if (password !== event.target.value)
                    aux[3] = "Passwords do not math";
                else
                    aux[3] = "";
                setErrors(aux)
                break;
            default:
        }
    }

    const handleSignUp = (event) => {
        event.preventDefault();
        if (errors.join() === ",,," && name !== "") {
            setError("")
            signUpUser(name, email, username, password, passwordConfir)
                .then(data => {
                    if (data.active)
                        history.push("/login");
                    else {
                        setError(data.message)
                    }
                })
                .catch((err) => {
                    console.log("err", err);
                });
        } else {
            setError("Check inputs, all are requerid")
        }
    };

    return (
        <>
            <Metadata title="Join Twitter today." description="Join Twitter today. Sign up Sign in. Follow what interests you. Find out what people are talking about. Join the conversation." route="register" />
            <div className='h-full flex justify-center items-center py-8 px-8'>
                <section className='w-96 space-y-4'>
                    <Logo />
                    <p className='text-black-light text-base font-normal'>My Twitter</p>
                    <h1 className='text-black font-bold text-3xl'>Create your account</h1>
                    <span className='bg-opacity-30 text-sm w-full text-redTwitter'>{error}</span>
                    <Form>
                        <Input id="namedInput" type="text" name="name" title='Name' required onChange={(e) => { handleChange(e, setName, 1) }} value={name} />
                        <Input id="userNamedInput" type="text" name="userName" title='Username' required onChange={(e) => { handleChange(e, setUsername, 2) }} value={username} />
                        <span className='bg-opacity-30 text-sm w-full text-redTwitter' id="userNamedS">{errors[0]}</span>
                        <Input id="emailInput" type="email" name="email" title='Email' required onChange={(e) => { handleChange(e, setEmail, 3) }} value={email} />
                        <span className='bg-opacity-30 text-sm w-full text-redTwitter' id="emailS">{errors[1]}</span>
                        <Input id="passwordInput" type='password' name="password" title='Password' required onChange={(e) => { handleChange(e, setPassword, 4) }} value={password} />
                        <span className='bg-opacity-30 text-sm w-full text-redTwitter' id="passwordS">{errors[2]}</span>
                        <Input id="passwordConfirmatioInput" type='password' name="passwordConfirmation" title='Password Confirmation' required onChange={(e) => { handleChange(e, setPasswordConfir, 5) }} value={passwordConfir} />
                        <span className='bg-opacity-30 text-sm w-full text-redTwitter ' id="passwordConfirmatioS">{errors[3]}</span>
                        <div className='pt-8'>
                            <Button onClick={handleSignUp} aria-label='sign up on twitter' title='Sign up' />
                        </div>
                    </Form>
                    <div className='flex justify-center' >
                        <p className='text-black-light text-base'>
                            Already have an account?
                            <Link className='text-blueTwitter' to="/login"> Login </Link>
                        </p>
                    </div>
                </section>
            </div>
        </>
    );
}

export default SignUp;