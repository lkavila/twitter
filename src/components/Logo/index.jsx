import LogoTwitterBlue from "../../assets/img/twitter-blue.svg"
import LogoTwitterWhite from "../../assets/img/twitter-white.svg"
const Logo =({className="w-11 h-11", white})=> 
<img src={white ? LogoTwitterWhite : LogoTwitterBlue} alt='Logo de twitter' className={className} />
export default Logo;