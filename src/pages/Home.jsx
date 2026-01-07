import Hero from "../components/Hero";
import WhyChooseUs from "../components/WhyChooseUs";
import Footer from "../components/Footer";
import OurProducts from "./OurProducts";
import FloatingCallButton from "../components/FloatingCallButton";

export default function Home() {
    return (
        <>
            <Hero />
            <section className="py-04 px-6 lg:px-16 bg-white mb-10">
                <div className="max-w-4xl mx-auto text-center">

                    <p className="text-4xl  text-blue-700 font-light">
                        About Storeweiss Equipments
                    </p>
                    <br />

                    <p className="mt-6 text-gray-600 leading-relaxed text-lg">
                        Storeweiss Equipments is a trusted provider of high-quality warehouse
                        and industrial storage solutions. We specialize in designing,
                        manufacturing, and installing customized racking systems that help
                        businesses maximize space, efficiency, and safety.
                    </p>

                </div>
            </section>


            <WhyChooseUs />
            <OurProducts />
            <Footer />
            <FloatingCallButton />
        </>
    );
};
