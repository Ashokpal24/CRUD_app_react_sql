import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Axios from 'axios'
function Viewdata() {
    const [employeeList, setemployeeList] = useState([]);
    const getData = () => {
        Axios.get("http://localhost:3000/employees").then((response) => { setemployeeList(response.data) });
    }
    getData();
    const DeleteItem=(value)=>{
        Axios.delete(`http://localhost:3000/delete/${value}`).then((response)=>{console.log(value)});
    }
    return (
        <div className='container font-weight-bold mt-5'>
            <table className="table mt-5">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Age</th>
                        <th scope="col">Country</th>
                        <th scope="col">Position</th>
                        <th scope="col">Wage</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {employeeList.map((value, key) => {
                        return (
                            <tr key={key} className='text-white bg-secondary'>
                                <td>{value.id}</td>
                                <td>{value.name}</td>
                                <td>{value.age}</td>
                                <td>{value.country}</td>
                                <td>{value.position}</td>
                                <td>{value.wage}</td>
                                <td>
                                    <Link to="/Edit" state={{ value: value }}>
                                        <button type='button' className='btn-success btn'>Edit</button>
                                    </Link>
                                </td>
                                <td>
                                    <button type='button' className='btn-danger btn' onClick={()=>{DeleteItem(value.id)}}>Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
};
export default Viewdata;