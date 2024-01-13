import { DragDropContext } from "@hello-pangea/dnd";

import { useEffect, useState } from "react";
import Header from "./components/Header";
import TodoComputed from "./components/TodoComputed";
import TodoCreate from "./components/TodoCreate";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";

const InitialStateTodos = JSON.parse(localStorage.getItem("todos")) || [];

const reorder = (list, startIndex, endIndex) => {
    const result = [...list];
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
};

const App = () => {
    const [todos, setTodos] = useState(InitialStateTodos);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const createTodo = (title) => {
        const newTodo = {
            id: Date.now(),
            title: title.trim(),
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

    const handleDragEnd = (result) => {
        const { destination, source } = result;
        if (!destination) return;
        if (
            source.index === destination.index &&
            source.droppableId === destination.droppableId
        )
            return;

        setTodos((prevTasks) =>
            reorder(prevTasks, source.index, destination.index)
        );
    };

    return (
        <div
            className="min-h-screen 
            bg-gray-300 
            bg-[url('src/assets/images/bg-mobile-light.jpg')] 
            bg-contain 
            bg-no-repeat  
            transition-all 
            duration-500 
          dark:bg-gray-900 
            dark:bg-[url('src/assets/images/bg-mobile-dark.jpg')] 
            md:bg-[url('src/assets/images/bg-desktop-light.jpg')] 
            md:dark:bg-[url('src/assets/images/bg-desktop-dark.jpg')]"
        >
            <Header />
            <main className="container mx-auto mt-6 px-4 md:max-w-xl">
                <TodoCreate createTodo={createTodo} />

                <DragDropContext onDragEnd={handleDragEnd}>
                    <TodoList
                        todos={filterTodos()}
                        removeTodo={removeTodo}
                        updateTodo={updateTodo}
                    />
                </DragDropContext>

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
