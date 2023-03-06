import { useState } from "react";

function Crud5() {

    //state for the array
    const [myData, setMyData] = useState([
        { firstname: "John", lastname: "Doe", age: 30 },
        { firstname: "Elton", lastname: "Smith", age: 27 },
        { firstname: "James", lastname: "Conrad", age: 40 }
    
    ]) 

    //state to hold new firstname
    const [newFirstname, setNewFirstname] = useState('');

    //state to hold new lastname
    const [newLastname, setNewLastname] = useState('');
    //state to hold new age
    const [newAge, setNewAge] = useState('');

    //state onchange on firstname
    const firstnameChange = (event) => {
        setNewFirstname(event.target.value);
    }

    //state onchange on lastname
    const lastnameChange = (event) => {
        setNewLastname(event.target.value);
    }

    //state onchange on age
    const ageChange = (event) => {
        setNewAge(event.target.value);
    }


    //state on target ID for edit
    const [targetID, setTargetId] = useState(0);


    //state if editing
    const [isEditing, setIsEditing] = useState(true);


    //function for submitting the form
    const updateHandler = (event) => {
        event.preventDefault();
        let copyData = [...myData];
        let targetItem = copyData[targetID];
        targetItem.firstname = newFirstname;
        targetItem.lastname = newLastname;
        targetItem.age = newAge;
        setMyData(copyData);
        setIsEditing(true);
        setNewFirstname('');
        setNewLastname('');
        setNewAge('');
   
    }

    //submit handler

    const submitForm = (event) => {
        event.preventDefault();
        let copyData = [...myData];
        let newEntry = {firstname: newFirstname, lastname: newLastname, age: newAge};
        setMyData([...copyData, newEntry]);
        setNewFirstname('');
        setNewLastname('');
        setNewAge('');


    }

    //function in editing data, if edit button is clicked
    const editItem = (i) => {
        setTargetId(i);
        let copyData = [...myData];
        let item = copyData[i];
        setNewFirstname(item.firstname);
        setNewLastname(item.lastname);
        setNewAge(item.age);
        console.log(newFirstname);
        setIsEditing(false);
        
        
    }

    //function deleting data
    const deleteItem = (index) => {
        let copyData = [...myData];
        copyData.splice(index, 1);
        setMyData(copyData);
    }

    //When Cancel button is clicked
    const cancelUpdate = () => {
        setIsEditing(true);
        setNewFirstname('');
        setNewLastname('');
        setNewAge('');
        setTargetId(0);
    }

    return (
        <>
            <div className="container pt-4">
                <div className="row">
                    <h1 className="h2 text-center p-2 bg-info">5th CRUD DRILL</h1>
                    <div className="col-md-4">
                        <form onSubmit={ isEditing ? submitForm  :   updateHandler} className="form-control pb-5">
                            <div className="mb-3">
                                <label className="form-label">Firstname:</label>
                                <input type="text" className="form-control" value={newFirstname} onChange={firstnameChange}></input>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Lastname</label>
                                <input type="text" className="form-control" value={newLastname} onChange={lastnameChange}></input>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Age</label>
                                <input type="number" className="form-control" value={newAge} onChange={ageChange}></input>
                            </div>
                            <div className="d-grid gap-2">
                                {isEditing ? (<button className="btn btn-sm btn-primary">Submit</button>):
                                (<button className="btn btn-sm btn-success">Update</button>)}
                            </div>
                        </form>
                    </div>
                    <div className="col-md-8">
                        <table className="table table-striped">
                            <thead className="table-info">
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Age</th>
                                    <th>Operations</th>
                                </tr>
                            </thead>
                            <tbody>
                                {myData.map((item, index) => ( 
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{item.firstname + " " + item.lastname}</td>
                                    <td>{item.age}</td>
                                    <td>
                                        <button className="btn btn-danger btn-sm" onClick={() => deleteItem(index)}>Del</button>
                                        <button className="btn btn-info btn-sm m-2" onClick={() => editItem(index)}>Edit</button>
                                    </td>
                                </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
               
            </div>
        </>
    ) 
}

export default Crud5;