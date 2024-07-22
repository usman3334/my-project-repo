import React from 'react';
import '../App.css';
const Form = ({ formData, handleInputChange, handleSubmit, isEditing }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        placeholder="Name"
        required
      />
      <input
        type="number"
        name="age"
        value={formData.age}
        onChange={handleInputChange}
        placeholder="Age"
        required
      />
      <button type="submit">{isEditing ? 'Update' : 'Add'}</button>
    </form>
  );
};

export default Form;

