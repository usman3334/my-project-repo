import React, { useState } from 'react';
import Form from '../components/Form';
import Table from '../components/Table';
import '../App.css';

const Home = () => {
  const [state, setState] = useState({
    data: [],
    formData: { name: '', age: '' },
    isEditing: false,
    editIndex: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      formData: { ...prevState.formData, [name]: value },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.isEditing) {
      const updatedData = state.data.map((item, index) =>
        index === state.editIndex ? state.formData : item
      );
      setState({
        ...state,
        data: updatedData,
        isEditing: false,
        editIndex: null,
        formData: { name: '', age: '' },
      });
    } else {
      setState({
        ...state,
        data: [...state.data, state.formData],
        formData: { name: '', age: '' },
      });
    }
  };

  const handleEdit = (index) => {
    setState({
      ...state,
      formData: state.data[index],
      isEditing: true,
      editIndex: index,
    });
  };

  const handleDelete = (index) => {
    const updatedData = state.data.filter((_, i) => i !== index);
    setState({
      ...state,
      data: updatedData,
    });
  };

  return (
    <div>
      <h1>Form with Table</h1>
      <Form
        formData={state.formData}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        isEditing={state.isEditing}
      />
      <Table
        data={state.data}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default Home;

