import UserImg from "../../assets/img/default-user-image.png"
const Avatar = ({ alt = 'avatar', size = '12', ...rest }) =>
    <img src={UserImg} alt={alt}  {...rest} className={`rounded-full h-${size} w-${size} min-w-max flex items-center justify-center hover:filter hover:brightness-75`} />
export default Avatar;