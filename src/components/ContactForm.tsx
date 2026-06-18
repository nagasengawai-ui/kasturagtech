import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
} from "lucide-react";

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    company: "",
    interest: "Cloud Infrastructure",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "submitting" | "submitted" | "error"
  >("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formState.name || !formState.message) {
      setStatus("error");
      return;
    }

    setStatus("submitting");

    const message = `
Name: ${formState.name}
Company: ${formState.company}
Service: ${formState.interest}

Message:
${formState.message}
`;

    setTimeout(() => {
      setStatus("submitted");

      // Open default email app
      window.location.href = `mailto:kasturagtech@gmail.com?subject=${encodeURIComponent(
        "New Inquiry - " + formState.interest
      )}&body=${encodeURIComponent(message)}`;

      // Reset form
      setFormState({
        name: "",
        company: "",
        interest: "Cloud Infrastructure",
        message: "",
      });

      setTimeout(() => {
        setStatus("idle");
      }, 5000);
    }, 1000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-24 bg-white" id="contact-form">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side */}
          <div className="space-y-8">
            <span className="inline-flex items-center bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold uppercase">
              Get in Touch
            </span>

            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 leading-tight">
              Contact Kasturag Tech
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Let's Build the Future Together
              </span>
            </h1>

            <p className="text-lg text-slate-600">
              Ready to scale your enterprise code with modern standards and
              optimized infrastructure? Reach out today.
            </p>

            {/* Email */}
            <div className="flex gap-4 items-center">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
                <Mail size={20} />
              </div>

              <div>
                <p className="text-xs uppercase text-slate-500 font-bold">
                  Email Contact
                </p>

                <a
                  href="mailto:kasturagtech@gmail.com"
                  className="font-bold text-slate-800 hover:text-blue-600"
                >
                  kasturagtech@gmail.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4 items-center">
              <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600">
                <Phone size={20} />
              </div>

              <div>
                <p className="text-xs uppercase text-slate-500 font-bold">
                  Integration Hot-Line
                </p>

                <a
                  href="tel:+919699214019"
                  className="font-bold text-slate-800 hover:text-indigo-600"
                >
                  +91 96992 14019
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="flex gap-4 items-center">
              <div className="w-12 h-12 bg-violet-50 rounded-xl flex items-center justify-center text-violet-600">
                <MapPin size={20} />
              </div>

              <div>
                <p className="text-xs uppercase text-slate-500 font-bold">
                  Principal Headquarters
                </p>

                <p className="font-bold text-slate-800">
                  IT Park, Nashik, Maharashtra 422013, India
                </p>
              </div>
            </div>
          </div>

          {/* Right Side Form */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Inquiry Form
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  required
                  value={formState.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="border border-slate-300 rounded-xl px-4 py-3 w-full focus:outline-none focus:border-blue-600"
                />

                <input
                  type="text"
                  name="company"
                  value={formState.company}
                  onChange={handleChange}
                  placeholder="Company"
                  className="border border-slate-300 rounded-xl px-4 py-3 w-full focus:outline-none focus:border-blue-600"
                />
              </div>

              <select
                name="interest"
                value={formState.interest}
                onChange={handleChange}
                className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-600"
              >
                <option>AI-Driven Transformation</option>
                <option>Web Platforms</option>
                <option>Cloud Infrastructure</option>
                <option>Mobile Ecosystems</option>
                <option>DevOps & Automation</option>
              </select>

              <textarea
                name="message"
                required
                rows={5}
                value={formState.message}
                onChange={handleChange}
                placeholder="How can we assist you?"
                className="w-full border border-slate-300 rounded-xl px-4 py-3 resize-none focus:outline-none focus:border-blue-600"
              />

              {status === "submitted" && (
                <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-green-700 flex gap-3">
                  <CheckCircle2 size={18} />
                  <div>
                    <p className="font-semibold">
                      Inquiry transmitted successfully!
                    </p>
                  </div>
                </div>
              )}

              {status === "error" && (
                <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-red-700 flex gap-3">
                  <AlertCircle size={18} />
                  <div>
                    <p className="font-semibold">
                      Please fill Name and Message.
                    </p>
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={
                  status === "submitting" || status === "submitted"
                }
                className="w-full bg-slate-900 hover:bg-slate-800 text-white rounded-xl py-4 flex justify-center items-center gap-2 transition"
              >
                {status === "submitting"
                  ? "Sending..."
                  : status === "submitted"
                  ? "Inquiry Received"
                  : "Send Inquiry"}

                {status === "idle" && <ArrowRight size={18} />}
              </button>

              {/* Email and WhatsApp Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href="mailto:kasturagtech@gmail.com"
                  className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-3 text-center font-semibold transition"
                >
                  📧 Email Us
                </a>

                <a
                  href="https://wa.me/919699214019"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 text-white rounded-xl py-3 text-center font-semibold transition"
                >
                  💬 WhatsApp
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}