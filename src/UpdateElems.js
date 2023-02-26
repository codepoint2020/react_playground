// import { useState } from "react";

// function UpdateElems() {

//     const [items, setItems] = useState('Accretian', 'Bellato', 'Cora');
//     const [updateIndex, setUpdateIndex] = useState(null);
//     const [updateValue, setUpdateValue] = useState('');


//     const handleUpdate = (event) => {
//         event.preventDefault();
//         const updatedItems = [...items];
//         updatedItems[updateIndex] = updateValue;
//         setItems(updatedItems);
//         setUpdateIndex(null);
//         setUpdateValue('');
//     }

//     const handleInputChange = (event) => {
//         setUpdateValue(event.target.value);
//     }

//     return (

//         <>
//         <h1>Update Elements</h1>
       
//        <div>
//         <ul>
//             {items.map((item, index) => (
//             <li key={index}>
//                 {index === updateIndex ? (
//                      <form onSubmit={handleUpdate}>
//                      <input type="text" value={updateValue} onChange={handleInputChange}></input>
//                      <button type="submit">Save</button>
//                  </form>

//                 ): (

//                   <div>  
//                     {item} <button onClick={() => setUpdateIndex(index)}>Update</button>
//                 </div>

//                 )}
//             </li>
//             ))}
//         </ul>
//         </div>
//         </>
//     )
// }

// export default UpdateElems;


import React, { useState } from 'react';

function App() {
  const [items, setItems] = useState(['item 1', 'item 2', 'item 3']);
  const [updateIndex, setUpdateIndex] = useState(null);
  const [updateValue, setUpdateValue] = useState('');

  console.log(setUpdateIndex);

  const handleUpdate = (event) => {
    event.preventDefault();
    const updatedItems = [...items]; // create a copy of the original array
    updatedItems[updateIndex] = updateValue; // update the specific item
    setItems(updatedItems); // update the state with the new array
    setUpdateIndex(null); // reset the update index
    setUpdateValue(''); // reset the update value
  };

  const handleInputChange = (event) => {
    setUpdateValue(event.target.value);
  };

  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {index === updateIndex ? (
              <form onSubmit={handleUpdate}>
                <input type="text" value={updateValue} onChange={handleInputChange} />
                <button type="submit">Save</button>
              </form>
            ) : (
              <div>
                {item} <button onClick={() => setUpdateIndex(index)}>Update</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;