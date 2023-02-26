import { useState } from "react";


function Todo1() {

    const [todos, setTodos] = useState([
        {id: 1, task: "Practice Coding", desc: "React.js"},
        {id: 2, task: "Exercise", desc: "walking"},
        {id: 3, task: "Food trip", desc: "fried chicken"}
    ]);

    let renderIfEmpty;
    let renderNumberEmpty;
 


    if (todos.length === 0) {
        renderIfEmpty = "No more items";
        renderNumberEmpty = "*";
    }

    //Add state
    const [newTodo, setNewTodo] = useState('');
    const [newDesc, setNewDesc] = useState('');
    const [editID, setEditID] = useState(0);

    // Edit and Update button State
    const [editMode, setEditMode] = useState(true);

     //Edit button
     const handleEdit = (i) => {

        let arrayCopy = [...todos];
        let targetEntry = arrayCopy[i];
        let newEditedTask = targetEntry.task;
        let newEditedDesc = targetEntry.desc;
        setNewTodo(newEditedTask);
        setNewDesc(newEditedDesc);
        setEditMode(false);
        setEditID(i);
    
     }

   
    

    const handleInputTask = (event) => {
        setNewTodo(event.target.value);
    }  

    const handleInputDesc = (event) => {
        setNewDesc(event.target.value);
    }   

    const handleSubmit = (event) => {
        event.preventDefault();
        if (newTodo) {
            let num = todos.length + 1;
            let newEntry = { id: num, task: newTodo, desc: newDesc}
            setTodos([...todos, newEntry]);
            setNewTodo('');
            setNewDesc('');
        }
        alert('submit');
    }

    //click the update button
    const handleUpdate = (event) => {
        event.preventDefault();

            let targetEntryID = editID;
            let copyArray = [...todos];
            // alert(copyArray[targetEntryID].id);
            copyArray[targetEntryID].id = targetEntryID;
            copyArray[targetEntryID].task = newTodo;
            copyArray[targetEntryID].desc = newDesc;
            // alert('update' + editID);
            console.log(editMode);
            console.log(copyArray[targetEntryID].task );
            setTodos(copyArray);
            setNewTodo('');
            setNewDesc('');
            setEditMode(true);
            
        
            
        
    }

    const handleDelete = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    }

   


    return (
        <>
            <div className="container bg-body-secondary p-4">
                <h1 className="text-center mb-2 h2 mt-4">hello</h1>
                <div className="row">
                    <div className="col-md-6">
                        
                        <form onSubmit={editMode ? handleSubmit : handleUpdate}>
                            <div className="mb-3">
                                <label for="item" className="form-label">Enter Task</label>
                                <input type="text" className="form-control" id="item" onChange={handleInputTask} value={newTodo}/>
                            </div>
                            <div className="mb-3">
                                <label for="desc" className="form-label">Enter Description</label>
                                <input type="text" className="form-control" id="desc" onChange={handleInputDesc} value={newDesc}/>
                            </div>
                            <div className="d-grid gap-2">
                            {editMode ? 
                                (
                                <button className="btn btn-primary">Submit</button> 
                                ) : (
                                <button className="btn btn-success" onClick={handleUpdate}>Update</button>
                                )
                            }
                            </div>
                         
                        </form>
                        
                    </div>
                    <div className="col-md-6">
                    <table className="table table-striped table-hover mt-4">
                        <thead className="table-dark">
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Task</th>
                            <th scope="col">Details</th>
                            <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {todos.map((todo, index) => (
                                <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{todo.task}</td>
                                <td>{todo.desc}</td>
                                <td>
                                    <button className="btn btn-sm btn-danger" onClick={() => handleDelete(index)}>Delete</button>
                                    <button className="btn btn-sm btn-info m-2" onClick={() => handleEdit(index) }>Edit</button>
                                </td>
                                </tr>
                            ))}
                            
                            <tr>
                                <th scope="row">{renderNumberEmpty}</th>
                                <td>{renderIfEmpty}</td>
                                <td>{renderIfEmpty}</td>
                                <td>{renderIfEmpty}</td>
                            </tr>
                           
                        </tbody>
                        </table>
                    </div>
                
                </div>

            </div>
        </>
    )
}

export default Todo1;