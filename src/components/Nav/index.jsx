import { Logo, Button } from '../'
import NavList from './NavList'
import NavButton from './NavButton'
const Nav = () => {
    return (

        <nav className='h-screen w-64 flex flex-col justify-between py-4 pr-2 sticky top-0'>
            <div className='w-11/12 space-y-3' >
                <Logo className="h-7 w-7 ml-2.5" />
                <NavList />
                <Button title='Tweet' className='rounded-full' />
            </div>
            <NavButton />
        </nav>
    );
}

export default Nav;