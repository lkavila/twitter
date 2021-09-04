import { Link, useHistory } from 'react-router-dom'

const NavItem = (props) => {
    const { to, Icon, IconFill, title } = props;
    let history = useHistory();
    return (
        <li>
            <Link to={to} >
                <button className={`flex items-center h-12 rounded-full hover:bg-grey-light text-lg ${history.location.pathname === to ? 'text-blueTwitter font-bold' : 'text-black font-medium'}`}>
                    <div className='p-2.5 pr-0'>
                        {history.location.pathname === to ?
                            (
                                <IconFill size={25} />
                            ) :
                            (
                                <Icon size={25} />
                            )}

                    </div>
                    <span className='pl-5 pr-7'>
                        {title}
                    </span>
                </button>
            </Link>
        </li>
    )
}
export default NavItem