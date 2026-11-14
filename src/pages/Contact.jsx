import { useState } from "react";
import Card from "../components/Card.jsx";

const info = [
  { icon: "📍", title: "Address", text: "House 12, Road 5, Dhaka, Bangladesh" },
  { icon: "📧", title: "Email", text: "hello@technova.com" },
  { icon: "📞", title: "Phone", text: "+880 1234 567 890" },
];

const faqs = [
  { q: "How long does a project take?", a: "Most websites are ready within 2 to 4 weeks." },
  { q: "Do you provide support after launch?", a: "Yes, every plan includes free support time." },
  { q: "Can I request changes?", a: "Of course! We include revisions in every plan." },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <>
      {/* Section 1: Page Banner */}
      <section className="page-banner">
        <div className="container">
          <h1>Contact Us</h1>
          <p>We'd love to hear from you. Send us a message!</p>
        </div>
      </section>

      {/* Section 2: Contact Info */}
      <section className="section">
        <div className="container grid grid-3">
          {info.map((i) => (
            <Card key={i.title} {...i} />
          ))}
        </div>
      </section>

      {/* Section 3: Contact Form */}
      <section className="section section-light">
        <div className="container form-wrap">
          <h2 className="section-title">Send a Message</h2>
          <form className="form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
            />
            <button type="submit" className="btn btn-primary">Send Message</button>
            {sent && <p className="success">✅ Thank you! Your message has been sent.</p>}
          </form>
        </div>
      </section>

      {/* Section 4: FAQ */}
      <section className="section">
        <div className="container faq">
          <h2 className="section-title">Frequently Asked Questions</h2>
          {faqs.map((f, index) => (
            <div className="faq-item" key={f.q}>
              <button
                className="faq-q"
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
              >
                {f.q}
                <span>{openFaq === index ? "−" : "+"}</span>
              </button>
              {openFaq === index && <p className="faq-a">{f.a}</p>}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
