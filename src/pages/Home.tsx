import { ArrowRight, Sparkles, Target, Users } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-[#0A0A0A] pt-28">
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-ken-burns"
            style={{ backgroundImage: 'url("/hero-digital.jpg")' }}
          />
          {/* Lighter gradient overlay for better visibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-[#0A0A0A]/70" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center text-center">
          <div className="max-w-5xl mx-auto mb-12">
            <h1
              className="text-4xl sm:text-6xl md:text-8xl font-bold text-white mb-8 leading-tight tracking-tight drop-shadow-2xl"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Marketing Agency That <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500 filter drop-shadow-lg">Thrives on Your Success</span>
            </h1>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-10">
              <button
                onClick={() => onNavigate('book-consultation')}
                className="bg-[#34D399] text-gray-900 px-8 py-4 rounded-full font-semibold text-lg flex items-center hover:bg-[#10B981] transition-all transform hover:scale-105 shadow-lg"
              >
                Grow Your Brand <ArrowRight className="ml-2" size={20} />
              </button>

              <button
                onClick={() => onNavigate('contact')}
                className="bg-black/30 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-black/50 transition-all transform hover:scale-105"
              >
                Talk to an Expert
              </button>
            </div>
          </div>


        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Why Choose Silkvory Group
            </h2>
            <p className="text-xl text-gray-600">We deliver excellence in every project</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative text-center p-8 rounded-2xl transition-all duration-500 hover:shadow-[0_0_50px_-12px_rgba(16,185,129,0.3)] active:shadow-[0_0_50px_-12px_rgba(16,185,129,0.5)] hover:border-emerald-300 active:border-emerald-400 hover:-translate-y-2 active:-translate-y-1 bg-white border border-transparent group overflow-hidden">
              {/* Side Glowing Effect */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-10">
                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 transition-transform group-hover:scale-110">
                  <Sparkles className="text-emerald-600" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3 uppercase tracking-tight">Creative Excellence</h3>
                <p className="text-gray-600 leading-relaxed">Innovative solutions that captivate and engage your audience</p>
              </div>
            </div>

            <div className="relative text-center p-8 rounded-2xl transition-all duration-500 hover:shadow-[0_0_50px_-12px_rgba(16,185,129,0.3)] active:shadow-[0_0_50px_-12px_rgba(16,185,129,0.5)] hover:border-emerald-300 active:border-emerald-400 hover:-translate-y-2 active:-translate-y-1 bg-white border border-transparent group overflow-hidden">
              {/* Side Glowing Effect */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-10">
                <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 transition-transform group-hover:scale-110">
                  <Target className="text-teal-600" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3 uppercase tracking-tight">Strategic Approach</h3>
                <p className="text-gray-600 leading-relaxed">Data-driven strategies that deliver measurable results</p>
              </div>
            </div>

            <div className="relative text-center p-8 rounded-2xl transition-all duration-500 hover:shadow-[0_0_50px_-12px_rgba(16,185,129,0.3)] active:shadow-[0_0_50px_-12px_rgba(16,185,129,0.5)] hover:border-emerald-300 active:border-emerald-400 hover:-translate-y-2 active:-translate-y-1 bg-white border border-transparent group overflow-hidden">
              {/* Side Glowing Effect */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-10">
                <div className="bg-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 transition-transform group-hover:scale-110">
                  <Users className="text-cyan-600" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3 uppercase tracking-tight">Expert Team</h3>
                <p className="text-gray-600 leading-relaxed">Talented professionals dedicated to your success</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-emerald-700 via-teal-700 to-emerald-900 relative overflow-hidden">
        {/* Animated Background Layer with Zoom */}
        <div className="absolute inset-0 animate-background-zoom">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/50 via-teal-600/50 to-cyan-600/50" />
        </div>

        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          {/* Large Floating Orbs */}
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-400/20 rounded-full blur-[120px] animate-pulse-glow" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-teal-400/20 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: '2s' }} />

          {/* Medium Floating Elements */}
          <div className="absolute top-[20%] right-[10%] w-64 h-64 bg-white/5 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-[30%] left-[15%] w-48 h-48 bg-cyan-400/10 rounded-full blur-2xl animate-float-slow" />
          <div className="absolute top-[50%] left-[5%] w-32 h-32 bg-emerald-400/10 rounded-full blur-xl animate-float" style={{ animationDelay: '3s' }} />

          {/* Small Accent Circles */}
          <div className="absolute top-[15%] left-[20%] w-20 h-20 bg-teal-300/20 rounded-full blur-lg animate-float-slow" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-[20%] right-[25%] w-24 h-24 bg-emerald-300/20 rounded-full blur-lg animate-float" style={{ animationDelay: '4s' }} />
          <div className="absolute top-[60%] right-[40%] w-16 h-16 bg-cyan-300/20 rounded-full blur-md animate-float-slow" style={{ animationDelay: '2.5s' }} />

          {/* Grid Pattern Mesh */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />

          {/* Diagonal Lines */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, white 35px, white 36px)`
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative group">
              {/* Animated Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 animate-pulse-glow"></div>

              {/* Image Container with Zoom */}
              <div className="relative overflow-hidden rounded-lg shadow-2xl transition-all duration-500 hover:scale-[1.03] active:scale-[1.01] hover:shadow-[0_0_50px_-12px_rgba(16,185,129,0.5)] active:shadow-[0_0_60px_-12px_rgba(16,185,129,0.7)] bg-white p-2 border border-gray-200 hover:border-emerald-300 active:border-emerald-400">
                <img
                  src="/creator-runway.png"
                  alt="The Creator Runway"
                  className="w-full h-auto object-contain transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>

            <div className="text-white space-y-6">
              <div className="inline-block px-4 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-medium mb-2 animate-pulse">
                Featured Event
              </div>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                Upcoming Event
              </h2>
              <h3 className="text-2xl md:text-3xl font-light text-emerald-200 tracking-wide">
                The Creator Runway 01
              </h3>
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-xl">
                Witness the fusion of creativity & productivity. Join us for the first of its kind runway fashion show for the creators across India.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <button
                  onClick={() => onNavigate('events')}
                  className="bg-white text-emerald-600 px-10 py-4 rounded-full font-bold hover:bg-emerald-50 transition-all transform hover:scale-105 shadow-xl flex items-center group"
                >
                  Learn More
                  <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section >

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Ready to Transform Your Brand?
          </h2>
          <p className="text-xl text-gray-600 mb-8">Let's create something extraordinary together</p>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-emerald-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-emerald-700 transition-colors"
          >
            Get in Touch
          </button>
        </div>
      </section>
    </div >
  );
}
