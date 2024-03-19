import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; // Don't forget to import axios

function Create() {
    const [values, setValues] = useState({
        username: '',
        passwordHash: '',
        fullname: '',
        phone: '',
        email: '',
        roleID: ''
    });

    const handleRoleChange = e => {
        setValues({...values, roleID: e.target.value});
    };

    const navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault();
        axios.post('https://localhost:7199/User/CreateUser', values)
            .then(res => {
                console.log(res);
                navigate('/');
            })
            .catch(err => console.log(err));
    };

    return (
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
            <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
                <h1>Add a User</h1>
                <form onSubmit={handleSubmit}>

                    <div className='mb-2'>
                        <label htmlFor="username">Username:</label>
                        <input type='text' name='username' className='form-control' placeholder='Enter Username'
                               onChange={e => setValues({...values, username: e.target.value})}/>
                    </div>

                    <div className='mb-2'>
                        <label htmlFor="passwordHash">Password:</label>
                        <input type='text' name='passwordHash' className='form-control' placeholder='Enter Password'
                               onChange={e => setValues({...values, passwordHash: e.target.value})}/>
                    </div>

                    <div className='mb-2'>
                        <label htmlFor="fullname">Fullname:</label>
                        <input type='text' name='fullname' className='form-control' placeholder='Enter Fullname'
                               onChange={e => setValues({...values, fullname: e.target.value})}/>
                    </div>

                    <div className='mb-2'>
                        <label htmlFor="phone">Phone:</label>
                        <input type='text' name='phone' className='form-control' placeholder='Enter Phone'
                               onChange={e => setValues({...values, phone: e.target.value})}/>
                    </div>

                    <div className='mb-2'>
                        <label htmlFor="email">Email:</label>
                        <input type='email' name='email' className='form-control' placeholder='Enter Email'
                               onChange={e => setValues({...values, email: e.target.value})}/>
                    </div>

                    <div className='mb-3'>
                        <label htmlFor="roleID">Role:</label>
                        <select name='roleID' className='form-control' value={values.roleID} onChange={handleRoleChange}>
                            <option value=''>Select Role</option>
                            <option value='4'>Admin</option>
                            <option value='6'>User</option>
                        </select>
                    </div>

                    <button type="submit" className='btn btn-success'>Submit</button>
                    <Link to="/" className='btn btn-primary ms-3'>Back</Link>

                </form>
            </div>
        </div>
    );
}

export default Create;
