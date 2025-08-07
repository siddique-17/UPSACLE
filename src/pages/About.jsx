import './About.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
// Import React Icons
import { 
  FaCheckCircle,
  FaChartLine,
  FaBullseye,
  FaUsers,
  FaChartBar,
  FaSync,
  FaBolt,
  FaDollarSign 
} from 'react-icons/fa';

// Import your images - replace these with actual paths
import aboutHeroImg from '../assets/hero.jpeg';
import sarahImg from '../assets/profile.png';
import michaelImg from '../assets/profile.png';
import priyaImg from '../assets/profile.png';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <>
      {/* <Navbar /> */}
      <main className="about">
        {/* ========== ABOUT HERO ========== */}
        <section className="about-hero">
          <div className="about-hero__content">
            <h1>About <span className="accent">UPSCALE</span></h1>
            <p>
              We're a team of e-commerce experts dedicated to helping
              businesses scale their online presence across Amazon, Flipkart,
              Jiomart, and Meesho. Our mission is to transform your e-
              commerce potential into measurable growth and success.
            </p>

            <div className="stats-row">
              <div className="stat">
                <strong>500+</strong>
                <span>Happy Clients</span>
              </div>
              <div className="stat">
                <strong>95%</strong>
                <span>Success Rate</span>
              </div>
              <div className="stat">
                <strong>300%</strong>
                <span>Average Growth</span>
              </div>
              <div className="stat">
                <strong>24/7</strong>
                <span>Support Available</span>
              </div>
            </div>
          </div>

          <div className="about-hero__image">
            <img src={aboutHeroImg} alt="Team working on analytics" />
          </div>
        </section>

        {/* ========== MISSION & VISION ========== */}
        <section className="mission-vision">
          <div className="mission-vision__content">
            <div className="mission">
              <h2>Our Mission</h2>
              <p>
                  At Upscale, our mission is to empower small and medium businesses to grow online by providing affordable, effective, and result-driven e-commerce solutions.
                  We are committed to helping entrepreneurs launch, manage, and scale their businesses across platforms like Amazon, Flipkart, Meesho, and more.
                  Our goal is to be the trusted growth partner for every seller by offering expert services in account management, product listings, branding, and marketing — all under one roof.
                  We believe in growth with integrity, personalized support, and building long-term relationships that help our clients succeed in the digital world.
              </p>
              
              <ul className="mission-list">
                <li>
                  <FaCheckCircle className="check-icon" />
                  Maximize your e-commerce potential
                </li>
                <li>
                  <FaCheckCircle className="check-icon" />
                  Deliver measurable results and ROI
                </li>
                <li>
                  <FaCheckCircle className="check-icon" />
                  Provide exceptional customer service
                </li>
              </ul>
            </div>

            <div className="vision">
              <h2>Our Vision</h2>
              <p>
                Our vision at Upscale is to become South India's leading e-commerce growth partner — trusted by thousands of sellers for driving real online success.
                We aim to revolutionize the digital journey for small and medium businesses by making e-commerce simple, accessible, and profitable for everyone.
                We envision a future where every local seller can compete globally, build their brand, and grow without limits — all with the power of the right support and strategy.
              </p>

              <div className="growth-highlight">
                <FaChartLine className="growth-icon" />
                <div>
                  <h3>Growth-Focused Approach</h3>
                  <p>
                    Every strategy we implement is designed with one goal in mind:
                    sustainable, long-term growth for your business.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========== LEADERSHIP TEAM ========== */}
        <section className="leadership">
          <h2>Meet Our Leadership Team</h2>
          <p className="leadership__subtitle">
            Our experienced leaders bring decades of combined expertise in e-commerce,
            marketing, and business development.
          </p>

          <div className="team-grid">
            <div className="team-member">
              <div className="member-image">
                <img src={sarahImg} alt="Sarah Johnson" />
              </div>
              <h3>Person-1</h3>
              <p className="member-title">CEO & Founder</p>
              <p className="member-desc">
                Former Amazon executive with 10+ years in e-
                commerce strategy and business development.
              </p>
            </div>

            <div className="team-member">
              <div className="member-image">
                <img src={michaelImg} alt="Michael Chen" />
              </div>
              <h3>Person-2</h3>
              <p className="member-title">Head of Operations</p>
              <p className="member-desc">
                E-commerce optimization expert specializing in
                conversion rate improvement and analytics.
              </p>
            </div>

            <div className="team-member">
              <div className="member-image">
                <img src={priyaImg} alt="Priya Sharma" />
              </div>
              <h3>Person-3</h3>
              <p className="member-title">Marketing Director</p>
              <p className="member-desc">
                Digital marketing strategist with expertise in PPC
                campaigns and brand positioning.
              </p>
            </div>
          </div>
        </section>

        {/* ========== WHY CHOOSE UPSCALE ========== */}
        <section className="why-choose">
          <h2>Why Choose UPSCALE</h2>
          <p className="why-choose__subtitle">
            We combine industry expertise with proven strategies to deliver exceptional
            results for your e-commerce business.
          </p>

          <div className="reasons-grid">
            <div className="reason-card">
              <FaBullseye className="reason-icon" />
              <h3>Proven Track Record</h3>
              <p>
                Over 500+ successful client partnerships with an average
                growth rate of 300% across all major platforms.
              </p>
            </div>

            <div className="reason-card">
              <FaUsers className="reason-icon" />
              <h3>Expert Team</h3>
              <p>
                Our team consists of former platform executives and
                certified specialists with deep industry knowledge.
              </p>
            </div>

            <div className="reason-card">
              <FaChartBar className="reason-icon" />
              <h3>Data-Driven Approach</h3>
              <p>
                Every decision is backed by comprehensive analytics
                and market research to ensure optimal results.
              </p>
            </div>

            <div className="reason-card">
              <FaSync className="reason-icon" />
              <h3>Comprehensive Service</h3>
              <p>
                From account setup to advanced optimization, we handle
                every aspect of your e-commerce journey.
              </p>
            </div>

            <div className="reason-card">
              <FaBolt className="reason-icon" />
              <h3>24/7 Support</h3>
              <p>
                Round-the-clock monitoring and support to ensure your
                business never misses an opportunity.
              </p>
            </div>

            <div className="reason-card">
              <FaDollarSign className="reason-icon" />
              <h3>Guaranteed ROI</h3>
              <p>
                We're so confident in our services that we offer
                performance guarantees and ROI commitments.
              </p>
            </div>
          </div>
        </section>

        {/* ========== CTA SECTION ========== */}
        <section className="about-cta">
          <div className="about-cta__content">
            <h2>Ready to Scale Your Business?</h2>
            <p>
              Join hundreds of successful businesses who trust UPSCALE to drive
              their e-commerce growth.
            </p>
            <div className="cta-buttons">
               <Link to="/contact" className="btn-primary1">Get Started Today</Link>
               <Link to="/services" className="btn-outline1">View Services</Link>
            </div>
          </div>
        </section>
      </main>
      {/* <Footer /> */}
    </>
  );
}
