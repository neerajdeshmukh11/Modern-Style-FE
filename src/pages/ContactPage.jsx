import React, { useState } from 'react';
import './ContactPage.css'; // Assuming you have a CSS file for styling

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // State for form submission status and message
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', 'submitting'

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
        })
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus('success');
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
              We'd love to hear from you. Send us a message and we'll respond as soon as possible.
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
                  <label htmlFor="subject" className="block text-sm font-semibold text-white/95 mb-2 uppercase tracking-wider">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    placeholder="What's this about?"
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
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="contact-info-item backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
                <h3 className="text-lg font-bold text-purple-400 mb-2 uppercase tracking-wider">Email</h3>
                <p className="text-white/90 text-lg">contact@example.com</p>
              </div>
              
              <div className="contact-info-item backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
                <h3 className="text-lg font-bold text-purple-400 mb-2 uppercase tracking-wider">Phone</h3>
                <p className="text-white/90 text-lg">+1 (555) 123-4567</p>
              </div>
              
              <div className="contact-info-item backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
                <h3 className="text-lg font-bold text-purple-400 mb-2 uppercase tracking-wider">Address</h3>
                <p className="text-white/90 text-lg">123 Business St, City, State 12345</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
