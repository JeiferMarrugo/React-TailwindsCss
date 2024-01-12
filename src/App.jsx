import CrossIcon from "./components/CrossIcon";
import MoonIcon from "./components/MoonIcon";

const App = () => {
    return (
        <div className="bg-[url('src/assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-container bg-gray-300 min-h-screen">
            <header className="container pt-8 mx-auto px-4">
                <div className="flex justify-between">
                    <h1 className="uppercase text-white text-2xl font-semibold tracking-[0.4em]">
                        Tareas
                    </h1>
                    <button>
                        <MoonIcon fill={'#fff'}/>
                    </button>
                </div>
                <form
                    action=""
                    className="rounded-md bg-white overflow-hidden py-3 gap-4 flex items-center pl-4 mt-8"
                >
                    <span className="rounded-full border-2 inline-block h-5 w-5"></span>
                    <input
                        className="w-full text-gray-400 outline-none"
                        type="text"
                        placeholder="Crear nueva tarea"
                    />
                </form>
            </header>
            <main className="container mx-auto mt-6 px-4">
                <div className="bg-white rounded-md [&>article]:px-4">
                    <article className="flex gap-4 py-3 border-b border-b-gray-400">
                        <button className="rounded-full border-2 inline-block h-5 w-5 flex-none"></button>
                        <p className="text-gray-600 grow">Complete</p>
                        <button className="flex-none">
                            <CrossIcon />
                        </button>
                    </article>

                    <article className="flex gap-4 py-3 border-b border-b-gray-400">
                        <button className="rounded-full border-2 inline-block h-5 w-5 flex-none"></button>
                        <p className="text-gray-600 grow">Complete</p>
                        <button className="flex-none">
                            <CrossIcon />
                        </button>
                    </article>

                    <article className="flex gap-4 py-3 border-b border-b-gray-400">
                        <button className="rounded-full border-2 inline-block h-5 w-5 flex-none"></button>
                        <p className="text-gray-600 grow">Complete</p>
                        <button className="flex-none">
                            <CrossIcon />
                        </button>
                    </article>
                    <section className="py-3 px-4 flex justify-between">
                        <span className="text-gray-500">
                            3 items no completados
                        </span>
                        <button className="text-gray-500">
                            Limpiar completadas
                        </button>
                    </section>
                </div>
            </main>

            <section className="container mx-auto px-4 mt-6">
                <div className="bg-white px-4 py-3 rounded-md flex justify-center gap-4">
                    <button className="text-blue-600">All</button>
                    <button className="hover:text-blue-600">Active</button>
                    <button className="hover:text-blue-600">Completed</button>
                </div>
            </section>
        </div>
    );
};

export default App;
