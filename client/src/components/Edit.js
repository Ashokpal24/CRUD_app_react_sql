import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { useLocation } from 'react-router-dom';
function Edit() {
    const [newname, setname] = useState("");
    const [newage, setage] = useState(0);
    const [newcountry, setcountry] = useState("");
    const [newposition, setposition] = useState("");
    const [newwage, setwage] = useState(0);
    const location = useLocation()
    useEffect(() => {
        console.log(location)
        setname(location.state.value.name);
        setage(location.state.value.age);
        setcountry(location.state.value.country);
        setposition(location.state.value.position);
        setwage(location.state.value.wage);
    }, [])
    
    const updateWage = (value) => {
        console.log(newwage)
        Axios.put("http://localhost:3000/updateWage", {wage:newwage,id:value}).then(()=>{console.log("wage updated")});
    };
    const updateName = (value) => {
        console.log(newname)
        Axios.put("http://localhost:3000/updateName", {name:newname,id:value}).then(()=>{console.log("name updated")});
    };
    const updateCountry = (value) => {
        console.log(newcountry)
        Axios.put("http://localhost:3000/updateCountry", {country:newcountry,id:value}).then(()=>{console.log("country updated")});
    };
    const updatePosition = (value) => {
        console.log(newposition)
        Axios.put("http://localhost:3000/updatePosition", {position:newposition,id:value}).then(()=>{console.log("position updated")});
    };
    const updateAge = (value) => {
        console.log(newage)
        Axios.put("http://localhost:3000/updateAge", {age:newage,id:value}).then(()=>{console.log("age updated")});
    };
    return (
        <div className='container mt-5 '>
            <form>
                <div className="form-group row h4">
                    <label htmlFor="Name" className="col-sm-2 col-form-label"> User ID</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control mt-1" id="Name" value={location.state.value.id} readOnly />
                    </div>
                </div>
                <div className="form-group row h4">
                    <label htmlFor="Name" className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-9">
                        <input type="text" className="form-control mt-1" id="Name" defaultValue={location.state.value.name} onChange={(event) => { setname(event.target.value) }} />
                    </div>
                    <button type='button' className="btn btn-success btn-lg col-sm-1" onClick={()=>{updateName(location.state.value.id)}}>update</button>
                </div>
                <div className="form-group row h4">
                    <label htmlFor="Name" className="col-sm-2 col-form-label">Age</label>
                    <div className="col-sm-9">
                        <input type="text" className="form-control mt-1" id="Age" defaultValue={location.state.value.age} onChange={(event) => { setage(event.target.value) }} />
                    </div>
                    <button type='button' className="btn btn-success btn-lg col-sm-1" onClick={()=>{updateAge(location.state.value.id)}}>update</button>
                </div>
                <div className="form-group row h4">
                    <label htmlFor="Name" className="col-sm-2 col-form-label">Country</label>
                    <div className="col-sm-9">
                        <input type="text" className="form-control mt-1" id="country" defaultValue={location.state.value.country} onChange={(event) => { setcountry(event.target.value) }} />
                    </div>
                    <button type='button' className="btn btn-success btn-lg col-sm-1" onClick={()=>{updateCountry(location.state.value.id)}}>update</button>
                </div>
                <div className="form-group row h4">
                    <label htmlFor="Name" className="col-sm-2 col-form-label">Position</label>
                    <div className="col-sm-9">
                        <input type="text" className="form-control mt-1" id="position" defaultValue={location.state.value.position} onChange={(event) => { setposition(event.target.value) }} />
                    </div>
                    <button type='button' className="btn btn-success btn-lg col-sm-1" onClick={()=>{updatePosition(location.state.value.id)}}>update</button>
                </div>
                <div className="form-group row h4">
                    <label htmlFor="Name" className="col-sm-2 col-form-label">Wage</label>
                    <div className="col-sm-9">
                        <input type="text" className="form-control mt-1" id="wage" defaultValue={location.state.value.wage} onChange={(event) => { setwage(event.target.value) }} />
                    </div>
                    <button type='button' className="btn btn-success btn-lg col-sm-1" onClick={()=>{updateWage(location.state.value.id)}}>update</button>
                </div>
            </form>
        </div>
    );
}
export default Edit;