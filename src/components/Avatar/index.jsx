import UserImg from "../../assets/img/default-user-image.png"
const Avatar =({alt, ...rest})=> 
<img src={UserImg} alt={alt} style={{ width: '50px', height: '50px' }} {...rest}/>
export default Avatar;