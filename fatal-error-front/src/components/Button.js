const Button = ({name, color, buttonClickHandler, id}) => {
    return (
        <button className='Button' onClick={() => buttonClickHandler(id)} style={{
            backgroundColor: color
        }}>{name}</button>
    )
}

Button.defaultProps = {
    name: 'click',
    color: 'green'
}

export default Button