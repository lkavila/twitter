import { SearchBar, AsideCard, TrendingCard, FooterNav } from '../'
//flex lg:inline-flex hidden
const TrendingsBar = () => {
    return (
        <aside className='w-full px-4 pb-24 container space-y-3 sticky top-0'>
                <div className='sticky top-0'>
                    <SearchBar />
                </div>
                <div className='space-y-3 '>
                    <section>
                        <AsideCard title='What’s happening'>
                            <TrendingCard />
                            <TrendingCard />
                            <TrendingCard />
                            <TrendingCard />
                            <TrendingCard />
                            <TrendingCard />
                            <TrendingCard />
                            <TrendingCard />
                        </AsideCard>
                    </section>
                    <section>
                        <AsideCard title='Who to follow'>
                            <TrendingCard />
                            <TrendingCard />
                            <TrendingCard />
                            <TrendingCard />
                        </AsideCard>
                    </section>
                    <FooterNav />
                </div>
        </aside>
    );
}

export default TrendingsBar;