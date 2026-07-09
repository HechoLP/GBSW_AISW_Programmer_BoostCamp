import { useRef, useState } from "react";

const TodoList = () => {
    const [todos, setTodo] = useState([
        { id: 1, content: "잠자기" },
        { id: 2, content: "밥먹기" },
        { id: 3, content: "놀기" },
        { id: 4, content: "공부하기" },
    ]);

    const [text, setText] = useState("");
    const textRef = useRef();

    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    const handleCheck = () => {
        if (text.length >= 5) {
            alert(text);
        } else {
            textRef.current.focus();
        }
    };

    return (
        <>
            <h1>TodoList 화면입니다.</h1>

            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        {todo.id} - {todo.content}
                    </li>
                ))}
            </ul>

            <input
                ref={textRef}
                value={text}
                onChange={handleOnChange}
            />

            <button onClick={handleCheck}>확인</button>
        </>
    );
};

export default TodoList;