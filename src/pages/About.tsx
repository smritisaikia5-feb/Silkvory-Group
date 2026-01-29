import { Target, Lightbulb, Users, Award, Rocket, Heart } from 'lucide-react';


interface AboutProps {
    onNavigate: (page: string) => void;
}

export default function About({ onNavigate }: AboutProps) {
    const values = [
        {
            icon: Lightbulb,
            title: 'Innovation',
            description: 'We constantly push boundaries to create unique and effective solutions.',
        },
        {
            icon: Users,
            title: 'Collaboration',
            description: 'We believe in the power of partnership with our clients and within our team.',
        },
        {
            icon: Award,
            title: 'Excellence',
            description: 'We are committed to delivering the highest quality in every project we undertake.',
        },
        {
            icon: Heart,
            title: 'Passion',
            description: 'We love what we do, and that enthusiasm shines through in our work.',
        },
        {
            icon: Target,
            title: 'Results',
            description: 'We focus on achieving tangible, measurable outcomes for your business.',
        },
        {
            icon: Rocket,
            title: 'Growth',
            description: 'We are dedicated to helping your brand grow and evolve in the digital landscape.',
        },
    ];

    return (
        <div className="pt-28">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay animate-ken-burns" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                        About Silkvory Group
                    </h1>
                    <p className="text-xl md:text-2xl max-w-3xl mx-auto font-light leading-relaxed">
                        We are a creative powerhouse dedicated to transforming brands through innovative marketing, exceptional design, and strategic storytelling.
                    </p>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="relative group">
                            {/* Animated Glow Effect */}
                            <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>

                            <div className="relative overflow-hidden rounded-2xl shadow-2xl transition-all duration-500 hover:scale-[1.02] active:scale-[1.01] hover:shadow-[0_0_50px_-12px_rgba(16,185,129,0.5)] active:shadow-[0_0_60px_-12px_rgba(16,185,129,0.7)] bg-white p-2 border border-gray-100 hover:border-emerald-300 active:border-emerald-400">
                                <img
                                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
                                    alt="Our Team Collaborating"
                                    className="w-full h-[500px] object-cover rounded-xl transition-transform duration-700 hover:scale-105"
                                />
                                {/* Side Glowing Effect on Hover */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                            </div>
                        </div>
                        <div>
                            <h2 className="text-4xl font-bold mb-8 text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>
                                Our Story
                            </h2>
                            <div className="prose prose-lg text-gray-600">
                                <p className="mb-6">
                                    Founded with a vision to bridge the gap between creativity and data-driven results, Silkvory Group has grown into a full-service marketing agency trusted by brands worldwide.
                                </p>
                                <p className="mb-6">
                                    We started as a small team of passionate creatives and have evolved into a diverse collective of strategists, designers, developers, and marketers. Our journey is defined by our relentless pursuit of excellence and our desire to help businesses find their unique voice in a crowded digital marketplace.
                                </p>
                                <p>
                                    Today, we continue to push the boundaries of what's possible, leveraging the latest technologies and trends to deliver impactful experiences that resonate with audiences and drive growth.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Mission & Vision */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="bg-white p-10 rounded-2xl shadow-lg border-t-4 border-emerald-500 hover:transform hover:-translate-y-2 transition-transform duration-300">
                            <h3 className="text-3xl font-bold mb-6 text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>Our Mission</h3>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                To empower brands with creative solutions and strategic insights that drive meaningful connections and sustainable growth. We strive to be the catalyst for our clients' success in the digital age.
                            </p>
                        </div>
                        <div className="bg-white p-10 rounded-2xl shadow-lg border-t-4 border-teal-500 hover:transform hover:-translate-y-2 transition-transform duration-300">
                            <h3 className="text-3xl font-bold mb-6 text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>Our Vision</h3>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                To be the leading global agency known for innovation, integrity, and impact. We envision a world where every brand has the tools and strategy to tell their story authentically and effectively.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Core Values */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4 text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>
                            Our Core Values
                        </h2>
                        <p className="text-xl text-gray-600">The principles that guide everything we do</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {values.map((value, index) => (
                            <div key={index} className="relative p-8 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-[0_0_50px_-12px_rgba(16,185,129,0.3)] active:shadow-[0_0_50px_-12px_rgba(16,185,129,0.5)] hover:border-emerald-300 active:border-emerald-400 transition-all duration-500 group overflow-hidden">
                                {/* Side Glowing Effect */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 blur-3xl opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-500 pointer-events-none" />

                                <div className="relative z-10">
                                    <div className="w-14 h-14 bg-emerald-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-colors duration-300">
                                        <value.icon className="text-emerald-600 group-hover:text-white transition-colors duration-300" size={28} />
                                    </div>
                                    <h3 className="text-xl font-bold mb-4 text-gray-900 uppercase tracking-tight">{value.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20"></div>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h2 className="text-4xl md:text-5xl font-bold mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
                        Ready to Write Your Success Story?
                    </h2>
                    <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                        Let's collaborate to build something extraordinary. Partner with us and experience the difference of a truly dedicated team.
                    </p>
                    <button
                        onClick={() => onNavigate('book-consultation')}
                        className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-10 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-xl"
                    >
                        Get Started Today
                    </button>
                </div>
            </section>
        </div>
    );
}
