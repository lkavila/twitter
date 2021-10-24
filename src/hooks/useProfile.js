import { useState, useEffect } from "react";
import { getUserTweets } from '../services/profileService'
import { deleteTweet } from '../services/tweetService'
import { createComment } from '../services/commentsService'
import { createLike } from '../services/likesService'


export const useProfile = () => {
    const [tweets, setTweets] = useState([])
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(false)
    const [username, setUsername] = useState('')

    useEffect(() => {
        if (username !== '') {
            setLoading(true)
            getUserTweets(username)
                .then((data) => {
                    setUser(data.user)
                    setTweets(data.userTweets.tweets)
                })
                .catch((error) => console.log(error))
            setLoading(false)
        }
    }, [username]);

    const deleteMyTweet = (tweetId, userId) => {
        deleteTweet(tweetId, userId)
            .then(data => {
                if (data) {
                    let aux = [...tweets.filter(item => item._id !== tweetId)]
                    setTweets(aux)
                }
            })
            .catch((err) => {
                console.log("err", err);
            });
    }

    const addLike = (like, _id) => {
        createLike(like, _id)
            .then(data => {
                let aux = tweets.map(function (item) {
                    if (item._id === _id) {
                        return {
                            ...item,
                            likes: item.likes + 1
                        }
                    } else
                        return item
                })
                setTweets(aux)
            })
    }
    const addComment = (text, tweetId) => {
        createComment(text, tweetId)
            .then(data => {
                let aux = tweets.map(function (item) {
                    if (item._id === tweetId) {
                        return {
                            ...item,
                            comments: [...item.comments, data]
                        }
                    } else
                        return item
                })
                setTweets(aux)
            })
    }

    return {
        tweets,
        loading,
        user,
        setUsername,
        deleteMyTweet,
        addLike,
        addComment
    }
}
