import { FiPhone, FiMail, FiGlobe } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-slate-800 text-gray-300 px-6 lg:px-16 py-16">
            <div className="grid md:grid-cols-2 gap-10">

                {/* Left Section */}
                <div>
                    <h3 className="text-3xl text-gray-100 font-light">
                        STOREWEISS EQUIPMENTS
                    </h3>

                    <div className="mt-6 space-y-3 text-base">

                        <p className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors duration-200 cursor-pointer">
                            <FiPhone className="text-blue-400" />
                            +91-9822188194
                        </p>

                        <p className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors duration-200 cursor-pointer">
                            <FiMail className="text-blue-400" />
                            info@storeweiss.com
                        </p>

                        <p className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors duration-200 cursor-pointer">
                            <FiGlobe className="text-blue-400" />
                            www.storeweiss.com
                        </p>

                    </div>
                </div>


                {/* Right Section */}
                <div className="md:text-right text-base flex flex-col justify-end">
                    <Link to="/privacy-policy" className="hover:text-blue-400">
                        Privacy Policy
                    </Link>

                </div>
            </div>

            <div className="mt-10 text-sm text-gray-400 text-center space-y-1">
                <p>
                    © 2025 STOREWEISS EQUIPMENTS. Powered by React
                </p>

                <p className="opacity-70">
                    Designed and Developed by MS Tech Solutions.
                </p>
            </div>



        </footer>
    );
}
