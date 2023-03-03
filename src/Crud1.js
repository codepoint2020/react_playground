import { useState } from "react";

function Crud1() {

//state for array
const [myData, setMyData] = useState([
    {id: 1, firstname: "Tiffany", lastname: "Cruz", age: 19},
    {id: 2, firstname: "Mykah", lastname: "Sasaki", age: 21},
    {id: 3, firstname: "Lyxie", lastname: "Anderson", age: 18}
]);

//state if editing
const [isEditing, setIsEditing] = useState(true);

//target item for edit state
const [targetID, setTargetID] = useState(0);

//input change state for first name
const [firstName, setFirstName] = useState('');
const firstNameHandler = (event) => {
    setFirstName(event.target.value);
}

//input change state for last name
const [lastName, setLastName] = useState('');
const lastNameHandler = (event) => {
    setLastName(event.target.value);
}

//input change state for age
const [newAge, setNewAge] = useState('');
const ageHandler = (event) => {
    setNewAge(event.target.value);
}

//on delete
const delItem = (i) => {
    let copyData = [...myData];
    copyData.splice(i, 1);
    setMyData(copyData);
}

//on edit
const editItem = (index) => {
    let copyData = [...myData];
    let targetItem = copyData[index];
    setFirstName(targetItem.firstname);
    setLastName(targetItem.lastname);
    setNewAge(targetItem.age);
    setTargetID(index);
    setIsEditing(false);
    // console.log(targetItem);
    // console.log('editing');
    // console.log(copyData[index]);
}

//on submit
const formHandler = (event) => {
    event.preventDefault();
    // alert('Submitting');
    let copyData = [...myData];
    let newID = parseInt(copyData.length) + 1;
    let newENtry = {id: newID, firstname: firstName, lastname: lastName, age: newAge}
    copyData = [...copyData, newENtry];
    setMyData(copyData);

    setFirstName('');
    setLastName('');
    setNewAge('');

    console.log(copyData);

}

//on update'
const updateHandler = (event) => {
    event.preventDefault();
    let copyData = [...myData];
    let targetItem = copyData[targetID];
    targetItem.firstname = firstName;
    targetItem.lastname = lastName;
    targetItem.age = newAge;
    setMyData(copyData);
    setFirstName('');
    setLastName('');
    setNewAge('');
    setIsEditing(true);
}

    return (
        <>
            <div className="container">
                <h1 className="text-center"></h1>
                <div className="row">
                <div className="col-md-4">
                    <form onSubmit={isEditing ? formHandler  : updateHandler }>
                        <div class="mb-3">
                            <label for="firstName" class="form-label">First name</label>
                            <input type="text" class="form-control" id="firstName" value={firstName} onChange={firstNameHandler}/>
                        </div>
                        <div class="mb-3">
                            <label for="lastName" class="form-label">Last name</label>
                            <input type="text" class="form-control" id="lastName" value={lastName} onChange={lastNameHandler}/>
                        </div>
                        <div class="mb-3">
                            <label for="lastName" class="form-label">Age</label>
                            <input type="number" class="form-control"  value={newAge} onChange={ageHandler}/>
                        </div>
                        <div class="d-grid gap-2 mb-4">
                            {isEditing ? (<button class="btn btn-primary">Submit</button>):(<button class="btn btn-warning">Update</button>) }
                        </div>
                        </form>
                    </div>
                    

                    <div className="col-md-8">
                        <table class="table">
                            <thead class="table-info">
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Age</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {myData.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.firstname + " " + item.lastname}</td>
                                    <td>{item.age}</td>
                                    <td>
                                        <button className="btn btn-sm btn-danger" onClick={() => delItem(index)}>Del</button>
                                        <button className="btn btn-sm btn-info m-2" onClick={() => editItem(index)}>Edit</button>
                                    </td>
                                </tr>
                                ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Crud1;