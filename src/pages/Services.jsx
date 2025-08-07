import './Services.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Services() {
  return (
    <>
      {/* <Navbar /> */}
      <main className="services-page">
        {/* ========== SERVICES HERO ========== */}
        <section className="services-hero">
          <div className="services-hero__content">
            <h2>Comprehensive E-Commerce Services</h2>
        <p className="subtitle">
          From account setup to advanced optimization, we provide end-to-end
          solutions to scale your business across all major e-commerce platforms.
        </p>

          </div>
        </section>

        {/* ========== ACCOUNT MANAGEMENT SECTION ========== */}
        <section className="account-management-section">
          <h2>Account Management Services</h2>
          <p className="section-subtitle">
            Professional account management across all major e-commerce platforms
            with dedicated support and optimization.
          </p>

          <div className="pricing-grid">
            {/* Amazon Account Management */}
            <div className="pricing-card">
              <div className="card-header">
                <div className="platform-icon">🛒</div>
                <h3>Amazon Account Management</h3>
                <p>Complete Amazon seller account management including inventory management, order processing, customer service, and performance optimization.</p>
              </div>

              <div className="features-list">
                <h4>What's Included:</h4>
                <ul>
                  <li><span className="check">✓</span> Daily account monitoring and health checks</li>
                  <li><span className="check">✓</span> Inventory management and forecasting</li>
                  <li><span className="check">✓</span> Order processing and fulfillment</li>
                  <li><span className="check">✓</span> Performance metrics optimization</li>
                  <li><span className="check">✓</span> Amazon policy compliance</li>
                  <li><span className="check">✓</span> A-to-Z claims management</li>
                </ul>
              </div>

              <div className="card-pricing">
                <div className="price">Starting from <span>$299/month</span></div>
                <button className="get-started-btn">Get Started</button>
              </div>
            </div>

            {/* Flipkart Account Management */}
            <div className="pricing-card">
              <div className="card-header">
                <div className="platform-icon">🛍️</div>
                <h3>Flipkart Account Management</h3>
                <p>Comprehensive Flipkart seller account management to maximize your presence on India's largest e-commerce platform.</p>
              </div>

              <div className="features-list">
                <h4>What's Included:</h4>
                <ul>
                  <li><span className="check">✓</span> Seller account setup and optimization</li>
                  <li><span className="check">✓</span> Product catalog management</li>
                  <li><span className="check">✓</span> Pricing strategy and competition analysis</li>
                  <li><span className="check">✓</span> Quality score improvement</li>
                  <li><span className="check">✓</span> Return and refund management</li>
                  <li><span className="check">✓</span> Flipkart Ads campaign management</li>
                </ul>
              </div>

              <div className="card-pricing">
                <div className="price">Starting from <span>$249/month</span></div>
                <button className="get-started-btn">Get Started</button>
              </div>
            </div>

            {/* JioMart Account Management */}
            <div className="pricing-card">
              <div className="card-header">
                <div className="platform-icon">🏪</div>
                <h3>JioMart Account Management</h3>
                <p>Professional management of your JioMart seller account with focus on local market penetration and growth.</p>
              </div>

              <div className="features-list">
                <h4>What's Included:</h4>
                <ul>
                  <li><span className="check">✓</span> Account setup and verification</li>
                  <li><span className="check">✓</span> Local market analysis</li>
                  <li><span className="check">✓</span> Product listing optimization</li>
                  <li><span className="check">✓</span> Regional pricing strategies</li>
                  <li><span className="check">✓</span> Customer service management</li>
                  <li><span className="check">✓</span> Performance tracking and reporting</li>
                </ul>
              </div>

              <div className="card-pricing">
                <div className="price">Starting from <span>$199/month</span></div>
                <button className="get-started-btn">Get Started</button>
              </div>
            </div>

            {/* Meesho Account Management */}
            <div className="pricing-card">
              <div className="card-header">
                <div className="platform-icon">📱</div>
                <h3>Meesho Account Management</h3>
                <p>Specialized Meesho account management focusing on social commerce and reseller network optimization.</p>
              </div>

              <div className="features-list">
                <h4>What's Included:</h4>
                <ul>
                  <li><span className="check">✓</span> Reseller network building</li>
                  <li><span className="check">✓</span> Social commerce strategies</li>
                  <li><span className="check">✓</span> Product catalog optimization</li>
                  <li><span className="check">✓</span> Supplier relationship management</li>
                  <li><span className="check">✓</span> Commission structure optimization</li>
                  <li><span className="check">✓</span> Performance analytics</li>
                </ul>
              </div>

              <div className="card-pricing">
                <div className="price">Starting from <span>$179/month</span></div>
                <button className="get-started-btn">Get Started</button>
              </div>
            </div>
          </div>
        </section>

        {/* ========== OPTIMIZATION SERVICES ========== */}
        <section className="optimization-services">
          <h2>Optimization Services</h2>
          <p className="section-subtitle">
            Specialized optimization services to improve your product visibility,
            conversion rates, and overall sales performance.
          </p>

          <div className="pricing-grid two-column">
            {/* Product Listing Optimization */}
            <div className="pricing-card">
              <div className="card-header">
                <div className="platform-icon">🔍</div>
                <h3>Product Listing Optimization</h3>
                <p>Professional product listing services with SEO optimization, compelling descriptions, and high-conversion imagery.</p>
              </div>

              <div className="features-list">
                <h4>What's Included:</h4>
                <ul>
                  <li><span className="check">✓</span> Keyword research and optimization</li>
                  <li><span className="check">✓</span> Professional product photography</li>
                  <li><span className="check">✓</span> Compelling product descriptions</li>
                  <li><span className="check">✓</span> A+ content creation (Amazon)</li>
                  <li><span className="check">✓</span> Category and attribute optimization</li>
                  <li><span className="check">✓</span> Competitor analysis</li>
                </ul>
              </div>

              <div className="card-pricing">
                <div className="price">Starting from <span>$49/listing</span></div>
                <button className="get-started-btn">Get Started</button>
              </div>
            </div>

            {/* Product Performance Optimization */}
            <div className="pricing-card">
              <div className="card-header">
                <div className="platform-icon">📈</div>
                <h3>Product Performance Optimization</h3>
                <p>Data-driven optimization strategies to improve product visibility, conversion rates, and overall sales performance.</p>
              </div>

              <div className="features-list">
                <h4>What's Included:</h4>
                <ul>
                  <li><span className="check">✓</span> Conversion rate optimization</li>
                  <li><span className="check">✓</span> A/B testing for listings</li>
                  <li><span className="check">✓</span> Price optimization strategies</li>
                  <li><span className="check">✓</span> Review and rating management</li>
                  <li><span className="check">✓</span> Search ranking improvement</li>
                  <li><span className="check">✓</span> Performance analytics and reporting</li>
                </ul>
              </div>

              <div className="card-pricing">
                <div className="price">Starting from <span>$399/month</span></div>
                <button className="get-started-btn">Get Started</button>
              </div>
            </div>
          </div>
        </section>

        {/* ========== ADDITIONAL SERVICES ========== */}
        <section className="additional-services">
          <h2>Additional Services</h2>
          <p className="section-subtitle">
            Specialized services to accelerate your growth and maximize your
            e-commerce potential with expert guidance.
          </p>

          <div className="pricing-grid two-column">
            {/* Advertising Management */}
            <div className="pricing-card">
              <div className="card-header">
                <div className="platform-icon">🎯</div>
                <h3>Advertising Management</h3>
                <p>Strategic PPC campaign management across all platforms to maximize ROI and drive targeted traffic.</p>
              </div>

              <div className="features-list">
                <h4>What's Included:</h4>
                <ul>
                  <li><span className="check">✓</span> Campaign strategy and planning</li>
                  <li><span className="check">✓</span> Keyword research and bidding</li>
                  <li><span className="check">✓</span> Ad copy creation and optimization</li>
                  <li><span className="check">✓</span> Budget management and allocation</li>
                  <li><span className="check">✓</span> Performance tracking and ROI analysis</li>
                  <li><span className="check">✓</span> Regular optimization and scaling</li>
                </ul>
              </div>

              <div className="card-pricing">
                <div className="price">Starting from <span>$499/month</span></div>
                <button className="get-started-btn">Get Started</button>
              </div>
            </div>

            {/* Expert Mentoring */}
            <div className="pricing-card">
              <div className="card-header">
                <div className="platform-icon">💡</div>
                <h3>Expert Mentoring</h3>
                <p>One-on-one mentoring sessions with e-commerce experts to develop your skills and business strategy.</p>
              </div>

              <div className="features-list">
                <h4>What's Included:</h4>
                <ul>
                  <li><span className="check">✓</span> Personalized business strategy sessions</li>
                  <li><span className="check">✓</span> E-commerce best practices training</li>
                  <li><span className="check">✓</span> Market analysis and opportunities</li>
                  <li><span className="check">✓</span> Growth planning and execution</li>
                  <li><span className="check">✓</span> Problem-solving and troubleshooting</li>
                  <li><span className="check">✓</span> Ongoing support and guidance</li>
                </ul>
              </div>

              <div className="card-pricing">
                <div className="price">Starting from <span>$149/hour</span></div>
                <button className="get-started-btn">Get Started</button>
              </div>
            </div>
          </div>
        </section>

        {/* ========== CTA SECTION ========== */}
        {/* <section className="services-cta">
          <div className="services-cta__content">
            <h2>Ready to Scale Your E-Commerce Business?</h2>
            <p>
              Choose the right service package for your business needs and start
              your journey to e-commerce success with UPSCALE.
            </p>
            <div className="cta-buttons">
              <button className="btn-primary">Get Free Consultation</button>
              <button className="btn-outline">Contact Our Team</button>
            </div>
          </div>
        </section> */}
      </main>
      {/* <Footer /> */}
    </>
  );
}
