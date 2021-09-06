import { SearchBar, AsideCard, TrendingCard, FooterNav } from '../'

const TrendingsBar = () => {
    return (
        <aside className='w-5/12 max-w-sm px-4 flex lg:inline-flex hidden'>
            <div className='container sticky -top-3/4 space-y-3'>
                <section className='sticky top-0'>
                    <SearchBar />
                </section>
                <div className='space-y-3 '>
                    <section>
                        <AsideCard title='What’s happening'>
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
            </div>
        </aside>
    );
}

export default TrendingsBar;