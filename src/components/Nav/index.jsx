import { Logo, Button } from '../'
import NavList from './NavList'
import NavButton from './NavButton'
const Nav = () => {
    return (

        <nav className='h-screen w-full flex flex-col  justify-between  items-center xl:items-stretch  xl:pl-0  p-1 sm:p-4 pb-4 sticky top-0' >
            <div className='space-y-3' >
                <Logo className="h-7 w-7 ml-2.5" />
                <NavList />
                <Button title='Tweet' className='rounded-full text-center xl:flex justify-center items-center hidden' />
                <Button title='T' width="w-12" className='rounded-full flex justify-center  items-center xl:hidden' />
            </div>
            <NavButton />
        </nav>
    );
}

export default Nav;