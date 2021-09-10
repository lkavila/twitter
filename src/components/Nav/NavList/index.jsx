import { RiHome7Line, RiHome7Fill, RiBookmarkLine, RiBookmarkFill, RiFileListLine, RiFileListFill, RiNotification2Line, RiNotification2Fill } from 'react-icons/ri'
import { HiOutlineHashtag, HiHashtag, HiOutlineMail } from 'react-icons/hi'
import { MdEmail, MdPersonOutline, MdPerson } from 'react-icons/md'
import { CgMoreO } from 'react-icons/cg'
import NavItem from '../NavItem';
const NavList = () =>
    <div className='space-y-1 flex flex-col justify-end' >
        <NavItem to='/home' title='Home' aria_label={'Home'} Icon={RiHome7Line} IconFill={RiHome7Fill} />
        <NavItem to='/explore' title='Explore' aria_label={'Explore'} Icon={HiOutlineHashtag} IconFill={HiHashtag} />
        <NavItem to='/notifications' title='Notifications' aria_label={'Notifications'} Icon={RiNotification2Line} IconFill={RiNotification2Fill} />
        <NavItem to='/messages' title='Messages' aria_label={'Messages'} Icon={HiOutlineMail} IconFill={MdEmail} />
        <NavItem to='/bookmarks' title='BookMarks' aria_label={'BookMarks'} Icon={RiBookmarkLine} IconFill={RiBookmarkFill} />
        <NavItem to='/lists' title='Lists' aria_label={'List'} Icon={RiFileListLine} IconFill={RiFileListFill} />
        <NavItem to='/username' title='Profile' aria_label={'Profile'} Icon={MdPersonOutline} IconFill={MdPerson} />
        <NavItem to='#' title='More' aria_label={'More'} Icon={CgMoreO} IconFill={CgMoreO} />
    </div>
export default NavList;