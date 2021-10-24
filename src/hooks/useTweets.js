import { useEffect, useState } from 'react'
import { getTweets, createTweet, deleteTweet } from '../services/tweetService'
import { createComment } from '../services/commentsService'
import { createLike } from '../services/likesService'

export const useTweets = () => {
    const [tweets, setTweets] = useState([])
    const [loadingT, setLoadingT] = useState(false)

    const listTweets = () => {
        setLoadingT(true);
        setTimeout(async () => {
            const response = await getTweets();
            setTweets(response.data);
            setLoadingT(false);
        }, 200);
    }
    useEffect(() => {
        listTweets();
    }, []);


    const addTweet = (content) => {
        createTweet(content)
            .then(data => {
                if (data.user) {
                    const user = JSON.parse(localStorage.getItem('user'))
                    console.log(user)
                    const tweetUser = {
                        ...data,
                        user: { name: user.name, username: user.username }
                    }
                    let aux = [tweetUser, ...tweets]
                    setTweets(aux)
                } else {
                    console.log(data)
                }

            })
            .catch((err) => {
                console.log("err", err);
            });
    }

    const deleteMyTweet = (tweetId, userId) => {
        deleteTweet(tweetId, userId)
            .then(data => {
                console.log(data)
                listTweets()

            })
            .catch((err) => {
                console.log("err", err);
            });
    }

    return {
        loadingT,
        tweets,
        addTweet,
        createComment,
        createLike,
        deleteMyTweet
    }
}