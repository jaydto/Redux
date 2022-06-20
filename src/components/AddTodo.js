import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/slice/TodoSlice";


const AddTodo = () => {
  const dispatch = useDispatch();
  const [value,setValue]=useState;
  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(
      addTodo({
        title: value,
      })
    );
  };
  return (
  <div>
    <form onSubmit={onSubmit} className="form-inline mt-3 ">
        <input type="text" name="" className="form-control mb-2 mr-sm-2" placeholder="Add todo" value={value} onChange={(event)=>setValue(event.target.value)} id="" />
        <buttton className="btn btn-primary mb3">Submit</buttton>
    </form>
  </div>);
};

export default AddTodo;
