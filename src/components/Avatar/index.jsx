import UserImg from "../../assets/img/default-user-image.png"
const Avatar = (props) => {
    const { alt = 'avatar', size = '12', className, ...rest } = props
    return (
        <img src={UserImg} alt={alt}  {...rest} className={`rounded-full h-${size} w-${size} flex items-center justify-center hover:filter hover:brightness-75 ${className} `} />
    )
}
export default Avatar;