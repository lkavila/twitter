import { Link } from 'react-router-dom'
import Metadata from "../../../lib/metadata";
import { Input, Form, Button, Logo } from '../../../components'
const RecoverPassword = () => {
    return (
        <>
            <Metadata title="Join Twitter today." description="Join Twitter today. Sign up Sign in. Follow what interests you. Find out what people are talking about. Join the conversation." route="register" />
            <div className='h-full flex justify-center items-center py-16 px-8'>
                <section className='w-96 space-y-6'>
                    <Logo />
                    <p className='text-black-light text-base font-normal'>My Twitter</p>
                    <h1 className='text-black font-bold text-3xl'>Recover your password</h1>
                    <Form>
                        <Input id="emailInput" type="email" name="email" title='Email or Username' required />
                        <div className='pt-8'>
                            <Button to='/login' aria-label='sign up on twitter' title='Recover your password' />
                        </div>
                    </Form>
                    <div className='flex justify-center' >
                        <p className='text-black-light text-base'>
                            Return to
                            <Link className='text-blueTwitter' to="/login"> Login </Link>
                        </p>
                    </div>
                </section>
            </div>
        </>
    );
}

export default RecoverPassword;