import { useState } from "react";


function Crud3() {

//state for the data list
const [myData, setMyData] = useState([
    {id: 1, firstname: "Elon", lastname: "Musk", location: "Texas"},
    {id: 2, firstname: "Jerome", lastname: "Morales", location: "Makati"},
    {id: 3, firstname: "Bill", lastname: "Gates", location: "California"}
]);

//state for to check if editing or not
const [isEditing, setIsEditing] = useState(true);

// if (isEditing === false) {
//     return (<button className="btn btn-sm btn-secondary-outline">Cancel</button>);
// }

//state for target item for edit
const [editID, setEditID] = useState(0);

//State if firstname is being edited
const [newFname, setNewFname] = useState('');

//State if lastname is being edited
const [newLname, setNewLname] = useState('');

//State if location is being edited
const [newLoc, setNewLoc] = useState('');

//function onchange for firstname
const changeFirstName = (event) => {
    setNewFname(event.target.value);
}

//function onchange for firstname
const changeLastName = (event) => {
    setNewLname(event.target.value);
}

//function onchange for firstname
const changeLocation = (event) => {
    setNewLoc(event.target.value);
}




//function if form is submitted
const submitHandler = (event) => {
    event.preventDefault();
    let copyData = [...myData];
    let newEntry = {id: copyData.length, firstname: newFname, lastname: newLname, location: newLoc }
    setMyData([...copyData, newEntry]);
    setNewFname('');
    setNewLname('');
    setNewLoc('');
    console.log('submit complete');
}   

//function if form is updating

const updateHandler = (event) => {
    event.preventDefault();
    let copyData = [...myData];
    let id = editID;
    copyData[id].firstname = newFname;
    copyData[id].lastname = newLname;
    copyData[id].location = newLoc;
   
    setEditID(0);
    setNewFname('');
    setNewLname('');
    setNewLoc('');

    console.log('Record Updated');
}

// function if editing
const editHandler = (index) => {
    let copyData = [...myData];
    setEditID(index);
    setNewFname(copyData[index].firstname);
    setNewLname(copyData[index].lastname);
    setNewLoc(copyData[index].location);
    setIsEditing(false);
}

// delete function
const delHandler = (index) => {
    let copyData = [...myData];
    copyData.splice(index, 1);
    setMyData(copyData);
    console.log("Delete ops successful");
}

    return(
        <>
       
        <div className="container">
            <h1 class="p-4 bg-info text-center h2 mb-4 mt-4">CRUD3 in React.js</h1>
            <div className="row">
                <div className="col-md-4" onSubmit={isEditing ?  submitHandler :updateHandler }>
                    <form className="form-control">
                        <div className="mb-3">
                            <label className="form-label">Enter First name</label>
                            <input type="text" className="form-control" value={newFname} onChange={changeFirstName} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Enter Last name</label>
                            <input type="text" className="form-control" value={newLname} onChange={changeLastName} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Enter Address</label>
                            <input type="text" className="form-control" value={newLoc} onChange={changeLocation}/>
                        </div>
                        <div className="mb-3">
                        <div className="d-grid gap-2">
                            {isEditing ? (<button className="btn btn-primary btn-sm" onClick={submitHandler}>Submit</button>):(<button className="btn btn-warning btn-sm" onClick={updateHandler}>Update</button>
                            )}
                            
                        </div>
                        </div>
                    </form>
                  

                </div>
                <div className="col-md-8">
                    <table className="table table-hover">
                        <thead className="table-dark">
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Location</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {myData.map((item, index) => (
                                <tr>
                                <td>{index + 1}</td>
                                <td>{item.firstname + " " + item.lastname}</td>
                                <td>{item.location}</td>
                                <td>
                                    <button className="btn btn-sm btn-danger m-2" onClick={() => delHandler(index)}>Del</button>
                                    <button className="btn btn-sm btn-warning" onClick={() => editHandler(index)}>Edit</button>
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

export default Crud3;