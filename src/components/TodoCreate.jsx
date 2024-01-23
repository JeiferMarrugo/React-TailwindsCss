import { useState } from "react";

const TodoCreate = ({ createTodo }) => {
    const [title, setTitle] = useState("");

    const handleSubmitAddTodo = (e) => {
        e.preventDefault();

        const regex = /^[a-zA-Z0-9\s]+$/;

        if (!title.trim() || !regex.test(title)) {

            return setTitle("");
        }

        createTodo(title);
        setTitle("");
    };

    return (
        <form
            action=""
            onSubmit={handleSubmitAddTodo}
            className="rounded-md bg-white overflow-hidden py-3 gap-4 flex items-center pl-4 dark:bg-gray-800 transition-all duration-500transition-all duration-500"
        >
            <span className="rounded-full border-2 inline-block h-5 w-5"></span>
            <input
                className="w-full text-gray-400 outline-none dark:bg-gray-800 transition-all duration-500"
                type="text"
                placeholder="Crear nueva tarea"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
        </form>
    );
};

export default TodoCreate;
