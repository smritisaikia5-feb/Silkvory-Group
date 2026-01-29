import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactUs() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const templateParams = {
        to_name: 'Silkvory Group',
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        message: formData.message,
        subject: `New Contact Form Submission from ${formData.name}`
      };

      await emailjs.send(
        'YOUR_SERVICE_ID',     // Replace with your Service ID
        'YOUR_TEMPLATE_ID',    // Replace with your Template ID
        templateParams,
        'YOUR_PUBLIC_KEY'      // Replace with your Public Key
      );

      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="pt-28 min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 text-center">
        <div className="max-w-md w-full bg-slate-900 rounded-3xl p-12 shadow-2xl transform transition-all animate-ken-burns">
          <div className="flex justify-center mb-8">
            <div className="bg-emerald-500/20 p-6 rounded-full animate-pulse">
              <CheckCircle className="text-emerald-500" size={80} />
            </div>
          </div>
          <h2 className="text-4xl font-bold text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Thank You!
          </h2>
          <p className="text-gray-300 text-lg mb-10 leading-relaxed">
            Your request has been submitted successfully. Our team will reach out to you within 24 hours.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="bg-emerald-500 text-white px-8 py-4 rounded-full font-bold hover:bg-emerald-600 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center mx-auto"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-28">
      <section className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay animate-ken-burns" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Get in Touch
          </h1>
          <p className="text-xl md:text-2xl opacity-90">We'd love to hear from you</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Let's Start a Conversation
              </h2>
              <p className="text-gray-600 mb-8">
                Have a project in mind or want to learn more about our services? Fill out the form and our team will get back to you within 24 hours.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-emerald-100 p-3 rounded-full mr-4">
                    <Mail className="text-emerald-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-gray-600">info@silkvorygroup.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-teal-100 p-3 rounded-full mr-4">
                    <Phone className="text-teal-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-gray-600">+91 8399078105</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-emerald-100 p-3 rounded-full mr-4">
                    <MapPin className="text-emerald-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Location</h3>
                    <p className="text-gray-600">Delhi, India</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl shadow-lg border border-gray-100">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-emerald-500 focus:outline-none"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-emerald-500 focus:outline-none"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Phone</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-emerald-500 focus:outline-none"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Message</label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-emerald-500 focus:outline-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-emerald-600 text-white py-3 rounded-lg font-bold hover:bg-emerald-700 transition-all flex items-center justify-center shadow-md transform hover:scale-[1.02] ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  <Send className="mr-2" size={20} /> {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
