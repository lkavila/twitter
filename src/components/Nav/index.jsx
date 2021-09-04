import { Logo, Button } from '../'
import NavList from './NavList'
import NavButton from './NavButton'
const Nav = () => {
    return (

        <nav className='h-screen w-64 flex flex-col justify-between py-4'>
            <div className='w-5/6 space-y-3' >
                <Logo className="h-7 w-7 ml-2.5" />
                <NavList />
                <Button title='Tweet' className='rounded-full' />
            </div>
            <NavButton />
        </nav>
    );
}

export default Nav;