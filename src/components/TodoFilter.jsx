const TodoFilter = ({ changeFilter, filter }) => {
    return (
        <section className="container mx-auto  mt-6 ">
            <div className="bg-white px-4 py-3 rounded-md flex justify-center gap-4 dark:bg-gray-800 transition-all duration-500">
                <button
                    className={` transition-all duration-500 ${filter === "All" ? "text-blue-600" : "text-gray-600"} `}
                    onClick={() => changeFilter("All")}
                >
                    All
                </button>
                <button
                    className={`transition-all duration-500 ${filter === "Active" ? "text-blue-600" : "text-gray-600"}`}
                    onClick={() => changeFilter("Active")}
                >
                    Active
                </button>
                <button
                   className={`transition-all duration-500 ${filter === "Completed" ? "text-blue-600" : "text-gray-600"} `}
                    onClick={() => changeFilter("Completed")}
                >
                    Completed
                </button>
            </div>
        </section>
    );
};

export default TodoFilter;
