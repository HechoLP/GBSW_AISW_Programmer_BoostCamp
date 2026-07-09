const TodoItem = ({ todo }) => {
    return (
        <li>
            {todo.id} - {todo.content}
        </li>
    );
};

export default TodoItem;