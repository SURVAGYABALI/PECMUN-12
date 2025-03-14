
const RegistrationButton = ({ title, link }: { title: string; link: string }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full bg-purple-700 hover:bg-purple-800 text-white px-6 py-4 rounded-lg font-semibold transition-colors text-center block flex justify-center items-center"
    >
      {title}
    </a>
  );
};

const Registration = () => {
  const registrationOptions = [
    { title: 'Individual Delegate Registration', link: 'https://docs.google.com/forms/d/e/1FAIpQLSdQ79a3fx2TOpmsC0LPSaYgdN9KpBcvS0d_kY1sMiTz1s9H3g/viewform' },
    { title: 'International Press Registration', link: 'https://docs.google.com/forms/d/e/1FAIpQLSdUO_dpQnxyTfz1Bjcpr5oESVF7-rXEO4czF5zKYeeLe6j37A/viewform' },
    { title: 'Rappetuer Applications', link: 'https://forms.gle/DZdbo3gr9fDmarDz6' },
    { title: 'Institutional Registration', link: 'https://forms.gle/ALmXTv14FFrSjkAMA' },
  ];
  
  return (
    <section id="registration" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Registration</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {registrationOptions.map(({ title, link }) => (
            <RegistrationButton key={title} title={title} link={link} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Registration;
