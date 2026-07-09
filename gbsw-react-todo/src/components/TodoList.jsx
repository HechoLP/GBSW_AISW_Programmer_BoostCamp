import { useState } from "react";

const TodoList = () => {
    const [todos, setTodos] = useState([
        { id: 1, content: "밥먹기" },
        { id: 2, content: "물마시기" },
        { id: 3, content: "장보기" },
    ]);

    const [input, setInput] = useState("");

    const onChangeInput = (event) => {
        setInput(event.target.value);
    };

    const onClickAdd = () => {
        if (input.trim() === "") 
            return;

        const newTodo = {
            id: todos.length + 1,
            content: input,
        };

        setTodos([...todos, newTodo]);
        setInput("");
    };

    return (
        <>
            <h1>TodoList입니다.</h1>

            <ul>
                {todos.map((item) => (
                    <li key={item.id}>
                        {item.id} - {item.content}
                    </li>
                ))}
            </ul>

            <input
                value={input}
                onChange={onChangeInput}
                placeholder="할 일을 입력하세요"
            />

            <button onClick={onClickAdd}>추가</button>

        </>
    );
};

export default TodoList;