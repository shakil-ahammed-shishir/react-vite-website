import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h3 className="logo">
            Tech<span>Nova</span>
          </h3>
          <p>Building modern web experiences with React and passion.</p>
        </div>
        <div>
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul>
            <li>hello@technova.com</li>
            <li>+880 1234 567 890</li>
            <li>Dhaka, Bangladesh</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        © {year} TechNova. All rights reserved.
      </div>
    </footer>
  );
}
