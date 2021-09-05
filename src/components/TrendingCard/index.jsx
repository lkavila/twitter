import { Link } from 'react-router-dom'
const TrendingCard = () =>
    <Link to='#'>
        <div className='p-3 w-full flex flex-col  bg-grey-aside-light hover:bg-grey-aside cursor-pointer'>
            <p className='text-grey-textTwitter text-xs  max-w-full' > #Trending</p>
            <p className='text-grey-textTwitter  text-base font-black' > Jessica Jones</p>
            <p className='text-grey-textTwitter  text-base ' > 430K Tweets</p>
        </div>
    </Link>
export default TrendingCard;