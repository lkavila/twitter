import { Link, useHistory } from 'react-router-dom'

const NavItem = (props) => {
    const { to, Icon, IconFill, title, aria_label } = props;
    let history = useHistory();
    return (
        <Link
            to={to}
            aria_label={aria_label}
            className={`flex items-center h-12 px-3 xl:px-0 max-w-max xl:w-auto rounded-full hover:bg-grey-light text-lg ${history.location.pathname === to ? 'text-blueTwitter font-bold' : 'text-black font-medium'}`}>
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
        </Link>
    )
}
export default NavItem