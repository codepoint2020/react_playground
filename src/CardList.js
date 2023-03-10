import { useState } from 'react';
import Card from './Card';

import Form from './Form';

function CardList() {
//state ifEditing or not boolean
const [isEditing, setIsEditing] = useState(true);

//state for target id default 0
    const [targetId, setTargetId] = useState(0);


    
//state for data array
    const [myData, setMyData] = useState([
        {
            firstname: "John",
            lastname: "Doe",
            email: "j.doe@gmail.com",
            city: "California"
        },

        {
            firstname: "Mark",
            lastname: "Brown",
            email: "m.brown@gmail.com",
            city: "New York"
        },

        {
            firstname: "Joma",
            lastname: "Chan",
            email: "j.chat@example.com",
            city: "Beijing"
        }
    ]) 


//if editing
const editHandler = (index) => {
    setIsEditing(false);
    setTargetId(index)
    console.log('editing initiated');
}

//Delete Handler
const deleteHandler = (index) => {
    let copyData = [...myData];
    copyData.splice(index, 1);
}

//state if update is clicked
const updateHandler = (event) => {
event.preventDefault();
console.log('update clicked');
setIsEditing(true);
}

//state if submit form is clicked
const submitForm = (event) => {
event.preventDefault();
let copyData = [...myData];
let newEntry = {firstname: newFirstname, lastname: newLastname, email: newEmail, city: newCity };
setMyData([...copyData, newEntry]);
console.log('Submit button is working');
}

    return(
        <>
        <h1 className='text-center'>Component, Props and CRUD</h1>
        <div className="container">
            <div className='row'>
                <div className='col-md-6'>
                    <Form 
                
                  
                    doEdit={editHandler}
                    doDelete={deleteHandler}
                    />
                </div>
                <div className='col-md-6'>
                <table className="table table-hover table-striped">
                    <thead className="table-primary">
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>City</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {myData.map((item, index) => (
                        <Card name={item.firstname + " " + item.lastname} email={item.email} city={item.city} num={index} doEdit={()=>(editHandler(index))} doDelete={() => (deleteHandler(index))}/>
                        ))}
                    </tbody>
                </table>
                </div>
            </div>
           
             
        </div>
        
        
       
        </>
    )
}

export default CardList;