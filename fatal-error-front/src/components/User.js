import Button from './Button'
import Form from './Form'

const User = ({user, onClickUserEdit, onFormSubmit, onDelete}) => {
    return (
        <div className='user-container'>
            <div className='user-details'>
                <h5 className={user.deleted ? 'strike-text' : ''}>
                    {user.firstName} {user.lastName}</h5>
                <p className={user.deleted ? 'strike-text' : ''}>
                    {user.email}</p>
                <p className={user.deleted ? 'strike-text' : ''}>
                    {user.mobile}</p>
            </div>
            <div className='user-buttons'>
            <Button 
                name={user.deleted ? 'Restore' : 'Delete'} 
                color={user.deleted ? '#59981A' : '#D43790'}
                buttonClickHandler = {() => onDelete(user.id)} /> 
            <Button 
                buttonClickHandler = {() => onClickUserEdit(user.id)}
                name={user.editMode ? 'Close' : 'Edit'} 
                color={user.editMode ? '#67595E' : '#2883cc'} /> 
                
            </div>
            {user.editMode && <Form 
                user={user}
                firstNameProp={user.firstName} 
                lastNameProp={user.lastName} 
                emailProp={user.email} 
                mobileProp={user.mobile}
                onFormSubmit={onFormSubmit} 
                id = {user.id} />}
        </div>
    )
}

export default User