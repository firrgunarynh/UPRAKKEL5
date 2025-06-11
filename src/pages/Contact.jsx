import React from 'react';
import Navbar from '../components/Navbar';

const Contact = () => {
  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/firrgunarynh/', '_blank');
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:your.email@example.com';
  };

  const socialStats = [
    { label: 'Followers', count: '0' },
    { label: 'Posts', count: '0' },
    { label: 'Following', count: '0' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-800 to-orange-600 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 py-12 px-4 transition-colors duration-300">
      <Navbar />
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white dark:text-gray-100 mb-4 tracking-tight">
            Let's Connect
          </h1>
          <p className="text-xl text-pink-200 dark:text-gray-300 max-w-2xl mx-auto">
            Follow our journey and stay updated with the latest news and behind-the-scenes content
          </p>
        </div>

        {/* Main Contact Card */}
        <div className="bg-white/10 dark:bg-white/5 backdrop-blur-lg rounded-3xl p-8 mb-8 border border-white/20 shadow-2xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Instagram Section */}
            <div className="text-center md:text-left">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6 shadow-lg">
                <span className="text-3xl">📷</span>
              </div>
              <h2 className="text-3xl font-bold text-white dark:text-gray-100 mb-4">Follow Us on Instagram</h2>
              <p className="text-pink-200 dark:text-gray-300 mb-6 text-lg">
                Get exclusive content, daily updates, and connect with our community
              </p>

              {/* Social Stats */}
              <div className="flex justify-center md:justify-start gap-6 mb-6">
                {socialStats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-white dark:text-gray-100">{stat.count}</div>
                    <div className="text-pink-200 dark:text-gray-300 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>

              <button
                onClick={handleInstagramClick}
                className="group bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-3 mx-auto md:mx-0"
              >
                <span className="text-xl group-hover:scale-110 transition-transform">📷</span>
                Follow @firrgunarynh
                <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white dark:text-gray-100 mb-6">Follow Our Circle</h3>

              <div className="space-y-4">
                {[
                  {
                    name: 'Firguna',
                    username: '@firrgunarynh',
                    icon: '📷',
                    url: 'https://www.instagram.com/firrgunarynh/',
                    bg: 'bg-purple-500/20'
                  },
                  {
                    name: 'Gavindra',
                    username: '@gavindraaa_',
                    icon: '📸',
                    url: 'https://www.instagram.com/gavindraaa_/',
                    bg: 'bg-pink-500/20'
                  },
                  {
                    name: 'Rayhan',
                    username: '@rayhanhafizhh',
                    icon: '📸',
                    url: 'https://www.instagram.com/rayhanhafizhh/',
                    bg: 'bg-orange-500/20'
                  }
                ].map((person, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 bg-white/5 dark:bg-white/10 rounded-xl border border-white/10 hover:bg-white/10 transition-colors cursor-pointer"
                    onClick={() => window.open(person.url, '_blank')}
                  >
                    <div className={`w-12 h-12 ${person.bg} rounded-full flex items-center justify-center`}>
                      <span className="text-2xl">{person.icon}</span>
                    </div>
                    <div>
                      <p className="text-white dark:text-gray-100 font-medium">{person.name}</p>
                      <p className="text-pink-200 dark:text-gray-300">{person.username}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12">
          <p className="text-pink-200 dark:text-gray-300">
            Made with <span className="text-red-400">❤️</span> in Indonesia
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
