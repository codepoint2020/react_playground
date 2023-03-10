import { useState } from "react";

function Crud4() {

    const [myData, setMyData] = useState([
        { firstname: "Mark", lastname: "Z", city: "NYC" },
        { firstname: "Elon", lastname: "Musk", city: "Texas" },
        { firstname: "Sheldon", lastname: "Cooper", city: "Texas" }
    ]);

    //firstname state
    const [newFname, setNewFname] = useState('');

    //firstname on change
    const changedFirstname = (event) => {
        setNewFname(event.target.value);
        console.log(newFname);
    }

     //lastname state
     const [newLname, setNewLname] = useState('');

     //lastname on change
     const changedLastname = (event) => {
        setNewLname(event.target.value);
     }


      //city state
      const [newCity, setNewCity] = useState('');

      //city on change
      const changedCity = (event) => {
        setNewCity(event.target.value);
      }
 


    //Delete state
    function execDelete(index) {
        let copyData = [...myData];
        copyData.splice(index, 1);
        setMyData(copyData);
        console.log('Delete successful');
    }

    //target item for edit state
    const [targetId, setTargetId] = useState(0);
    const [isEditing, setIsEditing] = useState(true);

    //If Edit is clicked
    const execEdit = (index) => {
        let copyData = [...myData];
        let item = copyData[index];
        setTargetId(index);
        setNewFname(item.firstname);
        setNewLname(item.lastname);
        setNewCity(item.city);
        setIsEditing(false);
        console.log('editing');
    }

    const updateHandler = (event) => {

        event.preventDefault();
        let copyData = [...myData];
        let id = targetId;
        let targetItem = copyData[id];
        
        targetItem.firstname = newFname;
        targetItem.lastname = newLname;
        targetItem.city = newCity;
        setMyData(copyData);
        setNewFname('');
        setNewLname('');
        setNewCity('');
        setIsEditing(true);
        
        console.log('Record updated');
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        let copyData = [...myData];
        let newEntry = {firstname: newFname, lastname: newLname, city: newCity};
        copyData = [...copyData, newEntry];
        setMyData(copyData);
        console.log(newFname);
        console.log('submit');
    }

    return (
        <>
            <div className="container">
                <h1 className="text-center h2 bg-info pt-4 pb-4">4th CRUD Drill</h1>
                <div className="row">
                    <div className="col-md-6">
                        <form className="form-control" onSubmit={isEditing ?  handleSubmit :   updateHandler}>
                            <div className="mb-3">
                                <label className="form-label">Enter Firstname</label>
                                <input className="form-control" value={newFname} onChange={changedFirstname} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Enter Lastname</label>
                                <input className="form-control" value={newLname} onChange={changedLastname} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">City</label>
                                <input className="form-control" value={newCity} onChange={changedCity} />
                            </div>
                            <div className="d-grid gap-2">
                                {isEditing ? (<button className="btn btn-primary btn-sm m-4">Submit</button>) : (<button className="btn btn-warning btn-sm m-4">Update</button>)}
                            </div>
                        </form>

                    </div>
                    <div className="col-md-6">
                        <table className="table table-striped table-hover">
                            <thead className="table-dark">
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>City</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {myData.map((item, index) => (
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{item.firstname + " " + item.lastname}</td>
                                        <td>{item.city}</td>
                                        <td>
                                            <button className="btn btn-sm btn-danger" onClick={() => execDelete(index)}>Del</button>
                                            <button className="btn btn-sm btn-warning m-2" onClick={() => execEdit(index)}>Edit</button>
                                        </td>
                                    </tr>
                                )
                                )}
                                

                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Crud4;