import { Link } from 'react-router-dom';
import Metadata from "../../../lib/metadata";
import { Form, Input, Button, Logo } from '../../../components'
const Login = () => {
    return (
        <>
            <Metadata title="Sign in to Twitter." description="Twitter is the best social network out there, log in here." route="login" />
            <div className='h-full flex justify-center items-center py-8 px-8'>
                <section className='w-96 space-y-4'>
                    <Logo />
                    <p className='text-black-light text-base font-normal'>My Twitter</p>
                    <h1 className='text-black font-bold text-3xl'>Login to your account</h1>
                    <Form>
                        <Input id="emailInput" type="email" name="email" title='Email or Username' required />
                        <Input id="passwordInput" type='password' name="password" title='Password' required />
                        <div className='pt-8 space-y-6'>
                            <Link className='text-blueTwitter' to="/recover-password">Forgot password?</Link>
                            <Button to='/home' aria-label='sign up on twitter' title='Login Now' />
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