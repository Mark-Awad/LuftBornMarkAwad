import React, { useEffect, useState } from 'react'
import axios from 'axios'; // Don't forget to import axios
import { Link, useNavigate, useParams } from 'react-router-dom'


function Update() {
    const [values, setValues] = useState({
        username: '',
        passwordHash: '',
        fullname: '',
        phone: '',
        email: '',
        roleID: ''
    });
    
    const navigate  = useNavigate();
    // const [data,setData] = useState([]);
    const {id} = useParams();
    const handleRoleChange = (event) => {
  setValues({ ...values, roleID: event.target.value });
                            };
    useEffect(()=>{
        axios.get(`https://localhost:7199/User/GetUserById?userId=${id}`)
            .then(res => setValues(res.data))
            .catch(err => console.log(err));
    },[]);

const handleUpdate =(event) =>{
    event.preventDefault();
    axios.put(`https://localhost:7199/User/UpdateUser?id=${id}`,values)
            .then(res => {
                console.log(res);
                navigate('/');
            })
            .catch(err => console.log(err));
}
  return (
<div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
            <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
                <h1>Update User</h1>
                 <form onSubmit={ handleUpdate }> 

                    <div className='mb-2'>
                        <label htmlFor="username">Username:</label>
                        <input type='text' name='username' className='form-control' placeholder='Enter Username' value={values.username}
                               onChange={e => setValues({...values, username: e.target.value})}/>
                    </div>

                    <div className='mb-2'>
                        <label htmlFor="passwordHash">Password:</label>
                        <input type='text' name='passwordHash' className='form-control' placeholder='Enter Password' value={values.passwordHash}
                               onChange={e => setValues({...values, passwordHash: e.target.value})}/>
                    </div>

                    <div className='mb-2'>
                        <label htmlFor="fullname">Fullname:</label>
                        <input type='text' name='fullname' className='form-control' placeholder='Enter Fullname' value={values.fullname}
                               onChange={e => setValues({...values, fullname: e.target.value})}/>
                    </div>

                    <div className='mb-2'>
                        <label htmlFor="phone">Phone:</label>
                        <input type='text' name='phone' className='form-control' placeholder='Enter Phone' value={values.phone}
                               onChange={e => setValues({...values, phone: e.target.value})}/>
                    </div>

                    <div className='mb-2'>
                        <label htmlFor="email">Email:</label>
                        <input type='email' name='email' className='form-control' placeholder='Enter Email' value={values.email}
                               onChange={e => setValues({...values, email: e.target.value})}/>
                    </div>

                    <div className='mb-3'>
                        <label htmlFor="roleID">Role:</label>
                        <select name='roleID' className='form-control' value={values.roleID} onChange={handleRoleChange}>
                            <option value='values.roleId'>{values.role && values.role.roleName}</option>
                            <option value='4'>Admin</option>
                            <option value='6'>User</option>
                        </select>
                    </div>

                    <button type="submit" className='btn btn-success'>Update</button>
                    <Link to="/" className='btn btn-primary ms-3'>Back</Link>

                </form>
            </div>
        </div>
  )
}

export default Update