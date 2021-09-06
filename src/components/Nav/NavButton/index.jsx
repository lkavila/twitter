import { MdMoreHoriz } from 'react-icons/md'
import { Avatar } from '../../'
const NavButton = () =>
    <button className='min-w-max flex flex-row items-center justify-between p-3 rounded-full hover:bg-grey-light' >
        <Avatar size='10' />
        <div className='xl:flex flex-col items-start hidden'>
            <span className='text-sm font-bold'>
                Nombre completo
            </span>
            <span>
                @username
            </span>

        </div>
        <div className=''>
            <MdMoreHoriz size='20' className="justify-end xl:inline-flex hidden" />
        </div>
    </button>

export default NavButton;