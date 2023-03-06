import {useState} from 'react';



function Crud2() {

//array with 3 objects
const [myData, SetMyData] = useState([
    {id: 1, firstname: "Elon", lastname: "Musk", location: "Texas, USA"},
    {id: 2, firstname: "Bill", lastname: "Gates", location: "California, USA"},
    {id: 3, firstname: "Jerome", lastname: "Morales", location: "Makati, Philippines"}
]);

//first name state
const [newFname, setNewFname] = useState('');
//last name state
const [newLname, setNewLname] = useState('');
//location state
const [newLoc, setNewLoc] = useState('');
//Editing state
const [isEditing, setIsEditing] = useState(true);

//target ID for updating state
const [targetID, setTargetID] = useState(0);



//first name change input
const changeFirstName = (event) => {
    setNewFname(event.target.value);
}

//last name change input
const changeLastName = (event) => {
    setNewLname(event.target.value);
}

const changeLocation = (event) => {
    setNewLoc(event.target.value);
}


//if edit button is click
const execEdit = (i) => {
   let copyMyData = [...myData];
   let targetItem = copyMyData[i];
   setTargetID(i);
   setNewFname(targetItem.firstname);
   setNewLname(targetItem.lastname);
   setNewLoc(targetItem.location);
   setIsEditing(false);
}


//form submit/update handler
const submitHandler = (event) => {
    event.preventDefault();
    let copyData = [...myData];
    let newID = copyData.length + 1;
    let newEntry = {id: newID, firstname: newFname, lastname: newLname, location: newLoc};
    SetMyData([...myData, newEntry]);
    setNewFname('');
    setNewLname('');
    setNewLoc('');
    console.log('submit triggered');
}

//update function handler

const updateHandler = (event) => {
    event.preventDefault();
    let copyMyData = [...myData];
    let targetData = copyMyData[targetID];
    targetData.firstname = newFname;
    targetData.lastname = newLname;
    targetData.location = newLoc;
    
    SetMyData(copyMyData);
    setNewFname('');
    setNewLname('');
    setNewLoc('');
    alert('Updating');
    setIsEditing(true);
} 


//execute delete operation
const execDel = (i) => {
    let copyData = [...myData];
    copyData.splice(i, 1);
    SetMyData(copyData);
    alert('Delete operation triggered');
}

    return (
        <>
            <div className='container p-4  mt-4'>
                <div className='row'>
                    <h1 className='text-center h2 bg-secondary p-4 m-4'>Create Read Update Delete 4</h1>
                    <div className='col-md-6'>
                        <form onSubmit={isEditing ? submitHandler  : updateHandler}>
                            <div className="mb-3">
                                <label className="form-label">First name:</label>
                                <input type="text" className="form-control" value={newFname} onChange={changeFirstName} />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Last name:</label>
                                <input type="text" className="form-control"   value={newLname} onChange={changeLastName} />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Location:</label>
                                <input type="text" className="form-control"   value={newLoc} onChange={changeLocation} />
                            </div>

                            <div className="d-grid gap-2">
                                {isEditing ? 
                                (<button className="btn btn-info" >Submit</button>
                                ):(
                                <button className="btn btn-warning" >Update</button>)
                                }
                                
                            </div>
                        </form>
                    </div>
                    <div className='col-md-6'>
                    <table className="table table-striped table-hover">
                        <thead className='table-dark'>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Location</th>
                                <th scope="col">Handle</th>
                            </tr>
                        </thead>
                        <tbody>

                            {myData.map((item, index) => (<tr>
                                <th scope="row">{index + 1}</th>
                                <td>{item.firstname + " " + item.lastname}</td>
                                <td>{item.location}</td>
                                <td>
                                    <button className='btn btn-sm btn-warning' onClick={() => execEdit(index)}>Edit</button>
                                    <button className='btn btn-sm btn-danger m-2' onClick={() => execDel(index)}>Del</button>
                                </td>
                            </tr>))
                            }
                         
                        </tbody>
                        </table>

                    </div>

                </div>

            </div>
        </>
    )
}

export default Crud2;

