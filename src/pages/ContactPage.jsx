import React, { useState , useEffect} from 'react';
import IDCard from '../components/IDCard';
import Footer from '../components/UI/Footer'; // <--- IMPORTIEREN
import './pagescss/ContactPage.css';
import EmailLink from '../components/EmailLink';

const ContactPage = ({ onNavigate }) => { // onNavigate prop empfangen für den Footer Link
  const [status, setStatus] = useState("idle");

  // --- NEU: SCROLLEN KOMPLETT VERBIETEN ---
  useEffect(() => {
    // 1. Beim Öffnen: Scrollbalken wegmachen
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    // 2. Beim Schließen (wenn man weg navigiert): Scrollen wieder erlauben
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    setStatus("submitting");
    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mzdpqnvp", {
        method: "POST",
        body: data,
        headers: { 'Accept': 'application/json' }
      });
      if (response.ok) {
        setStatus("success");
        form.reset(); 
        setTimeout(() => setStatus("idle"), 3000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="contact-page-container">
      
      {/* 1. The ID Card */}
      <IDCard/>

      {/* 2. The Contact Form */}
      <div className="form-wrapper">
        <p className="form-heading">Let's connect!</p>
        
        <form className="glass-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" className="glass-input" required />
          <input type="email" name="email" placeholder="Your Email" className="glass-input" required />
          <textarea name="message" placeholder="Message" rows="8" className="glass-input" required></textarea>
          
          <button type="submit" className="glass-button" disabled={status === "submitting"}>
            {status === "idle" && "Send Message"}
            {status === "submitting" && "Sending..."}
            {status === "success" && "Sent!"}
            {status === "error" && "Error - Try Again"}
          </button>
          
          {status === "success" && (
            <p style={{color: '#d8a4bb', marginTop: '10px', fontSize: '0.9rem', textAlign: 'center'}}>
                Thanks for reaching out!
            </p>
          )}
          <EmailLink/>
        </form>
      </div>

      {/* 3. The Footer (Absolute Positioned) */}
      <div className="contact-footer-wrapper">
         <Footer onNavigate={onNavigate} />
      </div>

    </div>
  )
}

export default ContactPage;