// src/app/contact/page.tsx
export default function Contact() {
    return (
      <div className="contact-container">
        <h1>Contact Me</h1>
        <p>If you’d like to get in touch, feel free to drop me a message below!</p>
        <form className="contact-form" action="https://formsubmit.co/[your-email]" method="POST">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Your Name" required />
          
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Your Email" required />
          
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" placeholder="Your Message" required />
          
          <button type="submit">Send Message</button>
        </form>
      </div>
    );
  }
  