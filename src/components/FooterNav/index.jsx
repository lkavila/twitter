import { Link } from "react-router-dom"

const Item = ({ children, to }) => <Link to={to} className='hover:underline '>{children}</Link>


const FooterNav = () =>
    <div>
        <nav aria-label="Footer" role="navigation" className='flex flex-col text-sm text-grey-textTwitter'>
            <div className= 'space-x-3'>

                <Item to='#'>Terms of Service</Item>
                <Item to='#'>Privacy Policy</Item>
                <Item to='#'>Cookie Policy</Item>
            </div>
            <div className= 'space-x-3'>

                <Item to='#'>Ads info</Item>
                <Item to='#'>More</Item>
                <Item to='#'>© 2021 Twitter, Inc.</Item>
            </div>
        </nav>
    </div>
export default FooterNav;