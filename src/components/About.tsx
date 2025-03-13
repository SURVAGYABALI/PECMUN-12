

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900 text-gray-200">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">About PECMUN</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg mb-6">
              Established with a commitment to excellence and growth, PECMUN has forged a legacy of fostering global dialogue and leadership. With each passing year, it evolves into a more refined and impactful platform for diplomatic discourse and collaboration. As we embark on our 11th edition, PECMUN continues to surpass expectations, offering delegates and partners alike an unparalleled experience. Join us in celebrating this tradition of excellence, where every year builds upon the successes of the last, driving us towards greater heights of innovation and engagement in international affairs.
            </p>
            <p className="text-lg">
              This year's theme focuses on "Sustainable Development in a Post-Pandemic World," bringing together over 500 delegates from 50+ countries to debate, negotiate, and draft resolutions that address pressing global issues.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?ixlib=rb-4.0.3"
              alt="MUN Conference"
              className="rounded-lg shadow-md shadow-gray-800"
            />
            <img
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3"
              alt="Delegates in Session"
              className="rounded-lg shadow-md shadow-gray-800"
            />
            <img
              src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-4.0.3"
              alt="Committee Session"
              className="rounded-lg shadow-md shadow-gray-800"
            />
            <img
              src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3"
              alt="Networking Event"
              className="rounded-lg shadow-md shadow-gray-800"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;