import Metadata from "../../lib/metadata";
import { Button, Logo } from '../../components'
const Root = () => {
    return (
        <>
            <Metadata />
            <div className='h-screen flex flex-col-reverse md:flex-row '>
                <aside className=' w-full md:w-1/2  h-auto md:h-screen bg-blueTwitter flex justify-center items-center invisible md:visible'>
                    <Logo white className="w-96 h-96 fill-current text-green-600" />
                </aside>
                <section className='w-full md:w-1/2 h-5/6 md:h-screen flex justify-center items-center'>
                    <div className='w-96 space-y-6 px-8 md:px-0'>
                        <div className='flex justify-center' >
                            <Logo />
                        </div>
                        <h1 className='text-black font-bold text-3xl'>Welcome to Twitter</h1>
                        <Button white to='/login' name="signupgoolge" id="signupgoolge" aria-label="Login on twitter" title="Login now" />
                        <p>
                            Dont have an account?  <span className='text-blueTwitter' to="/login">Join free today</span>
                        </p>
                        <Button to="/signup" white aria-label='sign up on twitter' title='Sign up' />

                    </div>
                </section>
            </div>
        </>
    );
}
export default Root;