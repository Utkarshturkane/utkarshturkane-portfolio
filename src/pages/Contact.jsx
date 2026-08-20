import { useState } from "react";
import emailjs from "@emailjs/browser";
import Reveal from "../components/Reveal";
import Magnetic from "../components/Magnetic";
import {
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
  EMAILJS_PUBLIC_KEY,
} from "../config";

const contactCards = [
  {
    label: "Email",
    value: "utkarshturkane@gmail.com",
    href: "mailto:utkarshturkane@gmail.com",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    label: "Phone",
    value: "+91 90049 93358",
    href: "tel:+919004993358",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
    ),
  },
  {
    label: "Location",
    value: "Mumbai, India",
    href: undefined,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
];

const initialForm = { name: "", email: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("sending");
    setErrorMessage("");
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          reply_to: form.email,
          message: form.message,
        },
        { publicKey: EMAILJS_PUBLIC_KEY },
      );
      setStatus("success");
      setForm(initialForm);
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error && error.text ? error.text : "Unknown EmailJS error.",
      );
    }
  };

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <Reveal y={40}>
        <h1 className="text-4xl font-extrabold">Contact</h1>
        <p className="mt-2 max-w-2xl text-base-content/70">
          Got a question, a project or just want to say hello? My inbox is always
          open.
        </p>
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-5">
        <Reveal y={40} className="space-y-4 lg:col-span-2">
          <div className="space-y-4">
            {contactCards.map((card) => {
              const inner = (
                <>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    {card.icon}
                  </div>
                  <h2 className="text-lg font-semibold">{card.label}</h2>
                  <p className="text-base-content/70">{card.value}</p>
                </>
              );
              return card.href ? (
                <a
                  key={card.label}
                  href={card.href}
                  className="card card-body bg-base-100 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  {inner}
                </a>
              ) : (
                <div
                  key={card.label}
                  className="card card-body bg-base-100 shadow-sm"
                >
                  {inner}
                </div>
              );
            })}
          </div>
        </Reveal>

        <Reveal y={40} delay={0.1} className="lg:col-span-3">
          <div className="card bg-base-100 shadow-sm">
            <div className="card-body">
              <h2 className="card-title">Send a Message</h2>
            {status === "sending" && (
              <div className="alert alert-info" role="status">
                <span className="loading loading-spinner loading-sm" />
                Sending your message...
              </div>
            )}
            {status === "success" && (
              <div className="alert alert-success" role="status">
                Thank you! Your message has been sent. I will get back to you
                soon.
              </div>
            )}
            {status === "error" && (
              <div className="alert alert-error" role="alert">
                <p>
                  Something went wrong: {errorMessage} Please try again or
                  email me directly at utkarshturkane@gmail.com.
                </p>
              </div>
            )}
            <form onSubmit={handleSubmit} className="mt-2 space-y-4">
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Name</legend>
                <input
                  type="text"
                  name="name"
                  className="input input-bordered w-full"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </fieldset>
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Email</legend>
                <input
                  type="email"
                  name="email"
                  className="input input-bordered w-full"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </fieldset>
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Message</legend>
                <textarea
                  name="message"
                  className="textarea textarea-bordered w-full"
                  rows={5}
                  placeholder="Tell me about your project..."
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </fieldset>
              <Magnetic>
              <button
                type="submit"
                className="btn btn-primary w-full sm:w-auto"
                disabled={status === "sending"}
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>
            </Magnetic>
            </form>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}