import { Link } from "react-router-dom";
import Card from "../components/Card.jsx";

const services = [
  { icon: "🌐", title: "Web Development", text: "Responsive websites and web apps using React." },
  { icon: "📱", title: "UI/UX Design", text: "User-friendly designs that people love to use." },
  { icon: "🛒", title: "E-Commerce", text: "Online stores with smooth checkout experience." },
  { icon: "🔧", title: "Maintenance", text: "Updates, bug fixes and performance tuning." },
  { icon: "🔍", title: "SEO Optimization", text: "Get found on Google and grow your traffic." },
  { icon: "☁️", title: "Cloud Hosting", text: "Fast and secure deployment for your project." },
];

const steps = [
  { no: "01", title: "Discuss", text: "We understand your goals." },
  { no: "02", title: "Design", text: "We create the look and feel." },
  { no: "03", title: "Develop", text: "We build with clean code." },
  { no: "04", title: "Deliver", text: "We launch and support you." },
];

const plans = [
  { name: "Basic", price: "$299", items: ["1 Page Website", "Responsive Design", "1 Month Support"] },
  { name: "Standard", price: "$699", items: ["5 Page Website", "Custom Design", "3 Months Support"], featured: true },
  { name: "Premium", price: "$1299", items: ["10+ Pages", "E-Commerce Ready", "6 Months Support"] },
];

export default function Services() {
  return (
    <>
      {/* Section 1: Page Banner */}
      <section className="page-banner">
        <div className="container">
          <h1>Our Services</h1>
          <p>Everything you need to build and grow online.</p>
        </div>
      </section>

      {/* Section 2: Services List */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">What We Offer</h2>
          <div className="grid grid-3">
            {services.map((s) => (
              <Card key={s.title} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Work Process */}
      <section className="section section-light">
        <div className="container">
          <h2 className="section-title">How We Work</h2>
          <div className="grid grid-4">
            {steps.map((s) => (
              <div className="step" key={s.no}>
                <span>{s.no}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Pricing */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Pricing Plans</h2>
          <div className="grid grid-3">
            {plans.map((p) => (
              <div className={`plan ${p.featured ? "plan-featured" : ""}`} key={p.name}>
                <h3>{p.name}</h3>
                <div className="price">{p.price}</div>
                <ul>
                  {p.items.map((i) => (
                    <li key={i}>✔ {i}</li>
                  ))}
                </ul>
                <Link to="/contact" className="btn btn-primary">Choose Plan</Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
