import { Users, Target, Award, Heart } from 'lucide-react';

export function AboutPage() {
  return (
    <div className="min-h-[80vh] px-4 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            About Us
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're on a mission to build products that make a difference in people's lives.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { icon: Users, title: 'People First', description: 'Every decision we make starts with our users in mind.' },
            { icon: Target, title: 'Purpose Driven', description: 'We build with intention and focus on meaningful impact.' },
            { icon: Award, title: 'Excellence', description: 'We strive for the highest quality in everything we do.' },
            { icon: Heart, title: 'Passion', description: 'We love what we do and it shows in our work.' },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-gray-200 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Team Section */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { name: 'Alex Johnson', role: 'CEO & Founder', image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400' },
              { name: 'Sarah Chen', role: 'Head of Product', image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400' },
              { name: 'Michael Park', role: 'Lead Developer', image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400' },
            ].map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="font-semibold text-gray-900">{member.name}</h3>
                <p className="text-sm text-gray-500">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
