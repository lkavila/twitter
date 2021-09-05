import { RiSearch2Line } from 'react-icons/ri'
const SearchBar = ({ ...rest }) =>
    <div className=' py-1 bg-white' >
        <form aria-label="Search Twitter" role="search">

            <div
                className='w-full h-12 text-black-light rounded-full bg-grey-aside border border-white focus-within:border-blueTwitter focus-within:bg-white focus-within:text-blueTwitter'
            >

                <label className='h-full w-full px-4 flex items-center  space-x-6 rounded-full' htmlFor='searchBar' >
                    <div>
                        <RiSearch2Line size='20' />
                    </div>
                    <input
                        type='text'
                        id='searchBar'
                        name='searchBar'
                        placeholder='Search Twitter'
                        {...rest}
                        className='text-black  h-full rounded-r-full focus:outline-none bg-grey-aside focus:bg-white'
                    />
                </label>
            </div>
        </form>
    </div>
export default SearchBar;