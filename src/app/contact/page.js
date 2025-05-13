"use client";

import { useRef, useState, lazy } from "react";
import styles from "./contact.module.css";
import dynamic from "next/dynamic";


const Contact = () => {
  const form = useRef();
  const [showModal, setShowModal] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);

    const data = {
      email: formData.get("reply_to"),
      name: formData.get("from_name"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("https://portfoli-server-1.onrender.com/Comment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setShowModal(true);
        form.current.reset();
      } else {
        console.error("Server error:", await response.text());
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  };

  return (
    <>

      <div className={styles.container}>
      
                {/* Profile Card */}
          <div className={styles.profileCard}>
            <img src="/images/favicon.ico" alt="Rajib Fakir" className={styles.profileImage} />
            <h3>Rajib Fakir</h3>
            <p>Full Stack Web Developer</p>
            <p>Dhaka, Bangladesh</p>
            
  
            
            
            <div className={styles.socialLinks}>
              <a href="https://www.facebook.com/profile.php?id=100092192364083">                    <i className="bi bi-facebook"></i>
              </a>
              <a href="https://wa.me/8801600299821">
                                  <i className="bi bi-whatsapp"></i>
              </a>
              <a href="mailto:rajib01943075658@gmail.com">                    <i className="bi bi-envelope-fill"></i>
              </a>
            </div>
          </div>
        </div>
      
      
      
      
      
        <div className={styles.header}>
          <h2>Let's Get in Touch</h2>
          <p>I'm open to freelance work, collaboration, or just a tech talk!</p>
        </div>

        <div className={`${styles.grid} p-2`}>
          {/* Contact Form */}
          <div className={styles.formCard}>
            <h4>Send Me a Message</h4>
            <form ref={form} onSubmit={sendEmail}>
              <input name="from_name" placeholder="Your Name" required />
              <input name="reply_to" type="email" placeholder="Your Email" required />
              <input name="subject" placeholder="Subject" />
              <textarea name="message" placeholder="Your Message" rows={5} required />
              <button type="submit">Send Message</button>
            </form>
          </div>



        {/* Map */}
        <div className={styles.mapContainer}>
          <iframe
            width="100%"
            height="250"
            src="https://www.google.com/maps/embed/v1/place?q=আন্দাইর%20বিল&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
            allowFullScreen
            loading="lazy"
            title="Map"
          ></iframe>
        </div>

        {/* Modal */}
        {showModal && (
          <div className={styles.modalBackdrop} onClick={() => setShowModal(false)}>
            <div className={styles.modal}>
              <h5>Message Sent!</h5>
              <p>Thank you for contacting me. I’ll get back to you soon!</p>
              <button onClick={() => setShowModal(false)}>Close</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Contact;