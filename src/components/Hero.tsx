import React from 'react';
import Countdown from 'react-countdown';


const Hero = () => {
  const munDate = new Date('2025-04-12');

  const scrollToCommittees = () => {
    const committeesSection = document.getElementById('committees');
    if (committeesSection) {
      committeesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-screen">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="../../images/9041f2be-7524-437b-b5a5-7e7340299946.mp4"
          type="video/mp4"
        />
      </video>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
        {/* Centered and Enhanced Logo */}
        <div className="flex flex-col items-center mb-6">
          <img 
            src="../../images/Your paragraph text (3).png" 
            alt="PECMUN Logo" 
            className="h-32 w-32 mb-4"
          />
          <h1 className="text-5xl md:text-7xl font-bold text-center">
            PECMUN 12
          </h1>
        </div>
        
        {/* Countdown Timer - Now Centered */}
        <div className="bg-black/50 backdrop-blur-sm rounded-lg p-6 mb-8">
          <Countdown
            date={munDate}
            renderer={({ days, hours, minutes, seconds }) => (
              <div className="grid grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold">{days}</div>
                  <div className="text-sm uppercase tracking-wider">Days</div>
                </div>
                <div>
                  <div className="text-4xl font-bold">{hours}</div>
                  <div className="text-sm uppercase tracking-wider">Hours</div>
                </div>
                <div>
                  <div className="text-4xl font-bold">{minutes}</div>
                  <div className="text-sm uppercase tracking-wider">Minutes</div>
                </div>
                <div>
                  <div className="text-4xl font-bold">{seconds}</div>
                  <div className="text-sm uppercase tracking-wider">Seconds</div>
                </div>
              </div>
            )}
          />
        </div>

        <p className="text-2xl md:text-3xl text-center mb-8">
          Shape the Future, One Debate at a Time
        </p>
        <p className="text-lg md:text-xl text-center max-w-2xl mb-12">
          Join the most prestigious Model United Nations conference, bringing together future leaders from around the globe to address pressing international issues.
        </p>
        <div className="flex space-x-6">
          <a href="https://www.linktr.ee/pecmun.2025" target="_blank" rel="noopener noreferrer">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-colors" style={{ backgroundColor: '#b2a5ff' }} >
            Register Now
          </button>
          </a>
          <button 
            onClick={scrollToCommittees}
            className="border-2 border-white hover:bg-white hover:text-black text-white px-8 py-3 rounded-full font-semibold transition-colors"
          >
            Explore Committees
          </button>
        </div>
      </div>
    </div>
  );
};
export default Hero;