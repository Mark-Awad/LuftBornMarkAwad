import React from 'react'
import { useParams } from 'react-router-dom';
import  { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';

function Read() {

    const [data,setData] = useState([]);
    const {id} = useParams();
    useEffect(()=>{
        axios.get(`https://localhost:7199/User/GetUserById?userId=${id}`)
            .then(res => setData(res.data))
            .catch(err => console.log(err));
    },[]);

  return (
    <div className='d-flex w-100 justify-content-center align-items-center bg-light vh-100'>
                <div className='w-50 rounded bg-white border shadow p-4 rounded'>
                    <h3>Detail of User</h3>
                    <div className='mb-2'>
                        <strong>Username: {data.username}</strong>
                    </div>

                    <div className='mb-2'>
                        <strong>Password: {data.passwordHash}</strong>
                    </div>
                    <div className='mb-2'>
                        <strong>FullName: {data.fullname}</strong>
                    </div>

                    <div className='mb-2'>
                        <strong>Phone: {data.phone}</strong>
                    </div>
                    <div className='mb-2'>
                        <strong>Email: {data.email}</strong>
                    </div>

                    {/* <div className='mb-2'>
                        <strong>Name: {data.role.roleName}</strong>
                    </div> */}
                    <div className='mb-2'>
                    <strong>Role: {data.role && data.role.roleName}</strong>
                    </div>
                    <Link to={`/update/${data.id}`} className='btn btn-success'>Edit</Link>
                    <Link to="/" className='btn btn-primary ms-3'>Back</Link>
                </div>
     </div>
  )
}

export default Read