import { useState } from "react";
import "./style.css";

function CreateElems() {

    const [dataElems, setDataElems] = useState([]);

    const [currentData, setCurrentData] = useState('');

    function changeInputHandler(event) {
        setCurrentData(event.target.value);
    }


    function formSubmitHandler(event) {
        event.preventDefault();
        setDataElems([...dataElems, currentData]);
        setCurrentData('');
    }

    return(
        <>
        <div class="container ">
            <div class="dark-bg">
                <div class="row p-4">
                <h1 class="text-center mb-4">Add Element On Click</h1>
                    <div class="col-md-4">
                        <form onSubmit={formSubmitHandler}>
                            
                            <div class="mb-3">
                            <label  class="form-label">Enter data</label>
                            <input type="text" class="form-control" onChange={changeInputHandler} value={currentData} />
                            </div>
                            <div class="d-grid gap-2">
                                <button class="btn btn-info" type="submit">Button</button>
                            </div>
                        </form>
                    </div>
                
                    <div class="col-md-8">
                      
                        <table class="table">
                            <thead class="thead-dark">
                                <tr>
                                    <th scope="col">Task</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {dataElems.map((item, index) => (
                                    <tr>
                                        <th scope="row" key={index}>{item}</th>
                                        <td>Something</td>   
                                    </tr>
                                ))}
                            </tbody>
                            </table>
                    </div>

                </div>
            </div>
        </div>
        </>
    );
}

export default CreateElems;