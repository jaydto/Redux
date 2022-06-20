import React from "react";
import { useDispatch } from "react-redux";
import { toggleComplete } from "../redux/slice/TodoSlice";
const TodoItem = ({id ,title ,completed}) => {
  const dispatch = useDispatch();
  const handleCompleteClick = () => {
    dispatch(
      toggleComplete({
        id: id,
        competed: !completed,
      })
    );
  };

  return (
    <div>
      <li
        // className={"list-group-item " ,{competed ,'list-group-item-success'}}
      >
        <div className="d-flex justify-content-between">
            <span className="d-flex align-items-center">
                <input type="checkbox" className="mr-3" onChange={handleCompleteClick} checked={completed} />
                {title}
            </span>
         
            <button className="btn btn-danger">Delete</button>
          
        </div>
      </li>
    </div>
  );
};

export default TodoItem;
