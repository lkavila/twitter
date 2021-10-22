import { SearchBar, AsideCard, TrendingCard, FooterNav, Spinner } from '../'
import { useTrending } from '../../hooks/useTrending'
import { useUsersList } from '../../hooks/useUserList'
//flex lg:inline-flex hidden
const TrendingsBar = ({ sticky = 'sticky' }) => {
    const { trendings, loading } = useTrending()
    const { loadingU, usersList } = useUsersList()
    return (
        <aside className={`w-full px-4 pb-24 container space-y-3 ${sticky}`}>
            <div className={`${sticky} top-0`}>
                <SearchBar />
            </div>
            <div className='space-y-3 '>
                <section>
                    <AsideCard title='What’s happening'>
                        {
                            loading ?
                                (
                                    <Spinner size={8} />
                                ) :
                                (
                                    trendings?.map((item, index) =>
                                        <TrendingCard key={index} username={item?.username} text={item?.text} />
                                    )
                                )
                        }
                    </AsideCard>
                </section>
                <section>
                    <AsideCard title='Who to follow'>
                        {
                            loadingU ?
                                (
                                    <Spinner size={8} />
                                ) :
                                (
                                    usersList?.filter(u => u.name !== 'Administrator').map((item, index) =>
                                        <TrendingCard key={index} username={item.username} name={item.name} />
                                    )
                                )
                        }
                    </AsideCard>
                </section>
                <FooterNav />
            </div>
        </aside>
    );
}

export default TrendingsBar;