import { FiPhone, FiMail, FiGlobe, FiMapPin } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-gray-300 px-6 lg:px-24 py-14">
            <div className="max-w-7xl mx-auto">

                {/* BRAND */}
                <div className="mb-8">
                    <h3 className="text-2xl text-white font-medium tracking-wide">
                        STOREWEISS EQUIPMENTS
                    </h3>
                </div>

                {/* GRID */}
                <div className="grid gap-x-16 gap-y-10 md:grid-cols-2 lg:grid-cols-4 items-start">

                    {/* CONTACT */}
                    <div className="space-y-4 text-base">
                        <div className="flex items-center gap-3 transition-all duration-300 hover:text-blue-400 hover:translate-x-1 cursor-pointer">
                            <FiPhone size={18} className="text-blue-400 shrink-0" />
                            <span>+91-9822188194</span>
                        </div>

                        <div className="flex items-center gap-3 transition-all duration-300 hover:text-blue-400 hover:translate-x-1 cursor-pointer">
                            <FiMail size={18} className="text-blue-400 shrink-0" />
                            <span>storeweissequipments@gmail.com</span>
                        </div>

                        <div className="flex items-center gap-3 transition-all duration-300 hover:text-blue-400 hover:translate-x-1 cursor-pointer">
                            <FiGlobe size={18} className="text-blue-400 shrink-0" />
                            <span>www.storeweiss.in</span>
                        </div>
                    </div>


                    {/* OFFICE ADDRESS */}
                    <div className="text-base">
                        <div className="ml-6 p-3 rounded-lg transition-all duration-300
                    hover:bg-slate-800 hover:border-l-4 hover:border-blue-400">
                            <div className="flex items-center gap-2 mb-3 text-white font-medium">
                                <FiMapPin className="text-blue-400" />
                                Office Address
                            </div>

                            <p className="text-gray-400 leading-relaxed">
                                202, RH-41, RAC Residence,<br />
                                Vidhyanagar, MIDC,<br />
                                Boisar – 401501
                            </p>
                        </div>
                    </div>

                    {/* FACTORY ADDRESS */}
                    <div className="text-base">
                        <div className="ml-6 p-3 rounded-lg transition-all duration-300
                    hover:bg-slate-800 hover:border-l-4 hover:border-blue-400">
                            <div className="flex items-center gap-2 mb-3 text-white font-medium">
                                <FiMapPin className="text-blue-400" />
                                Factory Address
                            </div>

                            <p className="text-gray-400 leading-relaxed">
                                Gala No.10, Richard Industrial Estate,<br />
                                Vasai Phata, Vasai (E),<br />
                                Palghar – 401208
                            </p>
                        </div>
                    </div>

                    {/* PRIVACY */}
                    <div className="text-base lg:text-right">
                        <Link
                            to="/privacy-policy"
                            className="text-base transition-all duration-300
               hover:text-blue-400 hover:underline"
                        >
                            Privacy Policy
                        </Link>

                    </div>

                </div>

                {/* DIVIDER */}
                <div className="border-t border-slate-700 my-10"></div>

                {/* BOTTOM */}
                <div className="text-center text-sm text-gray-500 space-y-1">
                    <p>© 2025 STOREWEISS EQUIPMENTS. Powered by React</p>
                    <p>Designed and Developed by MS Tech Solutions.</p>
                </div>

            </div>
        </footer>
    );
}
