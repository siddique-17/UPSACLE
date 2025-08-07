import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import './Home.css';
import heroImg from '../assets/hero.jpeg';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <main id="home" className="home">
      {/* <Navbar/> */}
      {/* ========== HERO ========== */}
      <section className="hero">
        <div className="hero__text">
          <h1>
            Scale&nbsp;Your&nbsp;<br /><span className="accent">E-Commerce</span>&nbsp;Business
          </h1>
          <p>
            Professional account management and optimization services for Amazon,
            Flipkart, JioMart and Meesho. Drive sales growth with our proven
            strategies and expert mentoring.
          </p>

          <ul className="stats">
            <li><strong>500+</strong><span>Happy Clients</span></li>
            <li><strong>95%</strong><span>Success Rate</span></li>
            <li><strong>24/7</strong><span>Support</span></li>
          </ul>

           <div className="btn-row">
            {/* Updated: Use Link instead of button */}
            <Link to="/contact" className="btn-primary">Get Started Today </Link>
            <Link to="/services" className="btn-outline">View Services</Link>
          </div>
        </div>

        <div className="hero__image">
          <img src={heroImg} alt="Team analysing charts" />

          <div className="badge top">
            <strong>300% Growth</strong><br />
            <span>Average Increase</span>
          </div>

          <div className="badge bottom">
            <strong>👥 Expert Team</strong><br />
            <span>Dedicated Support</span>
          </div>
        </div>
      </section>

      {/* ========== FIRST SERVICES ROW ========== */}
      {/* <section className="services-row">
        <div className="card-grid">
          {[
            {
              icon: '🎯',
              title: 'Advertising Management',
              desc: 'Strategic advertising campaigns across all platforms to maximize ROI and drive targeted traffic to your products.',
              list: ['PPC management','Campaign optimization','Budget planning','ROI tracking']
            },
            {
              icon: '👥',
              title: 'Customer Feedback',
              desc: 'Proactive customer feedback management to maintain high ratings and resolve issues before they impact your business.',
              list: ['Review monitoring','Response management','Issue resolution','Rating improvement']
            },
            {
              icon: '💡',
              title: 'Expert Mentoring',
              desc: 'One on one mentoring sessions with e-commerce experts to develop your skills and business strategy.',
              list: ['Strategic guidance','Skill development','Market insights','Growth planning']
            }
          ].map(card => (
            <article className="card" key={card.title}>
              <div className="icon">{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
              <ul>
                {card.list.map(li => <li key={li}>{li}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section> */}

      {/* ========== MAIN SERVICES SECTION ========== */}
      <section id="services" className="services">
        <h2>Comprehensive E-Commerce Services</h2>
        <p className="subtitle">
          From account setup to advanced optimization, we provide end-to-end
          solutions to scale your business across all major e-commerce platforms.
        </p>

        <div className="card-grid">
          {[
            {
              icon: '📊',
              title: 'Account Management',
              desc: 'Complete management of your Amazon, Flipkart, JioMart and Meesho accounts with daily monitoring and optimization.',
              list: ['Daily account monitoring','Performance tracking','Issue resolution','Strategy planning']
            },
            {
              icon: '🔍',
              title: 'Product Listing',
              desc: 'Professional product listing services with SEO-optimized titles, descriptions, and high-quality images.',
              list: ['SEO optimization','Professional photography','Compelling descriptions','Keyword research']
            },
            {
              icon: '📈',
              title: 'Product Optimization',
              desc: 'Data-driven optimization of your product listings to improve visibility, conversion rates, and sales performance.',
              list: ['A/B testing','Conversion optimization','Price strategy','Performance analysis']
            },
             {
              icon: '🎯',
              title: 'Advertising Management',
              desc: 'Strategic advertising campaigns across all platforms to maximize ROI and drive targeted traffic to your products.',
              list: ['PPC management','Campaign optimization','Budget planning','ROI tracking']
            },
            {
              icon: '👥',
              title: 'Customer Feedback',
              desc: 'Proactive customer feedback management to maintain high ratings and resolve issues before they impact your business.',
              list: ['Review monitoring','Response management','Issue resolution','Rating improvement']
            },
            {
              icon: '💡',
              title: 'Expert Mentoring',
              desc: 'One on one mentoring sessions with e-commerce experts to develop your skills and business strategy.',
              list: ['Strategic guidance','Skill development','Market insights','Growth planning']
            }
          ].map(card => (
            <article className="card" key={card.title}>
              <div className="icon">{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
              <ul>
                {card.list.map(li => <li key={li}>{li}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* ========== TESTIMONIALS ========== */}
      <section className="testimonials">
        <h2>What Our Clients Say</h2>
        <p className="subtitle">
          Don&apos;t just take our word for it. Here&apos;s what our satisfied clients say
          about their experience with UPSCALE.
        </p>

        <div className="testimonial-grid">
          {[
            {
              name: 'Sarah Johnson',
              company: 'TechGadgets Store',
              date: 'March 15, 2024',
              quote: 'UPSCALE transformed our Amazon business completely. Within 3 months, our sales increased by 400% and our product rankings improved dramatically. Their team is incredibly knowledgeable and responsive.',
            },
            {
              name: 'Michael Chen',
              company: 'HomeDecor Plus',
              date: 'February 28, 2024',
              quote: 'The product optimization services from UPSCALE are exceptional. They helped us improve our conversion rates by 250% across Flipkart and Amazon. The ROI has been incredible.',
            },
            {
              name: 'Priya Sharma',
              company: 'Fashion Forward',
              date: 'March 8, 2024',
              quote: 'Working with UPSCALE has been a game changer for our Meesho and JioMart stores. Their advertising management increased our visibility and our monthly revenue grew by 350%.',
            }
          ].map(t => (
            <article className="review" key={t.name}>
              <div className="score">99</div>
              <div className="stars">★★★★★</div>
              <span className="date">{t.date}</span>
              <p className="quote">"{t.quote}"</p>
              <h4>{t.name}</h4>
              <small>{t.company}</small>
            </article>
          ))}
        </div>
      </section>
      {/* <Footer/> */}
    </main>
  );
}
