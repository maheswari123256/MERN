import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../App.css";
import tea from '../asset/img/purple-tea-cup-saucer-with-gold-rim-purple-saucer-generative-ai_900833-1308.jpg'
import tea1 from '../asset/img/pexels-jill-wellington-1638660-3776948.jpg';
import tea2 from '../asset/img/food-photography-tea_574745-14351.jpg';
import tea3 from '../asset/img/tea-cup-white-background_200402-9223.jpg';
import tea5 from '../asset/img/green-tea.jpg';
import tea6 from '../asset/img/black-tea.jpg';
import tea7 from '../asset/img/chamomile-tea.jpg';
import tea9 from'../asset/img/44333e70-3f51-4d65-ac20-8b18e334f246.jpg';
import tea10 from'../asset/img/5849.jpg';

  

const TeaShop = () => {
  return (
    
    <div className="tea-shop">
      
      {/* ===== HEADER SECTION ===== */}
      <header className="tea-header">
        <a href="#" className="tea-logo">mahi tea shop<span>.</span></a> 
        <nav className="tea-navbar">
          <a href="#home">home</a>
          <a href="#about">about</a>
          <a href="#products">products</a>
          <a href="#reviews">reviews</a>
          <a href="#contact">contact</a>
        </nav> 
        <div className="tea-icons">
          <a href="#" className="fas fa-heart"></a>
          <a href="#products" className="fas fa-shopping-cart"></a>
          <a href="#contact" className="fas fa-user"></a>
        </div>
      </header>

      {/* ===== HOME SECTION ===== */}
      <section id="home" className="home-section" style={{
        backgroundImage: "url('/tea-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        height: "100vh",
        width: "100%",
      }}>
        

       
        <div className="home-img-box">
          <div className="home-shapes"></div>
          <div className="home-diamond"></div>
          <div className="home-diamond1"></div>
         
          <img className="home-main-img" src={tea} alt="tea cup" />
  
        </div>
        
        <h2 className="home-title">

          open up your<br/>senses with a cup<br/>of <span>awesome tea</span>
        </h2>
        <p className="home-text">
          Café Tea Trunk📍Goa, India<br/>
          Come over for tea! Step into our charming Café Tea Trunk, housed in a 100-year-old heritage home in the UNESCO-listed Latin Quarter of Panaji, Goa.
          <br/><br/>
          Recognized internationally, our café was featured in a leading European publication as one of the “150 Teahouses to Visit Before You Die.”
          <br/><br/>
          Whether you’re a tea lover, traveler, or local seeking a soulful experience, Café Tea Trunk is your perfect stop to sip, unwind, and discover India’s most loved artisanal teas.
        </p>
        <div className="home-buttons">
          <button className="btn-start">Let's Start</button>
          <button className="btn-discover">Discover</button>
        </div>
      </section>

      {/* ===== ABOUT SECTION ===== */}
      <section id="about" className="about-section" style={{
        backgroundImage: "url('/tea-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        height: "200vh",
        width: "100%",
      }}>
         <div className="about-features" >
          <div className="feature-card">
            <i className="fa-solid fa-truck"></i>
            <h3>Free Shipping</h3>
            <p>No extra cost.<br/>Fast delivery.</p>
          </div>
          <div className="feature-card">
            <i className="fa-solid fa-face-grin-stars"></i>
            <h3>Premium Quality</h3>
            <p>Premium materials.<br/>Long-lasting use.<br/>Trusted quality.</p>
          </div>
          <div className="feature-card">
            <i className="fa-solid fa-clock"></i>
            <h3>24/7 Support</h3>
            <p>Always available.<br/>Quick response.<br/>Anytime help.</p>
          </div>
        </div>
        <div className="about-container">
          <div className="about-images">
           <img src={tea1} alt="tea" className="about-img1" />
        <img src={tea2} alt="tea" className="about-img2" />
     <img src={tea3} alt="tea" className="about-img3" />
          </div>
          <div className="about-content">
            <h2>About&nbsp;Us</h2>
            <p>
              We are a passionate team dedicated to quality and creativity.<br/>
              Our company was founded to bring innovative ideas to life.<br/>
              We focus on customer satisfaction and long-term relationships.<br/>
              Our mission is to deliver the best products and services.<br/>
              We believe in honesty, hard work, and teamwork.<br/>
              Every project we do reflects our commitment to excellence.<br/>
              Our vision is to make a positive impact through our work.<br/>
              We value innovation, integrity, and continuous improvement.<br/>
              Our team members are skilled, friendly, and professional.<br/>
              We always listen to our customers’ needs and feedback.<br/>
              Quality and trust are the core of our business.<br/>
              We use modern technology to stay ahead in our field.<br/>
              Our goal is to grow with our customers and community.<br/>
              We are proud of what we do and love to keep learning.<br/>
              Thank you for supporting us and being part of our journey!
            </p>
          </div>
        </div>
 </section>
        {/* ===== ABOUT FEATURES ===== */}
       
     

      {/* ===== PRODUCTS SECTION ===== */}
      
      <section id="products" className="products-section" style={{
        backgroundImage: "url('/tea-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        height: "150vh",
        width: "100%",
      }}> 
        <div className="products-card" > 
          <br/><br/>
          <img src={tea5} alt="Green Tea" /><br/><br/>
           <h3 >green tea <span>$150</span></h3><br/><br/>
    <pre>Green tea started in China long ago.<br/>

       It is very popular in Asian countries.<br/>

      Japan drinks more green tea.
</pre>
        </div>
        <div className="products-card"><br/><br/>
          <img src={tea6} alt="Black Tea"/><br/><br/>
          <h3 >black tea <span>$50</span></h3><br/><br/>
    <pre>Black tea is from East Asia.<br/>

It is loved in China, Japan, and Korea.<br/>

People drink it hot or cold.
</pre>
<button><a href="https://www.nutritionadvance.com/healthy-foods/types-of-tea/">See More</a></button>
        </div>
        <div className="products-card"><br/>
<br/>

          <img src={tea7}alt="Masala Tea"/><br/>
<br/>

          <h3 >chamomile-tea <span>$150</span></h3><br/>
<br/>

    <pre> Made from chamomile flowers.<br/>

It is known as a good bedtime drink.<br/>

It has a mild, sweet, and floral taste.
</pre>

</div>


   
 </section>

      {/* ===== REVIEWS SECTION ===== */}
      <section id="reviews" className="reviews-section" style={{
        backgroundImage: "url('/tea-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        
      }}>
        <h1>Customer <span>Reviews</span></h1>
        <div className="reviews-container">
          {[1,2,3].map((user) => (
            <div className="review-card" key={user}>
              <div className="review-user">
                <img src={`https://i.pravatar.cc/80?img=${user}`} alt={`user${user}`}/>
                <h3>{user === 1 ? "Priya Sharma" : user === 2 ? "Ravi Kumar" : "Anjali Verma"}</h3>
              </div>
              <div className="review-stars">
                {Array.from({length: 5}, (_, i) => (
                  <i key={i} className={`fa-star ${i < (user === 2 ? 3 : 4)} ${i < (user === 3 ? 5 : 4) ? "fa-solid" : "fa-regular"}`}></i>
                ))}
              </div>
              <p>
                {user === 1 ? "The product quality was really good, and delivery was on time. Highly recommended!"
                  : user === 2 ? "Good service overall, but I think the packaging could be better next time."
                  : "Absolutely loved it! Great value for money and wonderful customer support."}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== CONTACT SECTION ===== */}
      <section id="contact" className="contact-section" style={{
        backgroundImage: "url('/tea-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        height: "300vh",
        width: "100%",
      }}>
        <h1>MAHEI TEA SHOP</h1>
        <h2>CONTACT US</h2>
        <p>Get in touch</p>
        <table className="contact-table">
          <tbody>
            <tr>
              <td>
                <img className="contactimg" src={tea9} alt="phone" style={{width: "70PX",  
    height: "70px", 
    objectFit: "cover",borderRadius: "0"}}/> +91 9876543210
              </td>
              <td>
                <img src={tea10} alt="email" style={{width: "70PX",  
    height: "70px", 
    objectFit: "cover",borderRadius: "0"}}/> example@gmail.com
              </td>
            </tr>
          </tbody>
        </table>
        <form className="contact-form" >
          <label>Name:</label>
          <input type="text" placeholder="Name"/>
          <label>Email:</label>
          <input type="email" placeholder="Email"/>
          <label>Phone No:</label>
          <input type="tel" placeholder="Mobile" pattern="[0-9]{10}"/>
          <label>Message:</label>
          <textarea rows="5" placeholder="Message"></textarea>
          <button type="submit">Submit</button>
           <iframe
  align="right"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31440.546930395696!2d78.09623919300617!3d9.928264471088543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c56f4d7eb6af%3A0x833c8ce8ab417333!2sRoyal%20Tea%20House!5e0!3m2!1sen!2sin!4v1760456734963!5m2!1sen!2sin"
  width="100%"
  height="330"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>
        </form>
       

</section >

    </div>
  );
};

export default TeaShop;
