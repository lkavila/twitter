import { MdMoreHoriz } from 'react-icons/md'
import { Avatar } from '../../'
const NavButton = () =>
    <button className='flex flex-row items-center justify-between p-3 rounded-full hover:bg-grey-light' >
        <Avatar size='10' />
        <div className='flex flex-col items-start xl:inline-flex hidden'>
            <span className='text-sm font-bold'>
                Nombre completo
            </span>
            <span>
                @username
            </span>

        </div>

        <MdMoreHoriz size='20' className="justify-end xl:inline-flex hidden" />

    </button>

export default NavButton;