export default function Hero() {
    return (
        <section className="grid gap-8 px-6 lg:px-16 pt-28 pb-12 items-center
                    lg:grid-cols-[2.5fr_1fr] 
">
            {/* Image */}
            <img
                src="/warehouse-hero.jpg"
                alt="Warehouse"
                className="w-full h-[600px] object-cover rounded-xl "
            />


            {/* Content Box */}
            <div className="border border-slate-300 p-10 rounded-xl bg-white">

                <h2 className="text-4xl lg:text-5xl font-light text-blue-700 leading-tight mt-4">
                    Advanced Warehouse & Storage
                    <br /> Solutions
                </h2>

                <button
                    className="mt-8 px-8 py-3 bg-blue-600 text-white rounded-full
                                transition-all duration-300
                                hover:bg-blue-700 hover:shadow-lg"
                >
                    Discover More
                </button>

            </div>

        </section>
    );
}