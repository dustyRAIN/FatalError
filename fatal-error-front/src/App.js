import './App.css';
import Header from './components/Header'
import Form from './components/Form'
import UserList from './components/UserList'
import { useEffect, useState } from 'react';

function App() {
  const [showAddForm, setShowAddForm] = useState(false)
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('/api/users/', {
      method: 'GET',
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }).then(
      (userResponse) => userResponse.json()).then(
        data => {
          setUsers(data.users)
    })
  }, [])

  const addUserClickHandler = () => {
    setShowAddForm(!showAddForm)
  }

  const userEditClickHandler = (id) => {
    setUsers(users.map(
      (user) => 
        user.id === id ? {...user, editMode: !user.editMode} : user
    ))
  }

  const editFormSubmitHandler = async (userInfo) => {
    const response = await fetch(`/api/users/${userInfo.id}`, {
      method: 'PUT',
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(userInfo)
    })
    if(response.ok) {
      console.log('ok');
      setUsers(users.map(
        (user) => 
          user.id === userInfo.id ? userInfo : user
      ))
      userEditClickHandler(userInfo.id);
    } else {
      alert(response.status);
    }
  }

  const addUserFormSubmitHandler = async (userInfo) => {
    userInfo.deleted = false;
    const response = await fetch(`/api/users/`, {
      method: 'POST',
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(userInfo)
    })
    if(response.ok) {
      const data = await response.json()
      data.editMode = false;
      setUsers([...users, data])
      addUserClickHandler();
    } else {
      alert(response.status);
    }
  }

  const deleteUserHandler = async (id) => {
    const response = await fetch(`/api/users/${id}`, {
      method: 'DELETE',
      headers : { 
        'Accept': 'application/json'
      }
    })
    if(response.ok) {
      setUsers(users.map(
        (user) => 
          user.id === id ? {...user, deleted: !user.deleted} : user
      ))
    } else {
      alert(response.status);
    }   
  }

  return (
    <div className="container">
      <Header name='Dashboard' showForm={showAddForm} buttonClickHandler={addUserClickHandler}/>
      {showAddForm && <Form onFormSubmit = {addUserFormSubmitHandler} user = {{
        firstName: '',
        lastName: '',
        email: '',
        mobile: '',
      }} />}
      <UserList 
        users={users} 
        onClickUserEdit = {userEditClickHandler}
        onFormSubmit = {editFormSubmitHandler}
        onDelete = {deleteUserHandler} />
    </div>
  );
}

export default App;
