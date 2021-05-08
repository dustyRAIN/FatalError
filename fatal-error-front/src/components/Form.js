import { useState } from "react"

const Form = ({onFormSubmit, user}) => {

    const [firstName, setFirstName] = useState(user.firstName);
    const [lastName, setLastName] = useState(user.lastName);
    const [email, setEmail] = useState(user.email);
    const [mobile, setMobile] = useState(user.mobile);

    const onSubmit = (e) => {
        e.preventDefault()

        if(!firstName) {
            alert('Please add first name')
            return
        }

        if(!email) {
            alert('Please enter email')
            return
        }

        user.firstName = firstName;
        user.lastName = lastName;
        user.email = email;
        user.mobile = mobile;
        onFormSubmit(user);
    }

    return (
        <form className='form-user' onSubmit={onSubmit}>
            <div className='form-div'>
                <label>First name</label>
                <input type='text' placeholder='Enter firstname' value={firstName} onChange={(e) =>
                    setFirstName(e.target.value)                
                }/>
            </div>
            <div className='form-div'>
                <label>Last name</label>
                <input type='text' placeholder='Enter lastname' value={lastName} onChange={(e) => 
                    setLastName(e.target.value)
                }/>
            </div>
            <div className='form-div'>
                <label>Email</label>
                <input type='text' placeholder='Enter email address' value={email} onChange={(e) => 
                    setEmail(e.target.value)
                }/>
            </div>
            <div className='form-div'>
                <label>Mobile No.</label>
                <input type='text' placeholder='Enter mobile number' value={mobile} onChange={(e) => 
                    setMobile(e.target.value)
                }/>
            </div>
            <input type='submit' value='Save'/>
        </form>
    )
}

export default Form