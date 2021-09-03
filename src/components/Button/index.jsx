const Button = (props) => {
    const { title, primary, secondary, to, white, ...rest } = props
    let styles;
    
    if (white) {
        styles = "text-blueTwitter bg-white border border-blueTwitter hover:border-grey  hover:text-grey"
    }else if( secondary){
        styles = "text-white bg-grey hover:bg-grey-light"
    }else{
        styles = "text-white bg-blueTwitter hover:bg-blueTwitter-light"
    }
    return (

        <div>
            <button className={`font-bold w-full h-12 rounded-md ${styles}`}  {...rest}>
                {title}
            </button>
        </div>
    )
}
export default Button;