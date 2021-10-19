import { useEffect, useState } from 'react'
import { getTrending } from '../services/trendingService'

export const useExplore = () => {
    const [explore, setExplore] = useState([])
    const [loading, setLoading] = useState(false)
    const [username, setUsername] = useState('Huawei')

    const listTrendings = () => {
        setLoading(true);
        setTimeout(async () => {
            const response = await getTrending(username);
            setExplore(response);
            setLoading(false);
        }, 2000);
    }
    useEffect(() => {
        listTrendings()
    }, [username]);


    return {
        explore,
        loading,
        username,
        setUsername,
    }
}