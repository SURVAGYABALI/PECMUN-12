

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900 text-gray-200">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">About PECMUN</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg mb-6">
              Established with a commitment to excellence and growth, PECMUN has forged a legacy of fostering global dialogue and leadership. With each passing year, it evolves into a more refined and impactful platform for diplomatic discourse and collaboration. As we embark on our 12th edition, PECMUN continues to surpass expectations, offering delegates and partners alike an unparalleled experience. Join us in celebrating this tradition of excellence, where every year builds upon the successes of the last, driving us towards greater heights of innovation and engagement in international affairs.
            </p>
            <p className="text-lg">
              This year's theme focuses on "Sustainable Development in a Post-Pandemic World," bringing together over 120+ delegates to debate, negotiate, and draft resolutions that address pressing global issues.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <img
              src="images/UNGA_3.jpg"
              alt="MUN Conference"
              className="rounded-lg shadow-md shadow-gray-800"
            />
            <img
              src="images/UNGA_4.jpg"
              alt="Delegates in Session"
              className="rounded-lg shadow-md shadow-gray-800"
            />
            <img
              src="images/UNGA_2 (1).jpg"
              alt="Committee Session"
              className="rounded-lg shadow-md shadow-gray-800"
            />
            <img
              src="images/UNSC_2.jpg"
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