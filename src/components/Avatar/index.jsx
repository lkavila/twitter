import UserImg from "../../assets/img/default-user-image.png"
const Avatar = ({ alt, size = '12', ...rest }) =>
    <img src={UserImg} alt={alt}  {...rest} className={`rounded-full h-${size} w-${size} flex items-center justify-center hover:filter hover:brightness-75`} />
export default Avatar;