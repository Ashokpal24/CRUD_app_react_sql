import React, { useState } from 'react'
import Axios from 'axios'
function Viewdata() {
    const [employeeList, setemployeeList] = useState([]);
    const getData = () => {
        Axios.get("http://localhost:3000/employees").then((reponse) => { setemployeeList(reponse.data) });
    }
    getData();
    return (
        <div className='container mt-5'>
            <button type='button' className="btn btn-primary btn-lg" onClick={getData}> View data</button>
            <table className="table mt-5">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Age</th>
                        <th scope="col">Country</th>
                        <th scope="col">Position</th>
                        <th scope="col">Wage</th>
                    </tr>
                </thead>
                <tbody>
                    {employeeList.map((value, key) => {
                        return (
                            <tr key={key} className='table-info'>
                                <td>{value.id}</td>
                                <td>{value.name}</td>
                                <td>{value.age}</td>
                                <td>{value.country}</td>
                                <td>{value.position}</td>
                                <td>{value.wage}</td>
                            </tr>
                            )
                    })}
                </tbody>
            </table>
        </div>
    );
};
export default Viewdata;