import { Droppable, Draggable } from "@hello-pangea/dnd";

import TodoItem from "./TodoItem";

const TodoList = ({ todos, removeTodo, updateTodo }) => {
    return (
        <Droppable droppableId="todos">
            {(droppableProvider) => (
                <div
                    ref={droppableProvider.innerRef}
                    {...droppableProvider.droppableProps}
                    className="bg-white rounded-t-md overflow-hidden [&>article]:px-4 mt-8 dark:bg-gray-800 transition-all duration-500"
                >
                    {todos.map((todo, index) => (
                        <Draggable
                            key={todo.id}
                            index={index}
                            draggableId={`${todo.id}`}
                        >
                            {(draggableProvider) => (
                                <TodoItem
                                    todo={todo}
                                    removeTodo={removeTodo}
                                    updateTodo={updateTodo}
                                    ref={draggableProvider.innerRef}
                                    {...draggableProvider.dragHandleProps}
                                    {...draggableProvider.draggableProps}
                                />
                            )}
                        </Draggable>
                    ))}

                    {droppableProvider.placeholder}
                </div>
            )}
        </Droppable>
    );
};

export default TodoList;
