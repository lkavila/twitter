import { MdMoreHoriz } from 'react-icons/md'
import { Avatar } from '../../'
const NavButton = () =>
    <button className='flex items-center justify-between p-3 rounded-full hover:bg-grey-light' >
        <Avatar size='10'/>
        <div className='flex flex-col items-start'>
            <span className='text-sm font-bold'>
                Nombre completo
            </span>
            <span>
                @username
            </span>
        </div>
        <MdMoreHoriz size='20' />
    </button>

export default NavButton;