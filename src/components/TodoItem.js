import React from 'react';
import { ToggleButtonGroup } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleComplete, toggleCompleteAsync } from '../redux/slice/TodoSlice';

const TodoItem = ({ id, title, completed }) => {
	const dispatch=useDispatch();
	const handleCompleteClick=()=>{dispatch(toggleCompleteAsync({id:id, completed:!completed}))}
	const handleDeleteClick=()=>{dispatch(deleteTodo({id:id}))}
	return (
		<li className={`list-group-item ${completed && 'list-group-item-success'}`}>
			<div className='d-flex justify-content-between'>
				<span className='d-flex align-items-center'>
					<input type='checkbox' className='mr-3' onChange={handleCompleteClick} checked={completed}></input>
					{title}
				</span>
				<button onClick={handleDeleteClick} className='btn btn-danger'>Delete</button>
			</div>
		</li>
	);
};

export default TodoItem;
