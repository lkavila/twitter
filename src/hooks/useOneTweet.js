import { useEffect, useState } from 'react'
import { getTweet } from '../services/oneTweetService'
import { createComment } from '../services/commentsService'
import { createLike } from '../services/likesService'
export const useOneTweet = () => {

    const [_id, set_id] = useState("");
    const [data, setData] = useState(true);
    const [tweet, setTweet] = useState({});
    const [comments, setComments] = useState([]);
    const [likes, setLikes] = useState(0);
    const [loadingT, setLoadingT] = useState(false)

    const getOneTweet = async (_id) => {
        setLoadingT(true);
        const response = await getTweet(_id);
        setLoadingT(false);
        return response;
    }

    useEffect(() => {
        if (data && _id !== '') {
            setData(false)
            getOneTweet(_id)
                .then((data) => {
                    setTweet(data.tweet)
                    let aux = [...data.tweet.comments]
                    setComments(aux.reverse())
                    setLikes(data.tweet.likes)
                })
                .catch((erro) => {
                    console.log(erro)
                })
        }
    }, [_id, tweet, data])

    const addComment = (content, _id) => {
        createComment(content, _id)
            .then(data => {
                if (data.user) {
                    const user = JSON.parse(localStorage.getItem('user'))
                    const tweetUser = {
                        ...data,
                        user: { name: user.name, username: user.username }
                    }
                    let aux = [tweetUser, ...comments]
                    setComments(aux)
                } else {
                    console.log(data)
                }

            })
            .catch((err) => {
                console.log("err", err);
            });
    }

    const addLike = (like, tweetId) => {
        createLike(like, tweetId)
            .then(response => {
                setLikes(likes + 1)
            })
            .catch((err) => {
                console.log("err", err);
            });
    }

    return {
        loadingT,
        tweet,
        comments,
        addComment,
        set_id,
        likes,
        addLike
    }
}