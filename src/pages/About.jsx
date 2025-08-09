import { memo } from 'react';
import { Link } from 'react-router-dom';
import './About.css';
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
import aboutHeroImg from '../assets/hero.jpeg';

// Constants
const STATS_DATA = [
  { value: '500+', label: 'Happy Clients' },
  { value: '99%', label: 'Success Rate' },
  { value: '300%', label: 'Average Growth' },
  { value: '24/7', label: 'Support Available' }
];

const MISSION_POINTS = [
  'Maximize your e-commerce potential',
  'Deliver measurable results and ROI',
  'Provide exceptional customer service'
];

const TEAM_MEMBERS = [
  {
    id: 1,
    name: 'Mohamed Yaseen',
    title: 'CEO & Founder',
    description: 'With a strong vision for empowering local sellers, Yaseen leads Upscale\'s mission to help brands grow across platforms like Amazon, Flipkart, Meesho, and beyond.'
  },
  {
    id: 2,
    name: 'Mohamed Abdul Basith',
    title: 'Head of operations and accountant',
    description: 'Ensures smooth onboarding, client coordination, and seamless execution of all marketplace operations. His focus is on timely delivery and quality service.'
  }
];

const REASONS_DATA = [
  {
    icon: FaBullseye,
    title: 'Proven Track Record',
    description: 'Over 500+ successful client partnerships with an average growth rate of 300% across all major platforms.'
  },
  {
    icon: FaUsers,
    title: 'Expert Team',
    description: 'Our team consists of former platform executives and certified specialists with deep industry knowledge.'
  },
  {
    icon: FaChartBar,
    title: 'Data-Driven Approach',
    description: 'Every decision is backed by comprehensive analytics and market research to ensure optimal results.'
  },
  {
    icon: FaSync,
    title: 'Comprehensive Service',
    description: 'From account setup to advanced optimization, we handle every aspect of your e-commerce journey.'
  },
  {
    icon: FaBolt,
    title: '24/7 Support',
    description: 'Round-the-clock monitoring and support to ensure your business never misses an opportunity.'
  },
  {
    icon: FaDollarSign,
    title: 'Guaranteed ROI',
    description: 'We\'re so confident in our services that we offer performance guarantees and ROI commitments.'
  }
];

// Memoized Components
const StatItem = memo(({ value, label }) => (
  <div className="stat">
    <strong>{value}</strong>
    <span>{label}</span>
  </div>
));

const MissionPoint = memo(({ text }) => (
  <li>
    <FaCheckCircle className="check-icon" />
    {text}
  </li>
));

const TeamMember = memo(({ name, title, description }) => (
  <div className="team-member">
    <h3>{name}</h3>
    <p className="member-title">{title}</p>
    <p className="member-desc">{description}</p>
  </div>
));

const ReasonCard = memo(({ icon: Icon, title, description }) => (
  <div className="reason-card">
    <Icon className="reason-icon" />
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
));

// Main Component Sections
const AboutHero = memo(() => (
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
        {STATS_DATA.map((stat, index) => (
          <StatItem key={index} value={stat.value} label={stat.label} />
        ))}
      </div>
    </div>

    <div className="about-hero__image">
      <img src={aboutHeroImg} alt="Team working on analytics" />
    </div>
  </section>
));

const MissionVision = memo(() => (
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
          {MISSION_POINTS.map((point, index) => (
            <MissionPoint key={index} text={point} />
          ))}
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
));

const Leadership = memo(() => (
  <section className="leadership">
    <h2>Meet Our Leadership Team</h2>
    <p className="leadership__subtitle">
      Our experienced leaders bring decades of combined expertise in e-commerce,
      marketing, and business development.
    </p>

    <div className="team-grid">
      {TEAM_MEMBERS.map((member) => (
        <TeamMember 
          key={member.id}
          name={member.name}
          title={member.title}
          description={member.description}
        />
      ))}
    </div>
  </section>
));

const WhyChoose = memo(() => (
  <section className="why-choose">
    <h2>Why Choose UPSCALE</h2>
    <p className="why-choose__subtitle">
      We combine industry expertise with proven strategies to deliver exceptional
      results for your e-commerce business.
    </p>

    <div className="reasons-grid">
      {REASONS_DATA.map((reason, index) => (
        <ReasonCard 
          key={index}
          icon={reason.icon}
          title={reason.title}
          description={reason.description}
        />
      ))}
    </div>
  </section>
));

const AboutCTA = memo(() => (
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
));

// Main Component
export default function About() {
  return (
    <main className="about">
      <AboutHero />
      <MissionVision />
      <Leadership />
      <WhyChoose />
      <AboutCTA />
    </main>
  );
}
