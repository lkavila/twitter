import { Logo, Button } from '../'
import NavList from './NavList'
import NavButton from './NavButton'
import { GiFeather } from 'react-icons/gi'
const Nav = ({ user, logout }) => {
    return (

        <nav className='h-screen w-full flex flex-col  justify-between  items-center xl:items-stretch  xl:pl-0  p-1 sm:px-4 py-4 sticky top-0' >
            <div className='space-y-3' >
                <Logo className="h-7 w-7 ml-2.5" />
                <NavList user={user} />
                <Button to={'#'} title='Tweet' className='rounded-full text-center xl:flex justify-center items-center hidden' />
                <Button to={'#'} width="w-12" className='rounded-full flex justify-center  items-center xl:hidden' >
                    <GiFeather size='25' />
                </Button>
            </div>
            <NavButton user={user} logout={logout} />
        </nav>
    );
}

export default Nav;