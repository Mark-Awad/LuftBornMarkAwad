import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'


function Home() {
    const navigate  = useNavigate();
    const [data,setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    
  const handleDelete=(id) =>{
    const confirm = window.confirm("Press Ok to Delete");
    if(confirm){
        axios.delete(`https://localhost:7199/User/DeleteUser/${id}`)
        .then(res =>{
            location.reload();
        }).catch(err => console.log(err));
    }
  }
    useEffect(()=>{
            axios.get('https://localhost:7199/User/GetAllUsers')
            .then(res => {
                setData(res.data);
                setLoading(false);
            })
            .catch(err => console.log(err));
    },[]);
    if (loading) {
        return <div>Loading...</div>;
      }
    
      if (error) {
        return <div>Error: {error}</div>;
      }
  return (
    <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-100'>
        <h1>List of Users</h1>
        <div className='w-100 rounded bg-white border shadow p-4'>
            <div className='d-flex justify-content-end'>
                <Link to="/create" className='btn btn-success'>Add +</Link>
            </div>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>username</th>
                        <th>passwordHash</th>
                        <th>fullname</th>
                        <th>phone</th>
                        <th>email</th>
                        <th>role</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((d,i) => (
                            <tr key={i}>
                                <td>{d.id}</td>
                                <td>{d.username}</td>
                                <td>{d.passwordHash}</td>
                                <td>{d.fullname}</td>
                                <td>{d.phone}</td>
                                <td>{d.email}</td>
                                <td>{d.role.roleName}</td>
                                <td>
                                <Link to={`/read/${d.id}`}  className='btn btn-sm btn-primary me-2'>Read</Link>
                                <Link to={`/update/${d.id}`} className='btn btn-sm btn-primary me-2'>Edit</Link>
                                    <button onClick={e =>handleDelete(d.id)} className='btn btn-sm btn-danger'>Delete</button>
                                    
                                    </td>
                            </tr>
                        ))
                    }
                </tbody>


            </table>


        </div>
        
        </div>
  )


}

export default Home