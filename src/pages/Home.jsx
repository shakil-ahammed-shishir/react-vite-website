import { Link } from "react-router-dom";
import Card from "../components/Card.jsx";

const features = [
  { icon: "⚡", title: "Fast Performance", text: "Lightning-fast apps built with React and Vite." },
  { icon: "🎨", title: "Beautiful Design", text: "Clean, modern and responsive user interfaces." },
  { icon: "🔒", title: "Secure & Reliable", text: "Best practices to keep your product safe." },
];

const stats = [
  { number: "120+", label: "Projects Done" },
  { number: "80+", label: "Happy Clients" },
  { number: "5+", label: "Years Experience" },
  { number: "24/7", label: "Support" },
];

export default function Home() {
  return (
    <>
      {/* Section 1: Hero */}
      <section className="hero">
        <div className="container">
          <h1>We Build <span>Modern Websites</span> That Grow Your Business</h1>
          <p>TechNova helps startups and companies launch fast, beautiful and scalable web apps.</p>
          <div className="btn-group">
            <Link to="/services" className="btn btn-primary">Our Services</Link>
            <Link to="/contact" className="btn btn-outline">Contact Us</Link>
          </div>
        </div>
      </section>

      {/* Section 2: Features */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Why Choose Us</h2>
          <div className="grid grid-3">
            {features.map((f) => (
              <Card key={f.title} {...f} />
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Stats */}
      <section className="section section-dark">
        <div className="container grid grid-4">
          {stats.map((s) => (
            <div className="stat" key={s.label}>
              <h3>{s.number}</h3>
              <p>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4: Call To Action */}
      <section className="section">
        <div className="container cta">
          <h2>Ready to start your project?</h2>
          <p>Let's turn your idea into a real product today.</p>
          <Link to="/contact" className="btn btn-primary">Get In Touch</Link>
        </div>
      </section>
    </>
  );
}
