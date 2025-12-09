'use client';

import React, { useState } from 'react';

export default function Portfolio() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Message sent!');
    setFormData({ firstName: '', lastName: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: 'Poppins', sans-serif;
        }

        body {
          background-color: #fff;
          color: #000;
        }

        html {
          scroll-behavior: smooth;
        }

        /* NAVIGATION */
        nav {
          width: fit-content;
          border-radius: 15px;
          margin: 20px auto;
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(15px) saturate(180%);
          -webkit-backdrop-filter: blur(15px) saturate(180%);
          border: 1px solid rgba(255, 255, 255, 0.3);
          display: flex;
          justify-content: center;
          padding: 15px 20px;
          position: sticky;
          top: 10px;
          z-index: 10;
        }

        nav ul {
          list-style: none;
          display: flex;
          gap: 50px;
        }

        nav a {
          display: inline-block;
          text-decoration: none;
          color: #000;
          font-weight: 500;
          transition: all 0.3s ease-in-out;
        }

        nav a:hover {
          color: #EA50AB;
          transform: scale(1.1);
        }

        /* HERO SECTION */
        .hero {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 80px 10%;
          flex-wrap: wrap;
        }

        .text-section {
          flex: 1;
          min-width: 280px;
        }

        .text-section h1 {
          font-size: 48px;
          font-weight: 900;
        }

        .text-section h2 {
          font-size: 42px;
          font-weight: 800;
          color: #555;
          margin: 10px 0 20px;
        }

        .name {
          color: #8a1456;
          margin-bottom: 5px;
        }

        .location {
          margin-bottom: 25px;
        }

        .buttons {
          display: flex;
          gap: 20px;
        }

        .btn {
          padding: 10px 25px;
          text-decoration: none;
          font-weight: 600;
        }

        .btn.primary {
          background: linear-gradient(180deg, #EA3697 0%, #841E55 100%);
          color: #fff;
        }

        .btn.secondary {
          color: #000;
        }

        .btn.primary:hover {
          background: #c03a85;
        }

        .btn.secondary:hover {
          background-color: #D9D9D9;
        }

        /* PROFILE SECTION */
        .profile-section {
          flex: 1;
          display: flex;
          align-items: center;
        }

        .accent {
          height: 450px;
          padding: 40px;
          max-width: 350px;
          z-index: 0;
          background-color: #F3B0D6;
        }

        .profile-card {
          background: linear-gradient(180deg, #EA3697 0%, #841E55 100%);
          color: white;
          padding: 40px;
          max-width: 450px;
          text-align: center;
        }

        .profile-pic {
          width: 300px;
          height: 300px;
          border-radius: 50%;
          border: 8px solid #D9D9D9;
          overflow: hidden;
          background: #fff;
          margin: 0 auto 20px auto;
        }

        .profile-pic img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .profile-card .desc {
          font-size: 14px;
          line-height: 1.6;
          text-align: justify;
        }

        /* PORTFOLIO SECTION */
        .portfolio {
          background: linear-gradient(180deg, #c03a85 50%, #D9D9D9 100%);
          padding: 80px 10%;
        }

        .section-title {
          text-align: center;
          font-size: 32px;
          font-weight: 800;
          margin-bottom: 50px;
        }

        .portfolio-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
        }

        .portfolio-card {
          background: #D9D9D9;
          color: #000;
          border-radius: 10px;
          padding: 20px;
          text-align: center;
          transition: all 0.4s ease-in-out;
          overflow: hidden;
        }

        .portfolio-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
        }

        .portfolio-img {
          width: 100%;
          height: 180px;
          object-fit: cover;
          border-radius: 8px;
          margin-bottom: 15px;
          transition: transform 0.4s ease;
        }

        .portfolio-card:hover .portfolio-img {
          transform: scale(1.05);
        }

        .portfolio-card p {
          font-size: 14px;
          text-align: justify;
          line-height: 1.6;
        }

        .card-tools {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-top: 15px;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.4s ease-in-out;
        }

        .card-tools img {
          border-radius: 8px;
          width: 200px;
          height: 100px;
        }

        .portfolio-card:hover .card-tools {
          opacity: 1;
          transform: translateY(0);
        }

        /* SERVICES SECTION */
        .services {
          background: #D9D9D9 50%;
          padding: 80px 10%;
          height: 100dvh;
        }

        .service-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 50px;
        }

        .service-card {
          position: relative;
          background: linear-gradient(to bottom right, #a92c80, #e05b98);
          color: white;
          border-radius: 10px;
          padding: 25px;
          text-align: center;
          overflow: hidden;
          transition: all 0.4s ease;
          cursor: pointer;
        }

        .service-card::before {
          content: "";
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          opacity: 0;
          transform: scale(1.1);
          transition: all 0.5s ease;
          border-radius: 10px;
        }

        .service-card:nth-child(1)::before {
          background-image: url('Photos/design.jpg');
        }

        .service-card:nth-child(2)::before {
          background-image: url('Photos/mobile.jpg');
        }

        .service-card:nth-child(3)::before {
          background-image: url('Photos/landingpage.jpg');
        }

        .service-card:nth-child(4)::before {
          background-image: url('Photos/design-improvement.jpg');
        }

        .service-card:hover::before {
          opacity: 1;
          transform: scale(1);
        }

        .service-card h3,
        .service-card p {
          position: relative;
          z-index: 2;
          transition: all 0.3s ease;
        }

        .service-card:hover h3,
        .service-card:hover p {
          opacity: 0;
          transform: translateY(10px);
        }

        .service-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
        }

        .service-card h3 {
          background: #fff;
          color: #000;
          border-radius: 6px;
          padding: 8px;
          font-size: 16px;
          margin-bottom: 15px;
        }

        /* CONTACT SECTION */
        .contact {
          background: linear-gradient(180deg, #D9D9D9 50%, #c03a85 100%);
          padding: 80px 10%;
          color: #000;
        }

        .contact-container {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 40px;
          align-items: center;
        }

        .contact-info {
          flex: 1;
          min-width: 250px;
          font-size: 16px;
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .contact-info p {
          font-size: 16px;
          color: #fff;
          display: flex;
          align-items: center;
          gap: 10px;
          margin: 8px 0;
        }

        .contact-info i {
          color: #ea50ab;
          font-size: 18px;
          transition: transform 0.3s ease, color 0.3s ease;
        }

        .contact-info p:hover i {
          transform: scale(1.2);
          color: #fff;
        }

        .contact-form {
          flex: 1;
          min-width: 280px;
          background: #fff;
          padding: 30px;
          padding-top: 100px;
          border-radius: 10px;
          display: flex;
          flex-direction: column;
          gap: 15px;
          justify-self: center;
        }

        .contact-form input,
        .contact-form textarea {
          background: #dcdcdc;
          border: none;
          border-radius: 6px;
          padding: 10px;
          font-size: 14px;
          resize: none;
        }

        .contact-form button {
          background: #8a1456;
          color: white;
          border: none;
          padding: 10px;
          border-radius: 8px;
          font-size: 15px;
          cursor: pointer;
        }

        /* RESPONSIVE */
        @media (max-width: 768px) {
          .hero {
            flex-direction: column;
            text-align: center;
          }

          .buttons {
            justify-content: center;
          }

          .contact-container {
            flex-direction: column;
          }

          .portfolio-container,
          .service-container {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
      />

      {/* Navigation */}
      <nav>
        <ul>
          <li><a href="#home">HOME</a></li>
          <li><a href="#portfolio">PORTFOLIO</a></li>
          <li><a href="#services">SERVICE</a></li>
          <li><a href="#home">ABOUT ME</a></li>
          <li><a href="#contact">CONTACT</a></li>
        </ul>
      </nav>

      {/* HOME SECTION */}
      <section className="hero" id="home">
        <div className="text-section">
          <h1>HI, I'M SHEENA</h1>
          <h2>U I DESIGNER</h2>
          <p className="name">Sheena Mae R. Orita</p>
          <p className="location">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="#EA50AB"
              viewBox="0 0 16 16"
            >
              <path d="M8 0a5.53 5.53 0 0 0-5.5 5.5C2.5 9.14 8 16 8 16s5.5-6.86 5.5-10.5A5.53 5.53 0 0 0 8 0zm0 8a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
            </svg>
            Lagonoy, Camarines Sur
          </p>
          <div className="buttons">
            <a href="#portfolio" className="btn primary">VIEW MORE</a>
            <a href="#contact" className="btn secondary">REACH OUT</a>
          </div>
        </div>

        <div className="profile-section">
          <div className="accent"></div>
          <div className="profile-card">
            <div className="profile-pic">
              <img src="/Photos/myprofile.png" alt="Profile Photo" />
            </div>
            <p className="desc">
              I'm a passionate UI Designer dedicated to creating clean, user-friendly, and visually engaging interfaces.
              I focus on transforming ideas into intuitive digital experiences that are both functional and aesthetically pleasing.
            </p>
          </div>
        </div>
      </section>

      {/* PORTFOLIO SECTION */}
      <section className="portfolio" id="portfolio">
        <h2 className="section-title">PORTFOLIO</h2>
        <div className="portfolio-container">
          <div className="portfolio-card">
            <img src="/Photos/petwebsite.jpg" alt="Pet Website" className="portfolio-img" />
            <p>I designed a welcoming and playful landing page for a pet website. The goal was to create a friendly look that connects with pet lovers while maintaining clarity and balance in layout.</p>
            <div className="card-tools">
              <img src="/Photos/htmlcss.jpg" alt="HTML-CSS Logo" />
            </div>
          </div>
          <div className="portfolio-card">
            <img src="/Photos/delivery.jpg" alt="Mobile Delivery App" className="portfolio-img" />
            <p>I designed a mobile delivery app that helps users browse, order, and track deliveries easily. The focus was on intuitive navigation and minimalistic iconography.</p>
            <div className="card-tools">
              <img src="/Photos/figma.jpg" alt="Figma Logo" />
            </div>
          </div>
          <div className="portfolio-card">
            <img src="/Photos/enrollment.jpg" alt="School Enrollment System" className="portfolio-img" />
            <p>I designed a School Enrollment System UI in Figma to make the enrollment process simple and user-friendly. It includes login, registration, and dashboard screens.</p>
            <div className="card-tools">
              <img src="/Photos/figma.jpg" alt="Figma Logo" />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE SECTION */}
      <section className="services" id="services">
        <h2 className="section-title">SERVICES</h2>
        <div className="service-container">
          <div className="service-card">
            <h3>WEB UI DESIGN</h3>
            <p>I design modern, responsive websites that are visually appealing and easy to navigate.</p>
          </div>
          <div className="service-card">
            <h3>MOBILE APP UI DESIGN</h3>
            <p>I design user-friendly mobile interfaces with intuitive navigation and clean layout.</p>
          </div>
          <div className="service-card">
            <h3>LANDING PAGE DESIGN</h3>
            <p>I create attractive and conversion-focused landing pages that engage users effectively.</p>
          </div>
          <div className="service-card">
            <h3>UI REDESIGN & IMPROVEMENT</h3>
            <p>I enhance existing interfaces to improve usability, visual balance, and accessibility.</p>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="contact" id="contact">
        <div className="contact-container">
          <div className="contact-info">
            <h2 className="section-title-contact">REACH OUT</h2>
            <p><i className="fa-solid fa-phone"></i> +63 970 101 8826</p>
            <p><i className="fa-solid fa-envelope"></i> sheenamaeorita@gmail.com</p>
            <p><i className="fa-brands fa-instagram"></i> @pretty_sheena</p>
          </div>

          <div className="contact-form">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your message..."
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button onClick={handleSubmit}>Send</button>
          </div>
        </div>
      </section>
    </div>
  );
}