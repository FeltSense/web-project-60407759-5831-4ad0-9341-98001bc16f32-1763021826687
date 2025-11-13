'use client';

import { Star } from 'lucide-react';

const team = [
  {
    name: 'Sarah Chen',
    role: 'Chief Technology Officer',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
    bio: '15+ years leading tech innovation at Fortune 500 companies. Expert in cloud architecture and AI implementation.',
  },
  {
    name: 'Michael Rodriguez',
    role: 'Lead Software Engineer',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
    bio: 'Full-stack developer specializing in scalable systems. Built platforms serving millions of users worldwide.',
  },
  {
    name: 'Emily Thompson',
    role: 'Head of Cybersecurity',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
    bio: 'Certified security expert with a track record of protecting enterprise systems from advanced threats.',
  },
  {
    name: 'David Kim',
    role: 'Mobile Development Lead',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80',
    bio: 'Award-winning mobile developer. Created apps with over 10M downloads across iOS and Android.',
  },
  {
    name: 'Jessica Martinez',
    role: 'Data Science Director',
    image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&q=80',
    bio: 'PhD in Machine Learning. Transforms complex data into business intelligence and predictive models.',
  },
  {
    name: 'Alex Johnson',
    role: 'Cloud Solutions Architect',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    bio: 'AWS and Azure certified expert. Designs resilient cloud infrastructure for global enterprises.',
  },
];

export default function Testimonials() {
  return (
    <section id="team" className="py-24 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Meet Our Expert Team
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            World-class professionals dedicated to delivering exceptional technology solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="group bg-slate-800 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-700"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-blue-400 font-semibold mb-4">
                  {member.role}
                </p>
                <p className="text-gray-300 leading-relaxed">
                  {member.bio}
                </p>
                <div className="flex gap-1 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}