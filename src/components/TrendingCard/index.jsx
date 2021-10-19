import { Link } from 'react-router-dom'
const TrendingCard = ({ username, text, name }) =>
    <Link to='/explore'>
        <div className='p-3 w-full flex flex-col  bg-grey-aside-light hover:bg-grey-aside cursor-pointer'>
            {!name && (
                <p className='text-grey-textTwitter text-xs  max-w-full' > #Trending</p>
            )}
            <p className='text-grey-textTwitter  text-base font-black' >@{username}</p>
            <p className='text-grey-textTwitter  text-base '>{text}{name}</p>
        </div>
    </Link>
export default TrendingCard;