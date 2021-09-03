const Button = ({ title, ...rest }) =>
    <div>
        <button {...rest}>
            {title}
        </button>
    </div>
export default Button;