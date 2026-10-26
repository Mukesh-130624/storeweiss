import { useState } from "react";
import emailjs from "@emailjs/browser";
import Footer from "../components/Footer";
import FloatingCallButton from "../components/FloatingCallButton";

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submissionStatus, setSubmissionStatus] = useState("");

    async function handleSubmit(event) {
        event.preventDefault();
        setSubmissionStatus("");
        const form = event.currentTarget;

        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        if (!serviceId || !templateId || !publicKey) {
            setSubmissionStatus("Email service is not configured yet. Please try again later.");
            return;
        }

        setIsSubmitting(true);

        const formData = new FormData(form);

        // Combines fields clean for your notification layout
        const fullName = `${formData.get("firstName")} ${formData.get("lastName")}`.trim();

        const templateParams = {
            user_name: fullName,                         // Matches From Name & Visitor Name
            user_email: formData.get("email"),           // Matches Reply To & Email Address
            project_details: formData.get("message"),    // Matches Message Details
        };

        console.log("EmailJS Keys Checked:", {
            serviceId,
            templateId,
            publicKey: publicKey ? "Exists/Present" : "MISSING",
            payloadData: templateParams
        });

        try {
            await emailjs.send(serviceId, templateId, templateParams, { publicKey });
            form.reset();
            setSubmissionStatus("Your message has been sent. Thank you!");
        } catch {
            setSubmissionStatus("Your message could not be sent. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <>
            <section className="grid lg:grid-cols-2 gap-10 px-6 lg:px-16 py-20 bg-blue-100 items-center">
                {/* Form */}
                <div>
                    <h2 className="text-4xl font-light text-blue-700 mb-8">
                        Contact Us Today
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-6 max-w-md">
                        <input type="text" name="firstName" autoComplete="given-name" required className="w-full bg-transparent border-b border-blue-400 focus:outline-none" placeholder="First Name" />
                        <input type="text" name="lastName" autoComplete="family-name" required className="w-full bg-transparent border-b border-blue-400 focus:outline-none" placeholder="Last Name" />
                        <input type="email" name="email" autoComplete="email" required className="w-full bg-transparent border-b border-blue-400 focus:outline-none" placeholder="Email" />
                        <textarea name="message" required className="w-full bg-transparent border-b border-blue-400 focus:outline-none" placeholder="Message" />
                        <button type="submit" disabled={isSubmitting} className="mt-6 px-10 py-3 bg-blue-600 text-white rounded-full disabled:opacity-60">
                            {isSubmitting ? "Sending..." : "Submit"}
                        </button>
                        {submissionStatus && <p role="status" className="text-sm text-blue-800">{submissionStatus}</p>}
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