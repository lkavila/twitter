const ActionButton = (props) => {
    const { title, fill, outline, children, className, ...rest } = props

    let styles
    if (fill) {
        styles = 'bg-black text-white hover:opacity-75'
    } else if (outline) {
        styles = 'border border-grey-light hover:bg-grey-lighter'
    } else {
        styles = 'hover:bg-grey-lighter'
    }

    return (
        <button {...rest} className={`cursor-pointer rounded-full h-9 ${title ? ' px-4' : ' px-2'} font-bold ${styles} ${className}`} >
            {children}
            {title}
        </button>
    )
}
export default ActionButton