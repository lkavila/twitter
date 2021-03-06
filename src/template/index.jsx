import { useContext } from 'react';
import { AuthContext } from "../context/AuthContext";
import { Nav } from '../components'
const Template = ({ content, aside }) => {

    const { user, logout } = useContext(AuthContext);
    return (
        <div className='flex sm:justify-center'>
            <div className='xl:w-64 w-auto sticky top-0 flex  justify-end '>
                <Nav user={user} logout={logout} />
            </div>
            <div className='w-104 sticky' >
                {content}
            </div>
            <div className='w-96 lg:flex hidden' >
                {aside}
            </div>
        </div>)
}
export default Template;