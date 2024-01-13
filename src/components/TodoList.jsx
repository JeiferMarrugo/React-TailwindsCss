import TodoItem from "./TodoItem";

const TodoList = ({ todos, removeTodo, updateTodo }) => {
    return (
        <div className="bg-white rounded-t-md overflow-hidden [&>article]:px-4 mt-8 dark:bg-gray-800 transition-all duration-500">
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} removeTodo={removeTodo} updateTodo={updateTodo}/>
            ))}
        </div>
    );
};

export default TodoList;
