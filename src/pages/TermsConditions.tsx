export default function TermsConditions() {
  return (
    <div className="pt-28 bg-gray-50 min-h-screen">
      <section className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay animate-ken-burns" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Terms & Conditions
          </h1>
          <p className="text-xl opacity-90">Last updated: January 2026</p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Light Theme Card with Hover Glow Effect */}
          <div className="bg-white border border-gray-100 rounded-2xl p-8 md:p-12 shadow-xl transition-all duration-500 hover:shadow-[0_0_50px_-12px_rgba(37,99,235,0.3)] active:shadow-[0_0_50px_-12px_rgba(37,99,235,0.5)] hover:border-blue-300 active:border-blue-400 group">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-10 font-medium leading-relaxed border-l-4 border-blue-600 pl-6 py-2 bg-blue-50/50">
                Welcome to Silkvory Group. These terms and conditions outline the rules and regulations for the use of our website and services provided by us.
              </p>

              <div className="space-y-12">
                <section>
                  <h2 className="text-2xl font-bold mb-4 text-gray-900 flex items-center">
                    <span className="text-blue-600 mr-4">01.</span> Acceptance of Terms
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    By accessing our website and engaging with our services, you agree to be bound by these terms and conditions. If you do not agree with any part of these terms, you may not use our website or services.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4 text-gray-900 flex items-center">
                    <span className="text-blue-600 mr-4">02.</span> Services Offered
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    Silkvory Group offers a range of marketing and advertising services including but not limited to performance marketing, social media management, branding & identity, display billboards, influencer marketing, web design & development, event management, PR & media, and creative & content creation. Specific details of each service may be outlined separately.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4 text-gray-900 flex items-center">
                    <span className="text-blue-600 mr-4">03.</span> User Responsibilities
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    You agree to provide accurate and complete information when engaging with our services. You are responsible for maintaining the confidentiality of any account credentials and for all activities that occur under your account.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4 text-gray-900 flex items-center">
                    <span className="text-blue-600 mr-4">04.</span> Intellectual Property
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    All content and materials provided by Silkvory Group, including but not limited to logos, designs, text, graphics, and images, are the intellectual property of Silkvory Group and protected by copyright laws.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4 text-gray-900 flex items-center">
                    <span className="text-blue-600 mr-4">05.</span> Limitation of Liability
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    Silkvory Group shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to the use or inability to use our website or services.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4 text-gray-900 flex items-center">
                    <span className="text-blue-600 mr-4">06.</span> Privacy
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    Our Privacy Policy governs the collection, use, and disclosure of your personal information. By using our website and services, you consent to the terms outlined in our Privacy Policy.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4 text-gray-900 flex items-center">
                    <span className="text-blue-600 mr-4">07.</span> Changes to Terms
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    Silkvory Group reserves the right to update or modify these terms and conditions at any time without prior notice. Changes will be effective immediately upon posting on this page.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4 text-gray-900 flex items-center">
                    <span className="text-blue-600 mr-4">08.</span> Governing Law
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    These terms and conditions are governed by and construed in accordance with the laws of Constitution of India, and any disputes relating to these terms shall be subject to the exclusive jurisdiction of the courts in Supreme Courts of India.
                  </p>
                </section>

                <div className="pt-8 border-t border-gray-100 mt-12">
                  <h2 className="text-2xl font-bold mb-4 text-gray-900">Contact Us</h2>
                  <p className="text-gray-600 mb-6">
                    If you have any questions about these terms and conditions, please contact us at:
                  </p>
                  <a
                    href="mailto:silkvorygroup@gmail.com"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors font-medium text-lg"
                  >
                    silkvorygroup@gmail.com
                    <div className="ml-2 w-12 h-[2px] bg-blue-600/30 group-hover:w-20 transition-all duration-500"></div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
