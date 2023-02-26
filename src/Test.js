import React, { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [isEditMode, setIsEditMode] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    // Handle form submission logic here
    alert('submit');
  }

  function handleUpdate(event) {
    event.preventDefault();
    // Handle form update logic here
    alert('update');
  }

  function handleEdit(event) {
    event.preventDefault();
    setIsEditMode(true);
  }

  function handleCancel(event) {
    event.preventDefault();
    setIsEditMode(false);
  }

  return (
    <div>
      <form onSubmit={isEditMode ? handleUpdate : handleSubmit}>
        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} disabled={!isEditMode} />
        {isEditMode ? (
          <div>
            <button type="submit">Update</button>
            <button onClick={handleCancel}>Cancel</button>
          </div>
        ) : (
          <button onClick={handleEdit}>Edit</button>
        )}
      </form>
    </div>
  );
}

export default App;
