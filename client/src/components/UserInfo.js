import React, { useState } from 'react';
import Axios from 'axios';
function UserInfo() {
    const [name, setname] = useState("");
    const [age, setage] = useState(0);
    const [country, setcountry] = useState("");
    const [position, setposition] = useState("");
    const [wage, setwage] = useState(0);
    const addEmployee = () => {
        Axios.post("http://localhost:3000/create", {
            name: name, 
            age: age, 
            country: country, 
            position: position, 
            wage: wage}).then(()=>{console.log("success")});
    };
    
    return (
        <div className='container mt-5'>
            <form>
                <div className="form-group row h4">
                    <label htmlFor="Name" className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="Name" onChange={(event) => { setname(event.target.value) }} required />
                    </div>
                </div>
                <div className="form-group row h4">
                    <label htmlFor="Age" className="col-sm-2 col-form-label">Age</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="Age" onChange={(event) => { setage(event.target.value) }} required />
                    </div>
                </div>
                <div className="form-group row h4">
                    <label htmlFor="country" className="col-sm-2 col-form-label">Country</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="country" onChange={(event) => { setcountry(event.target.value) }} required />
                    </div>
                </div>
                <div className="form-group row h4">
                    <label htmlFor="position" className="col-sm-2 col-form-label">Position</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="position" onChange={(event) => { setposition(event.target.value) }} required />
                    </div>
                </div>
                <div className="form-group row h4">
                    <label htmlFor="Wage" className="col-sm-2 col-form-label">Wage</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="Wage" onChange={(event) => { setwage(event.target.value) }} required />
                    </div>
                </div>
                <button type='button' className="btn btn-primary btn-lg" onClick={addEmployee}>Add</button>
            </form>
        </div>
    );
}
export default UserInfo;