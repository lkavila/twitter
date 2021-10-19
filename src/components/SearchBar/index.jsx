import { RiSearch2Line } from 'react-icons/ri'
import { useHistory } from "react-router-dom";
const SearchBar = ({ ...rest }) => {
    const history = useHistory();
    return (
        <div className=' py-1 bg-white' >
            <form aria-label="Search Twitter" role="search" onSubmit={(event) => event.preventDefault()}>

                <div
                    className='w-full h-12 text-black-light rounded-full bg-grey-aside border border-white focus-within:border-blueTwitter focus-within:bg-white focus-within:text-blueTwitter'
                >

                    <label className='h-full w-full pl-4 flex items-center  space-x-6 rounded-full' htmlFor='searchBar' >
                        <div>
                            <RiSearch2Line size='20' />
                        </div>
                        <input
                            type='text'
                            id='searchBar'
                            name='search'
                            placeholder='Search Twitter'
                            className='text-black px-4 h-full w-full rounded-r-full focus:outline-none bg-grey-aside focus:bg-white'
                            {...rest}
                            onKeyPress={(e) => { e.key === 'Enter' && history.push(`/explore?=${e.target.value}`); }}
                        />
                    </label>
                </div>
            </form>
        </div>
    )
}
export default SearchBar;