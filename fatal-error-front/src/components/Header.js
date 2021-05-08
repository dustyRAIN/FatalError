import Button from './Button'

const Header = ({name, showForm, buttonClickHandler}) => {
    return (
        <div style={{textAlign: 'center', display:'flex', alignItems: 'center',
        justifyContent: 'center'}}>
            <h1 style={{float: 'left', paddingRight: '50px'}}>{name}</h1>
            <Button 
                style={{float: 'right', marginTop: '100px'}} 
                name={showForm ? 'Close' : 'Add'} 
                color={showForm ? '#D43790' : '#2883cc'} 
                buttonClickHandler={buttonClickHandler}></Button>
        </div>
    )
}

export default Header