import './Services.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
// Import React Icons - CORRECTED
import { 
  FaShoppingCart,
  FaStore,
  FaStoreAlt,  // Corrected from FaShop
  FaMobile,
  FaSearch,
  FaChartLine,
  FaBullseye,
  FaLightbulb,
  FaCheckCircle 
} from 'react-icons/fa';

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
                <FaShoppingCart className="platform-icon" />
                <h3>Amazon Account Management</h3>
                <p>Complete Amazon seller account management including inventory management, order processing, customer service, and performance optimization.</p>
              </div>

              <div className="features-list">
                <h4>What's Included in Account Management:</h4>
                <ul>
                  <li><FaCheckCircle className="check" /> Product Listing & Upload</li>
                  <li><FaCheckCircle className="check" /> Keyword Research</li>
                  <li><FaCheckCircle className="check" /> Inventory & Order Management</li>
                  <li><FaCheckCircle className="check" /> Price Monitoring</li>
                  <li><FaCheckCircle className="check" /> Reports & Analytics</li>
                  <li><FaCheckCircle className="check" /> Basic Support for Returns/Claims</li>
                  <li><FaCheckCircle className="check" /> Seller Account Openeing</li>
                </ul>
              </div>

              <div className="card-pricing">
                <div className="price">Starting from <span>₹1999/month</span></div>
                <button className="get-started-btn">Get Started</button>
              </div>
            </div>

            {/* Flipkart Account Management */}
            <div className="pricing-card">
              <div className="card-header">
                <FaStore className="platform-icon" />
                <h3>Flipkart Account Management</h3>
                <p>Comprehensive Flipkart seller account management to maximize your presence on India's largest e-commerce platform.</p>
              </div>

              <div className="features-list">
                <h4>Services Usually Included:</h4>
                <ul>
                  <li><FaCheckCircle className="check" /> Product Listing (Title, Description, Images)</li>
                  <li><FaCheckCircle className="check" /> Price/Stock Updates</li>
                  <li><FaCheckCircle className="check" /> Order & Return Monitoring</li>
                  <li><FaCheckCircle className="check" /> Offer/Deal Setup</li>
                  <li><FaCheckCircle className="check" /> Daily Follow-ups with Seller Support</li>
                  <li><FaCheckCircle className="check" /> Growth Tracking & Reports</li>
                  <li><FaCheckCircle className="check" /> Seller Account Openeing</li>
                </ul>
              </div>

              <div className="card-pricing">
                <div className="price">Starting from <span>₹1999/month</span></div>
                <button className="get-started-btn">Get Started</button>
              </div>
            </div>

            {/* JioMart Account Management */}
            <div className="pricing-card">
              <div className="card-header">
                <FaStoreAlt className="platform-icon" />
                <h3>JioMart Account Management</h3>
                <p>Professional management of your JioMart seller account with focus on local market penetration and growth.</p>
              </div>

              <div className="features-list">
                <h4>Usually Included in Service:</h4>
                <ul>
                  <li><FaCheckCircle className="check" /> Product Listing & Catalog Upload</li>
                  <li><FaCheckCircle className="check" /> Price & Stock Updates</li>
                  <li><FaCheckCircle className="check" /> Order & Return Management</li>
                  <li><FaCheckCircle className="check" /> Offer Setup & Promotions</li>
                  <li><FaCheckCircle className="check" /> JioMart Seller Support follow-ups</li>
                  <li><FaCheckCircle className="check" /> Weekly Performance Report</li>
                  <li><FaCheckCircle className="check" /> Seller Account Openeing</li>
                </ul>
              </div>

              <div className="card-pricing">
                <div className="price">Starting from <span>₹1599/month</span></div>
                <button className="get-started-btn">Get Started</button>
              </div>
            </div>

            {/* Meesho Account Management */}
            <div className="pricing-card">
              <div className="card-header">
                <FaMobile className="platform-icon" />
                <h3>Meesho Account Management</h3>
                <p>Specialized Meesho account management focusing on social commerce and reseller network optimization.</p>
              </div>

              <div className="features-list">
                <h4>What's Included:</h4>
                <ul>
                  <li><FaCheckCircle className="check" /> Product Listing(Title,Images,Description)</li>
                  <li><FaCheckCircle className="check" /> Category Mapping & Tag Optimization</li>
                  <li><FaCheckCircle className="check" /> Order/Return Management</li>
                  <li><FaCheckCircle className="check" /> Daily Price & Stock Updates</li>
                  <li><FaCheckCircle className="check" /> Ticket raising with Meesho Support </li>
                  <li><FaCheckCircle className="check" /> Offer/Deal Setup (Big Sale Days)</li>
                  <li><FaCheckCircle className="check" /> Seller Account Openeing</li>

                </ul>
              </div>

              <div className="card-pricing">
                <div className="price">Starting from <span>₹1299/month</span></div>
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
                <FaSearch className="platform-icon" />
                <h3>Product Listing Optimization</h3>
                <p>Professional product listing services with SEO optimization, compelling descriptions, and high-conversion imagery.</p>
              </div>

              <div className="features-list">
                <h4>What's Included:</h4>
                <ul>
                  <li><FaCheckCircle className="check" /> Keyword-rich Title</li>
                  <li><FaCheckCircle className="check" /> Bullet Points with Benefits</li>
                  <li><FaCheckCircle className="check" /> Optimized Description</li>
                  <li><FaCheckCircle className="check" /> Search Terms (backend keywords)</li>
                  <li><FaCheckCircle className="check" /> Category/Attribute Check</li>
                  <li><FaCheckCircle className="check" /> Basic Image Suggestions (if needed)</li>
                </ul>
              </div>

              <div className="card-pricing">
                <div className="price">Starting from <span>₹199/listing</span></div>
                <button className="get-started-btn">Get Started</button>
              </div>
            </div>

            {/* Product Performance Optimization */}
            <div className="pricing-card">
              <div className="card-header">
                <FaChartLine className="platform-icon" />
                <h3>Product Performance Optimization</h3>
                <p>Data-driven optimization strategies to improve product visibility, conversion rates, and overall sales performance.</p>
              </div>

              <div className="features-list">
                <h4>What's Included:</h4>
                <ul>
                  <li><FaCheckCircle className="check" /> Competitor Analysis	</li>
                  <li><FaCheckCircle className="check" /> Keyword Gap & Ranking Check</li>
                  <li><FaCheckCircle className="check" /> Price & Offer Adjustment</li>
                  <li><FaCheckCircle className="check" /> Image & A+ Suggestions</li>
                  <li><FaCheckCircle className="check" /> Listing Rewriting (if needed)</li>
                  <li><FaCheckCircle className="check" /> Search Term Audit (backend SEO)</li>
                  <li><FaCheckCircle className="check" />  Return/Review Analysis</li>
                 
                </ul>
              </div>

              <div className="card-pricing">
                <div className="price">Starting from <span>₹499/month</span></div>
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
                <FaBullseye className="platform-icon" />
                <h3>Advertising Management</h3>
                <p>Strategic PPC campaign management across all platforms to maximize ROI and drive targeted traffic.</p>
              </div>

              <div className="features-list">
                <h4>What's Included:</h4>
                <ul>
                  <li><FaCheckCircle className="check" /> Campaign strategy and planning</li>
                  <li><FaCheckCircle className="check" /> Keyword research and bidding</li>
                  <li><FaCheckCircle className="check" /> Ad copy creation and optimization</li>
                  <li><FaCheckCircle className="check" /> Budget management and allocation</li>
                  <li><FaCheckCircle className="check" /> Performance tracking and ROI analysis</li>
                  <li><FaCheckCircle className="check" /> Regular optimization and scaling</li>
                </ul>
              </div>

              <div className="card-pricing">
                <div className="price">Starting from <span>₹1499/month</span></div>
                <button className="get-started-btn">Get Started</button>
              </div>
            </div>

            {/* Expert Mentoring */}
            
          </div>
        </section>
      </main>
      {/* <Footer /> */}
    </>
  );
}
