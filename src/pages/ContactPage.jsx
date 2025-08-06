import React, { useState } from 'react';
import './ContactPage.css'; // Assuming you have a CSS file for styling

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    // subject: '', // Removed subject from formData
    message: ''
  });

  // State for form submission status and message
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', 'submitting', 'duplicate'

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus('submitting'); // Set status to submitting

    // --- Client-side check for duplicate email ---
    const submittedEmails = JSON.parse(localStorage.getItem('submittedEmails')) || [];
    if (submittedEmails.includes(formData.email)) {
      setSubmitStatus('duplicate');
      console.warn('Duplicate email submission prevented:', formData.email);
      return; // Stop the submission
    }
    // --- End client-side check ---

    // Replace 'YOUR_ACCESS_KEY_HERE' with your actual Web3Forms Access Key
    const accessKey = 'ddae0758-2f42-4203-8144-680863910bff'; 

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          access_key: accessKey, // Include your access key in the payload
          // Add a custom field to identify unique submissions if needed by Web3Forms
          // e.g., 'Email_Submitted': formData.email 
        })
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus('success');
        // Store the successfully submitted email in localStorage
        const updatedSubmittedEmails = [...submittedEmails, formData.email];
        localStorage.setItem('submittedEmails', JSON.stringify(updatedSubmittedEmails));

        setFormData({ // Clear form fields on success
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        console.log('Form submitted successfully:', data);
      } else {
        setSubmitStatus('error');
        console.error('Form submission failed:', data);
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="min-h-screen w-full relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/7c7ca578-ded3-434a-b26a-3f92de0d6011.png')`
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="flex flex-col items-center gap-12">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
              Get In Touch
            </h1>
            <p className="text-xl text-white/90 max-w-2xl leading-relaxed">
              We welcome your inquiries. Please send us a message, and we’ll ensure a timely response.
            </p>
          </div>

          {/* Form Container */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-6xl">
            {/* Contact Form */}
            <div className="contact-form backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-8 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Hidden input for Web3Forms access key */}
                <input type="hidden" name="access_key" value="ddae0758-2f42-4203-8144-680863910bff" />
                {/* You can also add a hidden honeypot field for spam protection (optional) */}
                <input type="hidden" name="botcheck" className="honeypot-field" />

                <div className="form-group">
                  <label htmlFor="name" className="block text-sm font-semibold text-white/95 mb-2 uppercase tracking-wider">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    placeholder="Your full name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="block text-sm font-semibold text-white/95 mb-2 uppercase tracking-wider">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message" className="block text-sm font-semibold text-white/95 mb-2 uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="5"
                    className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-vertical"
                    placeholder="Tell us what you're thinking..."
                    required
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-purple-500/50 uppercase tracking-wide"
                  disabled={submitStatus === 'submitting'} // Disable button during submission
                >
                  {submitStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                </button>

                {/* Submission status messages */}
                {submitStatus === 'success' && (
                  <p className="text-green-400 text-center mt-4">Message sent successfully! We'll get back to you soon.</p>
                )}
                {submitStatus === 'error' && (
                  <p className="text-red-400 text-center mt-4">Oops! Something went wrong. Please try again later.</p>
                )}
                {submitStatus === 'duplicate' && (
                  <p className="text-yellow-400 text-center mt-4">You've already submitted a message with this email. Please try a different email or wait for our response.</p>
                )}
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="contact-info-item backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
                <h3 className="text-lg font-bold text-purple-400 mb-2 uppercase tracking-wider">Email</h3>
                <p className="text-white/90 text-lg">info@encegenailabs.com</p>
              </div>
              
              <div className="contact-info-item backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
                <h3 className="text-lg font-bold text-purple-400 mb-2 uppercase tracking-wider">Phone</h3>
                <p className="text-white/90 text-lg">+91 9226113909</p>
              </div>
              
              <div className="contact-info-item backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
                <h3 className="text-lg font-bold text-purple-400 mb-2 uppercase tracking-wider">Address</h3>
                <p className="text-white/90 text-lg"> BA HUB , Office no : 03 , Sambhaji Nagar (Baif road) , Near BA  Varmont Society , Wagholi , Pune- 412207</p>
              </div>

              {/* Google Map Embed */}
              <div className="map-container backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl overflow-hidden shadow-xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2925.149044082068!2d73.97599660943659!3d18.573547982457445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c3f4df630e5b%3A0xd2be9aa93492ecf5!2sEncegen%20Ai%20Labs%20Pvt%20Ltd!5e1!3m2!1sen!2sin!4v1754470840254!5m2!1sen!2sin" 
                  width="100%" 
                  height="300" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Our Location on Google Maps"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;