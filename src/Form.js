import { useState } from "react";

function Form({doSubmit}) {

//state for new first name
const [newFirstname, setNewFirstname] = useState('');

//state for new lastname
const [newLastname, setNewLastname] = useState('');

//state for new email
const [newEmail, setNewEmail] = useState('');

//state for new city
const [newCity, setNewCity] = useState('');


//state if name is changed
const changedFirstname = (event) => {
    setNewFirstname(event.target.value);
    }
    
    
    //state if lastname is changed
    const changedLastname = (event) => {
    setNewLastname(event.target.value);
    }
    
    
    //state if email is change
    const changedEmail = (event) => {
    setNewEmail(event.target.value);
    }
    
    //state if city is changed
    const changedCity = (event) => {
    setNewCity(event.target.value);
    }
    
        

    return (
        <>
        <form className="form-control mb-5" onSubmit={doSubmit}>
            <div className="mb-3">
                <label className="form-label">Firstname</label>
                <input className="form-control" value={newFirstname} onChange={changedFirstname}></input>
            </div>
            <div className="mb-3">
                <label className="form-label">Lastname</label>
                <input className="form-control" value={newLastname} onChange={changedLastname}></input>
            </div>
            <div className="mb-3">
                <label className="form-label">Email</label>
                <input className="form-control" value={newEmail} onChange={changedEmail}></input>
            </div>
            <div className="mb-3">
                <label className="form-label">City</label>
                <input className="form-control" value={newCity} onChange={changedCity}></input>
            </div>
            <div className="d-grid gap-2 mb-3">
                <button className="btn btn-primary">Submit</button>
                <button className="btn btn-info">Update</button>
                <button className="btn btn-outline-secondary">Cancel</button>
            </div>
        </form>
        </>
    )
}

export default Form;