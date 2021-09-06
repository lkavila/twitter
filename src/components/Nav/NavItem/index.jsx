import { Link, useHistory } from 'react-router-dom'

const NavItem = (props) => {
    const { to, Icon, IconFill, title } = props;
    let history = useHistory();
    return (
        <Link to={to} className='w-12' >
            <button className={`flex  justify-center  items-center h-12 w-12 xl:w-auto rounded-full hover:bg-grey-light text-lg ${history.location.pathname === to ? 'text-blueTwitter font-bold' : 'text-black font-medium'}`}>
                <div className='xl:p-2.5 xl:pr-0'>
                    {history.location.pathname === to ?
                        (
                            <IconFill size={25} />
                        ) :
                        (
                            <Icon size={25} />
                        )}

                </div>
                <span className='pl-5 pr-7 xl:flex hidden'>
                    {title}
                </span>
            </button>
        </Link>
    )
}
export default NavItem