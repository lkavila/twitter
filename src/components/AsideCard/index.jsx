import { Link } from 'react-router-dom'
const AsideCard = ({ title, to, children }) =>
    <div className='bg-grey-aside-light w-full rounded-xl' >
        <div className='h-12 flex justify-center items-center' >
            <h3 className='font-black text-xl' >{title}</h3>
        </div>
        {children}
        <div className='h-12 rounded-b-xl flex justify-center items-center cursor-pointer hover:bg-grey-aside'>
            <Link to={to} className='text-sm text-blueTwitter' >Show more</Link>
        </div>
    </div>
export default AsideCard;