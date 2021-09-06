import { Logo, Button } from '../'
import NavList from './NavList'
import NavButton from './NavButton'
const Nav = () => {
    return (

        <nav className='h-screen flex flex-col justify-end grid justify-items-end py-4 pr-2 sticky top-0'>
            <div className='w-11/12 space-y-3' >
                <Logo className="h-7 w-7 ml-2.5" />
                <NavList />
                <Button title='Tweet' className='rounded-full text-center flex xl:inline-flex justify-center items-center hidden' />
                <Button width="w-12" className='rounded-full flex inline-flex xl:hidden' />
            </div>
            <NavButton />
        </nav>
    );
}

export default Nav;