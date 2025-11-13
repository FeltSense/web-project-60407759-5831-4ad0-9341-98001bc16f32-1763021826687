'use client';

import { Check } from 'lucide-react';

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Get started with our comprehensive tech solution package designed for growing businesses.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-blue-600">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-6">
              <h3 className="text-3xl font-bold text-white mb-2">Professional Plan</h3>
              <p className="text-blue-100">Everything you need to transform your business</p>
            </div>
            
            <div className="p-12">
              <div className="text-center mb-12">
                <div className="flex items-baseline justify-center gap-2 mb-4">
                  <span className="text-6xl font-bold text-slate-900">$29</span>
                  <span className="text-2xl text-slate-600">/month</span>
                </div>
                <p className="text-slate-600">Billed monthly, cancel anytime</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {[
                  'Custom software development consultation',
                  'Cloud infrastructure setup & management',
                  'Cybersecurity audit & implementation',
                  'Mobile app development support',
                  'Data analytics & AI integration',
                  'Digital transformation roadmap',
                  '24/7 priority support',
                  'Monthly strategy sessions',
                  'Dedicated account manager',
                  'Access to all premium tools',
                  'Regular security updates',
                  'Performance optimization',
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Check size={16} className="text-blue-600" />
                    </div>
                    <span className="text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <a
                  href="https://buy.stripe.com/test_cNicN778gcvQ2NZ3gV6Ri00"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 text-white px-12 py-4 rounded-xl text-lg font-semibold hover:bg-blue-700 transition-all duration-300 hover:shadow-2xl hover:scale-105"
                >
                  Get Started Now
                </a>
                <p className="text-sm text-slate-500 mt-6">
                  🔒 Secure payment powered by Stripe • No long-term contracts
                </p>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-slate-600">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">99.9%</div>
              <div className="text-slate-600">Uptime SLA</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-slate-600">Support Available</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-slate-600">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}