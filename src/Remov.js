import { useState } from "react";
import "./style.css";

function Remov() {

    const [list, setList] = useState(['Item 1','Item 2', 'Item 3']);

    function removeHandle(index) {
        const newList = [...list];
        newList.splice(index, 1);
        setList(newList);
    }

    return (
        <>
            <div class="container">
                <h1>Hello</h1>
                <div class="row">
                    <div class="col-md-6">
                        <table class="table">
                        <thead class="thead-dark">
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Action</th>
                          
                            </tr>
                        </thead>
                        <tbody>
                            {list.map((item, index) => (
                                 <tr key={index}>
                                    <th scope="row">1</th>
                                    <td>{item}</td>
                                    <td>
                                        <button 
                                        class="btn btn-sm btn-danger" onClick={() => removeHandle(index)}
                                        >Del
                                        </button>
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

export default Remov;