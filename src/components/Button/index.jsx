const Button = ({ title, ...rest }) =>
    <div>
        <button {...rest} className="text-white hover:text-red-500 bg-blueTwitter w-full" >
            {title}
        </button>
    </div>
export default Button;