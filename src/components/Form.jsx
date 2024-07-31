import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import '../App.css';

const Form = ({ formData, handleSubmit, isEditing }) => {
  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    age: Yup.number().required('Age is required').positive('Age must be positive').integer('Age must be an integer'),
  });

  const formik = useFormik({
    initialValues: formData,
    enableReinitialize: true,
    validationSchema,
    onSubmit: (values) => {
      handleSubmit(values);
      formik.resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        type="text"
        name="name"
        value={formik.values.name}
        onChange={formik.handleChange}
        placeholder="Name"
        onBlur={formik.handleBlur}
      />
      {formik.touched.name && formik.errors.name ? (
        <div className="error">{formik.errors.name}</div>
      ) : null}
      
      <input
        type="number"
        name="age"
        value={formik.values.age}
        onChange={formik.handleChange}
        placeholder="Age"
        onBlur={formik.handleBlur}
      />
      {formik.touched.age && formik.errors.age ? (
        <div className="error">{formik.errors.age}</div>
      ) : null}
      
      <button type="submit">{isEditing ? 'Update' : 'Add'}</button>
    </form>
  );
};

export default Form;



