import Footer from "../components/Footer";
import { useState } from "react";
import FloatingCallButton from "../components/FloatingCallButton";

const clients = [
    "client1.png",
    "client2.jpg",
    "client3.png",
    "client4.jpg",
    "client5.jpg",
    "client6.png",
    "client7.png",
    "client8.png",
    "client9.jpg",
    "client10.jpg",
    "client11.png",
    "client12.jpg",
    "client13.png",
    "client14.jpg",
    "client15.png",
];

const testimonials = [
    { name: "Manufacturing Client", text: "Storeweiss delivered reliable racking solutions that improved our warehouse efficiency." },
    { name: "Logistics Partner", text: "Professional execution, timely installation, and excellent quality." },
    { name: "Retail Distributor", text: "Their customized storage solutions perfectly matched our requirements." },
    { name: "E-commerce Warehouse", text: "Excellent space optimization and strong racking systems." },
    { name: "Automobile Supplier", text: "High-quality material and very professional installation team." },
    { name: "Pharma Company", text: "Safe, compliant, and well-designed storage solutions." },
    { name: "FMCG Distributor", text: "Timely delivery and excellent after-sales support." },
    { name: "Cold Storage Client", text: "Durable racks designed perfectly for temperature-controlled environments." },
];

export default function About() {
    const [index, setIndex] = useState(0);
    const itemsPerSlide = 4;
    const totalSlides = Math.ceil(testimonials.length / itemsPerSlide);

    return (
        <>
            {/* HERO IMAGE */}
            <section className="w-full">
                <img
                    src="/about/about-hero.jpg"
                    alt="About Storeweiss Equipments"
                    className="w-full h-[260px] sm:h-[320px] md:h-[380px] lg:h-[420px] object-cover"
                />
            </section>

            {/* ABOUT INTRO */}
            <section className="px-6 py-14 max-w-5xl mx-auto text-center">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-blue-700">
                    About STOREWEISS EQUIPMENTS
                </h2>
                <p className="mt-6 text-gray-600 leading-relaxed text-base sm:text-lg">
                    STOREWEISS EQUIPMENTS is a Proprietorship based company since 2018, at
                    Tarapur-Boisar, Maharashtra and set as a business objective to
                    manufacture, Slotted Angle, Shelving Racks/2 tier/3 tier Racking
                    System, Mobile Racks (Compactors), Heavy Duty Pallet Racks, Industrial
                    Lockers, Personal Lockers, Cupboards,trolleys and Filing Cabinets. The
                    complete assortment is manufactured utilizing qualitative raw material
                    and higher techniques, which have made them best in terms of
                    consistency and effectiveness.
                </p>

                <p className="mt-6 text-gray-600 leading-relaxed text-base sm:text-lg">
                    We are committed to design, manufacture and install a wide range of
                    Industrial Storage Systems which are standardized as well as
                    custom-built, to suit the specific requirements of our clients.
                </p>

                {/* <p className="mt-6 text-gray-600 leading-relaxed text-base sm:text-lg">
                    We would like to introduce ourselves as leading manufacturers for a wide range of Office,
                    Filing Systems, Modern Steel Slotted Angle Structures, Palletized Structure & Mezzanine Floor.

                </p> */}

                <p className="mt-6 text-gray-600 leading-relaxed text-base sm:text-lg">we have developed excellent business relations in Banks, Educational Institutes, Hospitals and
                    Commercial establishments, large and small scale Industries, Public and Private sectors & Shops And
                    the list is ever growing each and every activity revolves around the customer - whether it is designing
                    products, giving value for money or providing excellent sales/services, every time.</p>
                <p className="mt-6 text-gray-600 leading-relaxed text-base sm:text-lg">
                    We understand that you also require the same storage systems introduced by us, for
                    meeting the storage needs at your stores and offices. The unmatched quality and the durability of
                    storeweiss equipments will always be an assetto your company.We request you to kindly update our
                    name in your database and forward all your valued enquiries to us whenever the need arises.
                </p>
            </section>

            {/* WHY CHOOSE US */}
            <section className="bg-gray-50 px-6 lg:px-16 py-16">
                <div className="grid gap-12 lg:grid-cols-2 items-center max-w-7xl mx-auto">

                    {/* TEXT */}
                    <div>
                        <h3 className="text-3xl sm:text-4xl font-light text-blue-700 mb-6">
                            Why Choose Storeweiss
                        </h3>

                        <ul className="space-y-4 text-gray-600 text-lg">
                            <li>✔ Customized warehouse storage solutions</li>
                            <li>✔ High-quality materials & safety compliance</li>
                            <li>✔ Expert design and installation team</li>
                            <li>✔ Reliable after-sales service & support</li>
                        </ul>
                    </div>

                    {/* IMAGE */}
                    <img
                        src="/about/why-choose-us.jpg"
                        alt="Why Choose Us"
                        className="w-full h-[260px] sm:h-[320px] lg:h-[380px] object-cover rounded-xl"
                    />
                </div>
            </section>

            {/* TESTIMONIALS */}
            <section className="px-6 lg:px-16 py-16 bg-white">
                <h3 className="text-2xl sm:text-3xl text-center font-light text-blue-700 mb-10">
                    What Our Clients Say
                </h3>

                {/* SLIDER */}
                <div className="overflow-hidden max-w-7xl mx-auto">
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{
                            transform: `translateX(-${index * 100}%)`,
                        }}
                    >
                        {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                            <div
                                key={slideIndex}
                                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full flex-shrink-0"
                            >
                                {testimonials
                                    .slice(
                                        slideIndex * itemsPerSlide,
                                        slideIndex * itemsPerSlide + itemsPerSlide
                                    )
                                    .map((t, i) => (
                                        <div
                                            key={i}
                                            className="border border-slate-200 p-6 rounded-xl shadow-sm bg-white"
                                        >
                                            <p className="text-gray-600 italic text-sm sm:text-lg">
                                                “{t.text}”
                                            </p>
                                            <h4 className="mt-4 font-medium text-slate-800">
                                                {t.name}
                                            </h4>
                                        </div>
                                    ))}
                            </div>
                        ))}
                    </div>
                </div>

                {/* DOTS */}
                <div className="flex justify-center gap-3 mt-8">
                    {Array.from({ length: totalSlides }).map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setIndex(i)}
                            className={`w-3 h-3 rounded-full transition-all duration-300
              ${index === i ? "bg-blue-600 scale-125" : "bg-blue-300"}
            `}
                        />
                    ))}
                </div>
            </section>


            {/* OUR CLIENTS – CONTINUOUS SLIDER */}
            <section className="bg-gray-100 py-14 overflow-hidden">
                <h3 className="text-2xl sm:text-3xl text-center font-light text-blue-700 mb-8">
                    Our Clients
                </h3>

                <div className="relative overflow-hidden">
                    <div className="flex gap-16 animate-marquee whitespace-nowrap">
                        {[...clients, ...clients].map((logo, i) => (
                            <img
                                key={i}
                                src={`/clients/${logo}`}
                                alt="Client Logo"
                                className="h-14 sm:h-16 lg:h-18 object-contain inline-block"
                            />
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
            <FloatingCallButton />
        </>
    );
}
