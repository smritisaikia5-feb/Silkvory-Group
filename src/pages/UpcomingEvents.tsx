import { ArrowRight, Calendar, MapPin, Sparkles } from 'lucide-react';

interface UpcomingEventsProps {
    onNavigate: (page: string) => void;
}

export default function UpcomingEvents({ onNavigate }: UpcomingEventsProps) {
    return (
        <div className="pt-28">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay animate-ken-burns" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                        Upcoming Events
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90">Witness the Fusion of Fashion & Creativity</p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        {/* Image Column */}
                        <div className="space-y-8">
                            <div className="relative group">
                                {/* Animated Glow Effect */}
                                <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>

                                <div className="relative overflow-hidden rounded-2xl shadow-2xl transition-all duration-500 hover:scale-[1.02] active:scale-[1.01] hover:shadow-[0_0_50px_-12px_rgba(16,185,129,0.5)] active:shadow-[0_0_60px_-12px_rgba(16,185,129,0.7)] bg-white p-2 border border-gray-100 hover:border-emerald-300 active:border-emerald-400">
                                    <img
                                        src="/creator-runway.png"
                                        alt="The Creator Runway"
                                        className="w-full h-auto object-contain bg-gray-50 transition-transform duration-700 hover:scale-105"
                                    />
                                    {/* Side Glowing Effect on Hover */}
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 flex items-center space-x-4">
                                    <Calendar className="text-blue-600" size={24} />
                                    <div>
                                        <p className="text-sm text-blue-600 font-semibold uppercase">Date</p>
                                        <p className="text-gray-900 font-medium">August, 2026</p>
                                    </div>
                                </div>
                                <div className="bg-purple-50 p-6 rounded-xl border border-purple-100 flex items-center space-x-4">
                                    <MapPin className="text-purple-600" size={24} />
                                    <div>
                                        <p className="text-sm text-purple-600 font-semibold uppercase">Location</p>
                                        <p className="text-gray-900 font-medium">Delhi, India</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Text Column */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center" style={{ fontFamily: "'Playfair Display', serif" }}>
                                    <Sparkles className="mr-3 text-blue-600" /> The Creator Runway 01
                                </h2>
                                <div className="prose prose-lg text-gray-600 space-y-6">
                                    <p className="leading-relaxed">
                                        We are very thrilled to announce the first of its kind runway fashion show for the creators across India ~The Delhi Edition brought to you by <strong>Silkvory Group</strong>.
                                    </p>
                                    <p className="leading-relaxed font-medium text-gray-800 italic border-l-4 border-blue-600 pl-6">
                                        "In this iconic runway, by submerging the creator industry & the fashion industry we are bringing both the categories together into one platform & we are calling it “The Creator Runway”."
                                    </p>
                                    <p className="leading-relaxed">
                                        The first of its kind Runway in India where creativity will meet productivity making it a huge collaboration nation wide for the entire industry. We are keeping the first edition very special, exclusive & limited.
                                    </p>
                                    <p className="text-xl font-bold text-blue-600">
                                        The event is scheduled around second week of August, 2026.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Ready to take your brand to the next level?</h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    Contact Silkvory Group today to discuss how our integrated marketing solutions can drive your business forward. Whether you’re launching a new product, expanding your market reach, or revitalizing your brand identity, we are here to help you succeed.
                                </p>
                                <button
                                    onClick={() => onNavigate('book-consultation')}
                                    className="bg-emerald-600 text-white px-10 py-4 rounded-full font-bold hover:bg-emerald-700 transition-all transform hover:-translate-y-1 shadow-lg flex items-center"
                                >
                                    Book Consultation <ArrowRight className="ml-2" size={20} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
