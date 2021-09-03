const Input = (props) => {
    const { type, id, name, title, ...rest } = props;

    return (
        <div className='space-y-2 '>
            <label htmlFor={id} className='text-black-light text-base font-normal'>
                {title}
            </label>
                <input
                    type={type}
                    id={id}
                    name={name}
                    placeholder={title}
                    {...rest}
                    className='w-full h-12 p-5 text-black rounded-md border border-grey focus:outline-none focus:ring-2 focus:ring-blueTwitter focus:border-transparent'
                />
        </div>
    )
}

export default Input;