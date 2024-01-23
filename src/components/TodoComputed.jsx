const TodoComputed = ({ computedItemsLeft, clearCompleted }) => {
    return (
        <section className="py-3 px-4 flex justify-between bg-white rounded-b-md dark:bg-gray-800 transition-all duration-500">
            <span className="text-gray-500">
                {computedItemsLeft} items no completados
            </span>
            <button className="text-gray-500" onClick={clearCompleted}>
                Limpiar completadas
            </button>
        </section>
    );
};
export default TodoComputed;
