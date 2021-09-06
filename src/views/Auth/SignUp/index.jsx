import { Link } from 'react-router-dom'
import Metadata from "../../../lib/metadata";
import { Input, Form, Button, Logo } from '../../../components'
const SignUp = () => {
    return (
        <>
            <Metadata title="Join Twitter today." description="Join Twitter today. Sign up Sign in. Follow what interests you. Find out what people are talking about. Join the conversation." route="register" />
            <div className='h-full flex justify-center items-center py-8 px-8'>
                <section className='w-96 space-y-4'>
                    <Logo />
                    <p className='text-black-light text-base font-normal'>My Twitter</p>
                    <h1 className='text-black font-bold text-3xl'>Create your account</h1>
                    <Form>
                        <Input id="namedInput" type="text" name="name" title='Name' required />
                        <Input id="userNamedInput" type="text" name="userName" title='Username' required />
                        <Input id="emailInput" type="email" name="email" title='Email' required />
                        <Input id="passwordInput" type='password' name="password" title='Password' required />
                        <Input id="passwordConfirmatioInput" type='password' name="passwordConfirmation" title='Password Confirmation' required />
                        <div className='pt-8'>
                            <Button aria-label='sign up on twitter' title='Sing up' />
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