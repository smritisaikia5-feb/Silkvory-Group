import { Clock, Video, User, Send, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function BookConsultation() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        topic: 'Strategy Session',
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
                company: formData.company,
                topic: formData.topic,
                message: formData.message,
                subject: `New Consultation Request: ${formData.topic}`
            };

            await emailjs.send(
                'YOUR_SERVICE_ID',     // Replace with your Service ID
                'YOUR_TEMPLATE_ID',    // Replace with your Template ID
                templateParams,
                'YOUR_PUBLIC_KEY'      // Replace with your Public Key
            );

            setIsSubmitted(true);
            setFormData({ name: '', email: '', phone: '', company: '', topic: 'Strategy Session', message: '' });
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Something went wrong. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSubmitted) {
        return (
            <div className="pt-28 min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
                <div className="max-w-md w-full bg-slate-900 rounded-3xl p-12 text-center shadow-2xl transform transition-all animate-ken-burns">
                    <div className="flex justify-center mb-8">
                        <div className="bg-emerald-500/20 p-6 rounded-full animate-pulse">
                            <CheckCircle className="text-emerald-500" size={80} />
                        </div>
                    </div>
                    <h2 className="text-4xl font-bold text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                        Thank You!
                    </h2>
                    <p className="text-gray-300 text-lg mb-10 leading-relaxed">
                        Your consultation request has been submitted successfully. Our team will reach out to you within 24 hours.
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
                        Book a Consultation
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90">Let's discuss how we can grow your business</p>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                                Schedule Your Free Strategy Call
                            </h2>
                            <p className="text-gray-600 mb-8">
                                Ready to transform your brand? Book a 30-minute free consultation with our experts to discuss your goals and how we can help you achieve them.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="bg-emerald-100 p-3 rounded-full mr-4">
                                        <Video className="text-emerald-600" size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold mb-1">Virtual Meeting</h3>
                                        <p className="text-gray-600">Connect via Zoom or Google Meet</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-teal-100 p-3 rounded-full mr-4">
                                        <Clock className="text-teal-600" size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold mb-1">30 Minutes</h3>
                                        <p className="text-gray-600">Focused session on your business needs</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                                        <User className="text-blue-600" size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold mb-1">Expert Advice</h3>
                                        <p className="text-gray-600">Speak directly with our senior strategists</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                                        <label className="block text-sm font-semibold mb-2">Company Name</label>
                                        <input
                                            type="text"
                                            value={formData.company}
                                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-emerald-500 focus:outline-none"
                                            placeholder="Your company"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                                            placeholder="+91..."
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold mb-2">Discussion Topic</label>
                                    <select
                                        value={formData.topic}
                                        onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-emerald-500 focus:outline-none"
                                    >
                                        <option>Strategy Session</option>
                                        <option>Performance Marketing</option>
                                        <option>Web Development</option>
                                        <option>Branding & Identity</option>
                                        <option>Social Media</option>
                                        <option>Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold mb-2">Message (Optional)</label>
                                    <textarea
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        rows={3}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-emerald-500 focus:outline-none"
                                        placeholder="Tell us a bit about your goals..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`w-full bg-emerald-600 text-white py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors flex items-center justify-center shadow-md transform hover:scale-[1.02] ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                                >
                                    <Send className="mr-2" size={20} /> {isSubmitting ? 'Sending...' : 'Book Consultation'}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
