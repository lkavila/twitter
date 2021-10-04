import { useContext } from 'react';
import { MdMoreHoriz } from 'react-icons/md'
import { Avatar } from '../../'
import { AuthContext } from "../../../context/AuthContext";
import { useHistory } from "react-router";

const NavButton = () => {
    const { user, logout } = useContext(AuthContext);
    const history = useHistory();
    const handleLogOut = () => {
        logout();
        history.push("/");
    }
    return (

        <button className='min-w-max flex flex-row items-center justify-between p-3 rounded-full hover:bg-grey-light' onClick={handleLogOut}>
            <Avatar size='10' />
            <div className='xl:flex flex-col items-start hidden'>
                <span className='text-sm font-bold'>
                    {user.name}
                </span>
                <span>
                    @{user.username}
                </span>

            </div>
            <div className=''>
                <MdMoreHoriz size='20' className="justify-end xl:inline-flex hidden" />
            </div>
        </button>
    )
}

export default NavButton;