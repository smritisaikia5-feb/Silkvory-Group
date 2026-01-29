import { TrendingUp, Monitor, Calendar, Share2, Users, Newspaper, Palette, Code, Lightbulb } from 'lucide-react';

const services = [
  {
    icon: TrendingUp,
    title: 'Performance Marketing',
    description: 'Developing cohesive digital marketing strategies aligned with business objectives. We specialize in data-driven strategies that optimize campaigns for maximum ROI across digital platforms.',
    color: 'bg-blue-100 text-blue-600',
  },
  {
    icon: Monitor,
    title: 'Display Billboards',
    description: 'Crafting impactful outdoor advertising campaigns through digital billboards that capture attention and amplify brand messaging in key locations. Digital Billboards placed across apartment societies are our biggest USP.',
    color: 'bg-purple-100 text-purple-600',
  },
  {
    icon: Calendar,
    title: 'Event Management',
    description: 'From concept to execution, we create memorable experiences that engage audiences and align with brand objectives. Our services are designed to ensure that every aspect of an event is meticulously planned and flawlessly executed.',
    color: 'bg-pink-100 text-pink-600',
  },
  {
    icon: Share2,
    title: 'Social Media Management',
    description: 'We specialize in social media management to elevate your brand’s online presence. Our services include strategic content, community engagement, influencer partnerships & analytics across major platforms like Facebook, Instagram, Twitter, and LinkedIn to stand out and thrive in the digital landscape.',
    color: 'bg-cyan-100 text-cyan-600',
  },
  {
    icon: Users,
    title: 'Influencer Marketing',
    description: 'Collaborating with influencers to amplify brand awareness and drive authentic engagement among target demographics. These influencers, often categorized by their niche expertise, authenticity, and reach, are leveraged to create authentic content and promote products or services to their audience.',
    color: 'bg-orange-100 text-orange-600',
  },
  {
    icon: Newspaper,
    title: 'PR & Media',
    description: 'Crafting compelling narratives and securing media placements that enhance brand credibility and visibility. Our expertise are Media Relations, Press Release, Community Relation, Media Planning, Creative Development & Content Distribution etc. and many more.',
    color: 'bg-green-100 text-green-600',
  },
  {
    icon: Palette,
    title: 'Branding and Identity',
    description: 'We help businesses create a strong & memorable brand identity. Our branding & identity services include developing a cohesive brand strategy, designing impactful logos, establishing brand guidelines, & crafting compelling brand messaging.',
    color: 'bg-red-100 text-red-600',
  },
  {
    icon: Code,
    title: 'Web Design & Development',
    description: 'We help businesses design and develop high-performance websites that are visually compelling, user-friendly, and conversion-focused. Our website building services include strategic planning, responsive UI/UX design, fast and secure development, SEO-ready architecture, and scalable solutions tailored to your business goals.',
    color: 'bg-indigo-100 text-indigo-600',
  },
  {
    icon: Lightbulb,
    title: 'Creative & Content Creation',
    description: 'Our creative team excels at producing visually stunning and engaging marketing materials as in graphic design and video production etc. Our content creation services include blog writing, copywriting, photography, podcast production, development of whitepapers & e-books.',
    color: 'bg-yellow-100 text-yellow-600',
  },
];

export default function Services() {
  return (
    <div className="pt-28">
      <section className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay animate-ken-burns" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Our Services
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
            Comprehensive marketing solutions tailored to elevate your brand and drive measurable results
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="relative bg-white rounded-xl shadow-lg hover:shadow-[0_0_50px_-12px_rgba(16,185,129,0.3)] active:shadow-[0_0_50px_-12px_rgba(16,185,129,0.5)] transition-all duration-500 transform hover:scale-105 p-8 border border-gray-100 hover:border-emerald-300 active:border-emerald-400 cursor-pointer group overflow-hidden active:scale-105"
                >
                  {/* Side Glowing Effect on Hover */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 blur-3xl opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <div className="relative z-10">
                    <div className={`w-16 h-16 rounded-full ${service.color} flex items-center justify-center mb-6`}>
                      <Icon size={32} />
                    </div>
                    <h3 className="text-2xl font-semibold mb-3 text-gray-900 group-hover:text-emerald-600 transition-colors uppercase tracking-tight">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-900 transition-colors">{service.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-12" style={{ fontFamily: "'Playfair Display', serif" }}>
            Our Trusted Partners
          </h2>
          <div className="relative overflow-hidden w-full py-12 shadow-inner bg-white/50 rounded-3xl touch-none pointer-events-none">
            {/* Gradient Mask for fading edges */}
            <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-gray-50 via-gray-50/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-gray-50 via-gray-50/80 to-transparent z-10 pointer-events-none" />

            <div className="flex animate-marquee whitespace-nowrap items-center py-4 w-max !animate-marquee">
              <div className="flex gap-10 md:gap-20 items-center px-5 md:px-10">
                {/* Logo Set 1 */}
                {[
                  { src: "/client-rajdeep.png", alt: "Rajdeep Events" },
                  { src: "/client-house-of-gifts.png", alt: "House of Gifts" },
                  { src: "/client-barista.png", alt: "Barista" },
                  { src: "/client-abski.png", alt: "Abski Technology" },
                  { src: "/client-brahmaputra-v2.png", alt: "Brahmaputra Fables" },
                  { src: "/client-abski.png", alt: "Abski Technology" },
                  { src: "/client-cassini.png", alt: "Cassini" },
                  { src: "/client-purbanchal.png", alt: "Purbanchal Naturals" },
                  { src: "/client-abski.png", alt: "Abski Technology" },
                  { src: "/client-numaligarh.png", alt: "Numaligarh Refinery Limited" },
                  { src: "/client-mochalicious.png", alt: "Mochalicious" },
                  { src: "/client-quick-shoppe.png", alt: "Quick Shoppe" },
                ].map((client, index) => (
                  <div key={index} className="flex-shrink-0 w-44 h-22 md:w-56 md:h-28 lg:w-64 lg:h-32 flex items-center justify-center bg-white rounded-2xl p-4 shadow-sm">
                    <img
                      src={client.src}
                      alt={client.alt}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                ))}
              </div>

              <div className="flex gap-10 md:gap-20 items-center px-5 md:px-10">
                {/* Logo Set 2 (Duplicate for seamless scroll) */}
                {[
                  { src: "/client-rajdeep.png", alt: "Rajdeep Events" },
                  { src: "/client-house-of-gifts.png", alt: "House of Gifts" },
                  { src: "/client-barista.png", alt: "Barista" },
                  { src: "/client-abski.png", alt: "Abski Technology" },
                  { src: "/client-brahmaputra-v2.png", alt: "Brahmaputra Fables" },
                  { src: "/client-abski.png", alt: "Abski Technology" },
                  { src: "/client-cassini.png", alt: "Cassini" },
                  { src: "/client-purbanchal.png", alt: "Purbanchal Naturals" },
                  { src: "/client-abski.png", alt: "Abski Technology" },
                  { src: "/client-numaligarh.png", alt: "Numaligarh Refinery Limited" },
                  { src: "/client-mochalicious.png", alt: "Mochalicious" },
                  { src: "/client-quick-shoppe.png", alt: "Quick Shoppe" },
                ].map((client, index) => (
                  <div key={`dup-${index}`} className="flex-shrink-0 w-44 h-22 md:w-56 md:h-28 lg:w-64 lg:h-32 flex items-center justify-center bg-white rounded-2xl p-4 shadow-sm">
                    <img
                      src={client.src}
                      alt={client.alt}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
