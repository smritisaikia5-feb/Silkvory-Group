import { Linkedin, Mail } from 'lucide-react';

const team = [
  {
    name: 'Smriti Saikia',
    role: 'Founder & CEO',
    image: '/team-smriti.jpg',
    linkedin: 'https://www.linkedin.com/in/smriti-saikia-4ba232139/',
    email: 'https://mail.google.com/mail/?view=cm&fs=1&to=silkvorygroup@gmail.com',
  },
  {
    name: 'Sagarika Saikia',
    role: 'Co-founder &  Junior Lead Developer',
    image: '/team-sagarika-v2.png',
    linkedin: 'https://www.linkedin.com/in/sagarika-saikia-873697209/',
    email: 'https://mail.google.com/mail/?view=cm&fs=1&to=sagarikasaikia0624@gmail.com',
  },
  {
    name: 'Amit Patel',
    role: 'Head of Digital Marketing',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
    linkedin: '#',
    email: 'mailto:#',
  },
  {
    name: 'Neha Gupta',
    role: 'Brand Strategist',
    image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400',
    linkedin: '#',
    email: 'mailto:#',
  },
  {
    name: 'Rupam Saikia',
    role: 'Senior Lead Developer',
    image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400',
    linkedin: '#',
    email: 'mailto:#',
  },
  {
    name: 'Ananya Desai',
    role: 'Social Media Manager',
    image: 'https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=400',
    linkedin: '#',
    email: 'mailto:#',
  },
];

interface OurTeamProps {
  onNavigate: (page: string) => void;
}

export default function OurTeam({ onNavigate }: OurTeamProps) {
  return (
    <div className="pt-28">
      <section className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay animate-ken-burns" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Our Team
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
            Meet the talented individuals who bring creativity and expertise to every project
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our diverse team of strategists, designers, developers, and marketers work collaboratively to deliver exceptional results for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="relative bg-white rounded-xl shadow-lg transition-all duration-500 hover:shadow-[0_0_50px_-12px_rgba(16,185,129,0.4)] active:shadow-[0_0_50px_-12px_rgba(16,185,129,0.6)] border border-transparent hover:border-emerald-300 active:border-emerald-400 group overflow-hidden">
                {/* Side Glowing Effect on Hover */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="aspect-square overflow-hidden relative bg-[#E5E7EB]">
                  {/* Founder's Office Background */}
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-100"
                    style={{ backgroundImage: 'url("/silkvory-office-bg.jpg")' }}
                  />
                  <img
                    src={member.image}
                    alt={member.name}
                    className="relative z-10 w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300 drop-shadow-2xl"
                  />
                </div>
                <div className="p-6 relative z-10">
                  <h3 className="text-xl font-semibold mb-1 group-hover:text-emerald-600 transition-colors uppercase tracking-tight">{member.name}</h3>
                  <p className="text-gray-600 mb-4">{member.role}</p>
                  <div className="flex space-x-3">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-emerald-100 text-emerald-600 p-2 rounded-full hover:bg-emerald-200 transition-colors"
                    >
                      <Linkedin size={20} />
                    </a>
                    <a
                      href={member.email}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-100 text-gray-600 p-2 rounded-full hover:bg-gray-200 transition-colors"
                    >
                      <Mail size={20} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Work with Our Experts
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Ready to take your brand to the next level? Collaborate with our talented team to bring your vision to life.
          </p>
          <button
            onClick={() => onNavigate('book-consultation')}
            className="bg-emerald-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-emerald-700 transition-all transform hover:scale-105 shadow-xl"
          >
            Book Consultation
          </button>
        </div>
      </section>
    </div>
  );
}
