import CrossIcon from "./Icons/CrossIcon";
import CheckIcon from "./Icons/CheckIcon";

const TodoItem = ({ todo, removeTodo, updateTodo }) => {
    const { id, title, completed } = todo;

    return (
        <article className="flex gap-4 py-3 border-b border-b-gray-400 transition-all duration-500">
            <button
                className={`h-5 w-5 flex-none rounded-full border-2 ${completed ? "bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% grid place-items-center" : "inline-block "}`}
                onClick={() => updateTodo(id)}
            >
                {completed && <CheckIcon />}
            </button>

            <p className={`text-gray-600 dark:text-gray-300 grow ${completed && "line-through"}`}>
                {title}
            </p>
            <button className="flex-none" onClick={() => removeTodo(id)}>
                <CrossIcon />
            </button>
        </article>
    );
};
export default TodoItem;
