import { RiHome7Line, RiHome7Fill, RiBookmarkLine, RiBookmarkFill, RiFileListLine, RiFileListFill, RiNotification2Line, RiNotification2Fill } from 'react-icons/ri'
import { HiOutlineHashtag, HiHashtag, HiOutlineMail } from 'react-icons/hi'
import { MdEmail, MdPersonOutline, MdPerson } from 'react-icons/md'
import { CgMoreO } from 'react-icons/cg'
import NavItem from '../NavItem';
const NavList = () =>
    <ul className='space-y-1' >
        <NavItem to='/home' title='Home' Icon={RiHome7Line} IconFill={RiHome7Fill} />
        <NavItem to='/explore' title='Explore' Icon={HiOutlineHashtag} IconFill={HiHashtag} />
        <NavItem to='#' title='Notifications' Icon={RiNotification2Line} IconFill={RiNotification2Fill} />
        <NavItem to='#' title='Messages' Icon={HiOutlineMail} IconFill={MdEmail} />
        <NavItem to='#' title='BookMarks' Icon={RiBookmarkLine} IconFill={RiBookmarkFill} />
        <NavItem to='#' title='Lists' Icon={RiFileListLine} IconFill={RiFileListFill} />
        <NavItem to='/profile' title='Profile' Icon={MdPersonOutline} IconFill={MdPerson} />
        <NavItem to='#' title='More' Icon={CgMoreO} IconFill={CgMoreO} />
    </ul>
export default NavList;