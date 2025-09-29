import React, { useState, useRef } from "react";

const CtaWithTheme = ({ isOpen = false, onClose = () => {} }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const formRef = useRef(null);

  const GOOGLE_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbzDacvPsyWS9YwwxUazth6a1fb7MTr2BCxmQ_wZHnUsMjY1CT6o6ghPqbuzC_y5qzAvHA/exec";

  const submitToGoogleSheets = async (formData) => {
    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors", // Important for Google Apps Script
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // With no-cors, we can't read the response, so we assume success
      return true;
    } catch (error) {
      console.error("Error submitting to Google Sheets:", error);
      throw error;
    }
  };

  const handleSubmit = async () => {
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("Please fill in all fields.");
      return;
    }

    setIsSubmitting(true);
    setError("");
    setSent(false);

    try {
      const formData = {
        name: name.trim(),
        email: email.trim(),
        message: message.trim(),
        timestamp: new Date().toISOString(),
        source: "Website Contact Form",
      };

      console.log("Submitting form data:", formData);

      await submitToGoogleSheets(formData);

      // Clear form and show success
      setSent(true);
      setName("");
      setEmail("");
      setMessage("");

      // Auto-hide success message after 5 seconds
      setTimeout(() => {
        setSent(false);
      }, 5000);
    } catch (err) {
      console.error("Form submission error:", err);
      setError(
        "Failed to send message. Please try again or contact us directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className={`fixed inset-0 z-50 ${isOpen ? "pointer-events-auto" : "pointer-events-none"}`}
    >
      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0"
        }`}
        onClick={onClose}
        aria-hidden={!isOpen}
      />

      {/* Sliding panel */}
      <aside
        className={`fixed top-0 right-0 max-w-full w-[393px] h-full bg-[#183942] text-white transform transition-transform duration-300 shadow-lg pointer-events-auto ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!isOpen}
      >
        <div className="relative h-full overflow-hidden flex flex-col">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-1 right-4 w-[94px] h-[94px] bg-[#ef4b6e] rounded-full flex items-center justify-center text-white font-semibold z-30"
            aria-label="Close contact"
          >
            Close
          </button>

          {/* Scrollable content */}
          <div className="overflow-auto flex-1 px-8 sm:px-10 pt-28 pb-32">
            <div className="flex items-start justify-between">
              <h2 className="font-syne font-bold text-white text-4xl sm:text-5xl md:text-5xl leading-[42px] sm:leading-[49px] tracking-[1.6px] max-w-[60%] -mt-9">
                To Say
                <br />
                hello
              </h2>

              {/* Compact contact (visible on sm+) */}
              <div className="hidden sm:flex flex-col text-right text-[#ffffffb3] text-xs leading-tight ml-4">
                <a href="tel:+918002315259" className="hover:underline">
                  +91-8002315259
                </a>
                <a
                  href="mailto:info@flexirl.com"
                  className="hover:underline mt-1"
                >
                  info@flexirl.com
                </a>
                <span className="mt-1">Bhubaneswar, Odisha</span>
              </div>
            </div>

            {/* contact for xs */}
            <div className="sm:hidden mt-4 text-xs text-[#ffffffb3]">
              <div>
                <a href="tel:+918002315259" className="hover:underline">
                  +91-8002315259
                </a>
              </div>
              <div className="mt-1">
                <a href="mailto:info@flexirl.com" className="hover:underline">
                  info@flexirl.com
                </a>
              </div>
            </div>

            {/* Success/Error Messages */}
            {sent && (
              <div className="mt-4 p-3 bg-green-600/20 border border-green-500/30 rounded text-green-200 text-sm">
                Thank you! Your message has been sent successfully.
              </div>
            )}

            {error && (
              <div className="mt-4 p-3 bg-red-600/20 border border-red-500/30 rounded text-red-200 text-sm">
                {error}
              </div>
            )}

            <div className="mt-8 space-y-6 pb-6">
              <div>
                <label className="text-[#ffffff85] text-[14px] tracking-[1.2px] block mb-2">
                  Name
                </label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-transparent border-b border-white border-opacity-20 py-2 text-white placeholder-white/60 outline-none focus:border-opacity-50 transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="text-[#ffffff85] text-[14px] tracking-[1.2px] block mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent border-b border-white border-opacity-20 py-2 text-white placeholder-white/60 outline-none focus:border-opacity-50 transition-colors"
                  placeholder="you@company.com"
                />
              </div>

              <div>
                <label className="text-[#ffffff85] text-[14px] tracking-[1.2px] block mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-transparent border border-white border-opacity-10 rounded-md p-3 text-white placeholder-white/60 outline-none resize-y focus:border-opacity-30 transition-colors"
                  placeholder="Tell us about your project"
                />
              </div>

              {/* spacer for footer */}
              <div style={{ height: "80px" }} />
            </div>
          </div>

          {/* Footer with contact small + socials + submit trigger */}
          <div className="absolute bottom-4 left-0 right-0 px-6">
            <div className="max-w-[393px] mx-auto flex items-center justify-center">
              <div className="w-full sm:w-auto">
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className={`w-full py-3 px-4 font-extrabold text-[12px] tracking-[1px] transition-colors ${
                    isSubmitting
                      ? "bg-gray-400 text-gray-600 cursor-not-allowed"
                      : "bg-white text-[#1c2042] hover:bg-gray-100"
                  }`}
                >
                  {isSubmitting ? "SENDING..." : "SEND"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default CtaWithTheme;
