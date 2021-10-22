import { Avatar, Modal, TweetInput } from '../'
const ReplayModal = (props) => {
    const { user, createdAt, content, image = null, open, setOpen, createComment, _id } = props
    const { name, username } = user;
    return (
        <>
            <Modal open={open} setOpen={setOpen}>
                <div name="tweet-container" className="container mx-auto flex flex-row px-2 py-2 max-w-screen-sm cursor-pointer">
                    <div name="avatar" className="min-w-max w-16 mr-2">
                        <Avatar />
                    </div>
                    <div name="tweet" className='max-w-full'>
                        <p className="text-sm text-grey-textTwitter">
                            <strong className="text-black">
                                {name}
                            </strong>
                            @{username}
                            <span className="mb-4 text-md">.</span>
                            {createdAt}
                        </p>
                        <div name="contenido-tweet">
                            <article className="text-sm text-grey-contentTwitter mb-2.5">
                                {content}
                            </article>

                            {(image) ?
                                <div name="media">
                                    <img alt="media-tweet" src={image} className="rounded-2xl border-grey border" />
                                </div>
                                : null}
                        </div>
                        <p>Replying to <span className='text-blueTwitter'>@{username}</span></p>
                    </div>
                </div>
                <TweetInput placeholder='Tweet your reply' createComment={createComment} _id={_id} />
            </Modal>
        </>
    )
}
export default ReplayModal