const Form = ({ children, ...rest }) =>
    <form className='space-y-2 ' {...rest}>
        {children}
    </form>
export default Form;