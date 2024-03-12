import { FaPen } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

import './todoItem.css';

const TodoItem = (props) => {
    const {todoDetails, deleteTodo, editTodo, count} = props
    const {id, todoName} = todoDetails

    const onClickEdit = () => {
        editTodo();
    }

    const onClickDelete = () => {
        deleteTodo(id)
    }

    return (
        <div className='todo-item-container'>
            <h1 className='todo-name'>{todoName} (Changed {count} times)</h1>
            <div className='edit-delete-container'>
                <FaPen className="icon" onClick={onClickEdit}/>
                <RxCross2 className="icon delete-icon" onClick={onClickDelete}/>
            </div>
        </div>
    )
}

export default TodoItem;