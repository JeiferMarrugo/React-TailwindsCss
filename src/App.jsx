import { useState } from "react";
import Header from "./components/Header";
import TodoComputed from "./components/TodoComputed";
import TodoCreate from "./components/TodoCreate";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";

const InitialStateTodos = [
    {
        id: 1,
        title: "Tarea 1",
        completed: true,
    },

    {
        id: 2,
        title: "Tarea 2",
        completed: false,
    },

    {
        id: 3,
        title: "Tarea 3",
        completed: true,
    },

    {
        id: 4,
        title: "Tarea 4",
        completed: false,
    },
];

const App = () => {
    const [todos, setTodos] = useState(InitialStateTodos);

    const createTodo = (title) => {
        const newTodo = {
            id: Date.now(),
            title,
            completed: false,
        };
        setTodos([...todos, newTodo]);
    };

    const removeTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const updateTodo = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const countTodo = todos.filter((todo) => !todo.completed).length;

    const clearCompleted = () => {
        setTodos(todos.filter((todo) => !todo.completed));
    };

    const [filter, setFilter] = useState("All");

    const changeFilter = (filter) => setFilter(filter);

    const filterTodos = () => {
        switch (filter) {
            case "All":
                return todos;
            case "Active":
                return todos.filter((todo) => !todo.completed);
            case "Completed":
                return todos.filter((todo) => todo.completed);
            default:
                return todos;
        }
    };

    return (
        <div className="bg-no-repeat bg-container bg-gray-300 min-h-screen bg-[url('src/assets/images/bg-mobile-light.jpg')] dark:bg-gray-900 dark:bg-[url('src/assets/images/bg-mobile-dark.jpg')] transition-all duration-500">
            <Header />
            <main className="container mx-auto mt-6 px-4">
                <TodoCreate createTodo={createTodo} />

                <TodoList
                    todos={filterTodos()}
                    removeTodo={removeTodo}
                    updateTodo={updateTodo}
                />

                <TodoComputed
                    countTodo={countTodo}
                    clearCompleted={clearCompleted}
                />

                <TodoFilter changeFilter={changeFilter} filter={filter} />
            </main>

            <footer className="mt-8 text-center dark:text-gray-300 transition-all duration-500">
                Ultimo texto
            </footer>
        </div>
    );
};

export default App;
