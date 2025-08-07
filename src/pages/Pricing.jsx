import './Pricing.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Pricing() {
  return (
    <>
      {/* <Navbar /> */}
      <main className="pricing-page">
        {/* ========== PRICING HERO ========== */}
        <section className="pricing-hero">
          <div className="pricing-hero__content">
            <h1>Simple, Transparent <span className="accent">Pricing</span></h1>
            <p>
              Choose the perfect plan for your business. All plans include our core services
              with no hidden fees or long-term contracts.
            </p>
            <div className="guarantee-badge">
              <span className="star-icon">⭐</span>
              30-day money-back guarantee
            </div>
          </div>
        </section>

        {/* ========== PRICING PLANS ========== */}
        <section className="pricing-plans">
          <div className="plans-grid">
            {/* Starter Plan */}
            <div className="pricing-card">
              <div className="card-header">
                <h3>Starter</h3>
                <p>Perfect for small businesses starting their e-commerce journey</p>
                <div className="price">
                  <span className="currency">$</span>
                  <span className="amount">299</span>
                  <span className="period">/month</span>
                </div>
              </div>

              <div className="features-list">
                <ul>
                  <li><span className="check">✓</span> Single platform management (Amazon OR Flipkart)</li>
                  <li><span className="check">✓</span> Basic product listing optimization</li>
                  <li><span className="check">✓</span> Monthly performance reports</li>
                  <li><span className="check">✓</span> Email support</li>
                  <li><span className="check">✓</span> Up to 50 products</li>
                  <li><span className="check">✓</span> Basic keyword research</li>
                </ul>
              </div>

              <button className="plan-button">Get Started</button>
            </div>

            {/* Professional Plan - Most Popular */}
            <div className="pricing-card featured">
              <div className="popular-badge">Most Popular</div>
              <div className="card-header">
                <h3>Professional</h3>
                <p>Ideal for growing businesses ready to scale across platforms</p>
                <div className="price">
                  <span className="currency">$</span>
                  <span className="amount">599</span>
                  <span className="period">/month</span>
                </div>
              </div>

              <div className="features-list">
                <ul>
                  <li><span className="check">✓</span> Multi-platform management (2 platforms)</li>
                  <li><span className="check">✓</span> Advanced product optimization</li>
                  <li><span className="check">✓</span> Weekly performance reports</li>
                  <li><span className="check">✓</span> Priority email & phone support</li>
                  <li><span className="check">✓</span> Up to 200 products</li>
                  <li><span className="check">✓</span> Advanced keyword research & SEO</li>
                  <li><span className="check">✓</span> Basic advertising management</li>
                </ul>
              </div>

              <button className="plan-button featured-button">Get Started</button>
            </div>

            {/* Enterprise Plan */}
            <div className="pricing-card">
              <div className="card-header">
                <h3>Enterprise</h3>
                <p>Comprehensive solution for established businesses</p>
                <div className="price">
                  <span className="currency">$</span>
                  <span className="amount">1,299</span>
                  <span className="period">/month</span>
                </div>
              </div>

              <div className="features-list">
                <ul>
                  <li><span className="check">✓</span> All platform management (Amazon, Flipkart, Jiomart, Meesho)</li>
                  <li><span className="check">✓</span> Premium optimization & A+ content</li>
                  <li><span className="check">✓</span> Daily performance reports</li>
                  <li><span className="check">✓</span> 24/7 dedicated support</li>
                  <li><span className="check">✓</span> Unlimited products</li>
                  <li><span className="check">✓</span> Advanced SEO & competitor analysis</li>
                  <li><span className="check">✓</span> Full advertising campaign management</li>
                </ul>
              </div>

              <button className="plan-button">Get Started</button>
            </div>
          </div>
        </section>

        {/* ========== ADDITIONAL SERVICES ========== */}
        <section className="additional-services">
          <h2>Additional Services</h2>
          <p className="section-subtitle">
            Enhance your plan with these premium add-on services designed to accelerate your growth.
          </p>

          <div className="addons-grid">
            <div className="addon-card">
              <div className="addon-icon">👨‍🏫</div>
              <h3>Expert Mentoring</h3>
              <div className="addon-price">$149<span>/hour</span></div>
              <p>One-on-one sessions with e-commerce experts</p>
              <button className="addon-button">Add to Plan</button>
            </div>

            <div className="addon-card">
              <div className="addon-icon">📸</div>
              <h3>Product Photography</h3>
              <div className="addon-price">$49<span>/product</span></div>
              <p>Professional product photography and editing</p>
              <button className="addon-button">Add to Plan</button>
            </div>

            <div className="addon-card">
              <div className="addon-icon">✍️</div>
              <h3>A+ Content Creation</h3>
              <div className="addon-price">$199<span>/listing</span></div>
              <p>Premium Amazon A+ content design and copywriting</p>
              <button className="addon-button">Add to Plan</button>
            </div>

            <div className="addon-card">
              <div className="addon-icon">🏪</div>
              <h3>Brand Store Setup</h3>
              <div className="addon-price">$499<span>/one-time</span></div>
              <p>Complete Amazon Brand Store design and setup</p>
              <button className="addon-button">Add to Plan</button>
            </div>
          </div>
        </section>

        {/* ========== FAQ SECTION ========== */}
        <section className="faq-section">
          <h2>Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Find answers to the most common questions about our pricing and services.
          </p>

          <div className="faq-container">
            <div className="faq-item">
              <h3>What's included in each pricing plan?</h3>
              <p>Each plan includes account management, product optimization, performance reporting, and dedicated support. Higher tiers offer more platforms, products, and additional services like advertising management and priority support.</p>
            </div>

            <div className="faq-item">
              <h3>Can I change my plan anytime?</h3>
              <p>Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle. We'll help you transition smoothly between plans.</p>
            </div>

            <div className="faq-item">
              <h3>Do you offer a money-back guarantee?</h3>
              <p>Absolutely! We offer a 30-day money-back guarantee on all plans. If you're not completely satisfied with our services, we'll refund your payment, no questions asked.</p>
            </div>

            <div className="faq-item">
              <h3>Are there any setup fees or hidden costs?</h3>
              <p>No hidden fees whatsoever. The pricing you see is exactly what you'll pay. There are no setup fees, no cancellation fees, and no long-term contracts required.</p>
            </div>

            <div className="faq-item">
              <h3>How quickly can you start managing my accounts?</h3>
              <p>We can typically start managing your accounts within 24-48 hours of onboarding. Our team will conduct an initial audit and begin optimization immediately.</p>
            </div>

            <div className="faq-item">
              <h3>Do you work with businesses of all sizes?</h3>
              <p>Yes! Our Starter plan is perfect for small businesses, while our Enterprise plan can handle large-scale operations. We customize our approach based on your business size and needs.</p>
            </div>

            <div className="faq-item">
              <h3>What platforms do you support?</h3>
              <p>We specialize in Amazon, Flipkart, JioMart, and Meesho. Depending on your plan, you can choose single or multiple platform management to maximize your reach.</p>
            </div>

            <div className="faq-item">
              <h3>How do you measure success and ROI?</h3>
              <p>We track key metrics like sales growth, conversion rates, search rankings, and ROI. You'll receive detailed reports showing your progress and the impact of our optimization efforts.</p>
            </div>

            <div className="faq-item">
              <h3>Can I add additional services later?</h3>
              <p>Absolutely! You can add any of our additional services (mentoring, photography, A+ content, etc.) to your existing plan at any time. We'll adjust your billing accordingly.</p>
            </div>

            <div className="faq-item">
              <h3>What kind of support do you provide?</h3>
              <p>Support varies by plan: Starter gets email support, Professional gets priority email & phone support, and Enterprise gets 24/7 dedicated support with a personal account manager.</p>
            </div>
          </div>
        </section>

        {/* ========== CTA SECTION ========== */}
        {/* <section className="pricing-cta">
          <div className="pricing-cta__content">
            <h2>Ready to Scale Your Business?</h2>
            <p>
              Join hundreds of successful businesses who trust UPSCALE to drive their e-commerce growth.
              Start your journey today with our risk-free trial.
            </p>
            <div className="cta-buttons">
              <button className="btn-primary">Start Free Trial</button>
              <button className="btn-outline">Schedule Consultation</button>
            </div>
          </div>
        </section> */}
      </main>
      {/* <Footer /> */}
    </>
  );
}
