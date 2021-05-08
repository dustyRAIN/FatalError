import User from './User'

const UserList = ({users, onClickUserEdit, onFormSubmit, onDelete}) => {
    return (
        <>
            {users.map(
                (user) => <User 
                            key={user.id} 
                            user={user} 
                            onClickUserEdit = {onClickUserEdit}
                            onFormSubmit = {onFormSubmit}
                            onDelete = {onDelete} />
            )}
        </>
    )
}

export default UserList