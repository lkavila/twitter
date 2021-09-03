const Input = (props) => {
    const { type, id, name, title, label, ...rest } = props;

    return (
        <div>
            <label for={id}>
                {label}
                <input
                    type={type}
                    id={id}
                    name={name}
                    placeholder={title}
                    {...rest}
                />
            </label>
        </div>
    )
}

export default Input;