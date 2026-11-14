import Card from "../components/Card.jsx";

const values = [
  { icon: "💡", title: "Innovation", text: "We love trying new ideas and technologies." },
  { icon: "🤝", title: "Teamwork", text: "Great products come from great collaboration." },
  { icon: "✅", title: "Quality", text: "Every detail matters in what we deliver." },
];

const team = [
  { name: "Rafi Ahmed", role: "Founder & CEO", emoji: "👨‍💼" },
  { name: "Nusrat Jahan", role: "Lead Designer", emoji: "👩‍🎨" },
  { name: "Tanvir Hasan", role: "Senior Developer", emoji: "👨‍💻" },
  { name: "Mim Akter", role: "Project Manager", emoji: "👩‍💼" },
];

export default function About() {
  return (
    <>
      {/* Section 1: Page Banner */}
      <section className="page-banner">
        <div className="container">
          <h1>About Us</h1>
          <p>Learn more about who we are and what we do.</p>
        </div>
      </section>

      {/* Section 2: Our Story */}
      <section className="section">
        <div className="container split">
          <div>
            <h2 className="section-title left">Our Story</h2>
            <p>
              TechNova started in 2020 with a small team and a big dream: to help
              businesses succeed online. Today we work with clients across the
              world, building fast and beautiful web applications.
            </p>
            <p>
              We believe in clean code, clear communication and honest work.
            </p>
          </div>
          <div className="story-box">🚀</div>
        </div>
      </section>

      {/* Section 3: Mission & Values */}
      <section className="section section-light">
        <div className="container">
          <h2 className="section-title">Our Mission & Values</h2>
          <div className="grid grid-3">
            {values.map((v) => (
              <Card key={v.title} {...v} />
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Team */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Meet Our Team</h2>
          <div className="grid grid-4">
            {team.map((m) => (
              <div className="member" key={m.name}>
                <div className="avatar">{m.emoji}</div>
                <h3>{m.name}</h3>
                <p>{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
