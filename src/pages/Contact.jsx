import Footer from "../components/Footer";
import FloatingCallButton from "../components/FloatingCallButton";

export default function Contact() {
    return (
        <>
            <section className="grid lg:grid-cols-2 gap-10 px-6 lg:px-16 py-20 bg-blue-100 items-center">
                {/* Form */}
                <div>
                    <h2 className="text-4xl font-light text-blue-700 mb-8">
                        Contact Us Today
                    </h2>
                    <form className="space-y-6 max-w-md">
                        <input className="w-full bg-transparent border-b border-blue-400 focus:outline-none" placeholder="First Name" />
                        <input className="w-full bg-transparent border-b border-blue-400 focus:outline-none" placeholder="Last Name" />
                        <input className="w-full bg-transparent border-b border-blue-400 focus:outline-none" placeholder="Email" />
                        <textarea className="w-full bg-transparent border-b border-blue-400 focus:outline-none" placeholder="Message" />
                        <button className="mt-6 px-10 py-3 bg-blue-600 text-white rounded-full">
                            Submit
                        </button>
                    </form>
                </div>


                {/* Image */}
                <img
                    src="/contact-warehouse.jpg"
                    alt="Warehouse"
                    className="rounded-xl h-[420px] w-full object-cover"
                />
            </section>
            <Footer />
            <FloatingCallButton />
        </>
    );
}