import { useEffect, useState } from 'react'
import { getTrending } from '../services/trendingService'

const randomUsers = ["NoticiasCNN_Es", 'FoxNews', 'zonacero', 'CanalTelecaribe', 'Cristiano']

export const useTrending = () => {
    const [trendings, setTrendings] = useState([])
    const [loading, setLoading] = useState(false)
    const [username, setUsername] = useState(true)

    const listTrendings = () => {
        setLoading(true);
        setTimeout(async () => {
            let aux = [];
            for (let index = 0; index < randomUsers.length; index++) {
                const response = await getTrending(randomUsers[index]);
                aux.push({ ...Object.values(response)[0], username: randomUsers[index] })
            }
            setTrendings([...aux]);
            setLoading(false);
        }, 500);
    }
    useEffect(() => {
        if (username) {
            listTrendings()
            setUsername(false)
        }
    }, [username]);


    return {
        trendings,
        loading
    }
}