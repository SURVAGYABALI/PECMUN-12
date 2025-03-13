

const committees = [
  {
    name: 'UNSC (United Nations Security Council)',
    description: 'The UNSC focuses on maintaining international peace and security. In this committee, delegates work towards mitigating the impact of armed conflicts on civilians worldwide.',
    agenda: 'Role of UNSC in context of Russia Ukraine war',
  },
  {
    name: 'UNGA (United Nations General Assembly)',
    description: "The United Nations General Assembly's First Committee (DISEC) deals with disarmament, global challenges, and threats to peace fostering stability through international collaboration.",
    agenda: 'The Future of Autonomous Weapons Systems: Evaluating Ethical Implications and Global Regulation',
  },
  {
    name: 'ECOSOC (Economic and Social Council)',
    description: 'The United Nations Human Rights Council is responsible for promoting and protecting human rights around the world.',
    agenda: 'Exploring the Future of Work: Navigating the Impact of Automation, Artificial Intelligence, and Job Displacement',
  },
  {
    name: 'UNCSW (United Nations Commission on the Status of Women)',
    description: 'The UNCSW is dedicated to promoting gender equality and empowering women worldwide.',
    agenda: "The status of Women in Afghanistan Under Taliban Rule: Addressing Gender Equality Challenges and Violations of Women's Rights",
  },
  {
    name: 'AIPPM (ALL INDIA POLITICAL PARTIES MEET)',
    description: 'The All India Political Parties Meet is a forum for Indian political parties to discuss and address national issues.',
    agenda: 'Electoral Reforms and the Path to One Nation, One Election',
  },
  {
    name: 'IP (International Press)',
    description: 'The International Press serves as the media arm of PECMUN, responsible for reporting on committee discussions and conference proceedings. It plays a crucial role in ensuring transparency',
    agenda: 'Continuous coverage of all committees',
  },
];

const Committees = () => {
  return (
    <section id="committees" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Committees</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {committees.map((committee) => (
            <div key={committee.name} className="bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-700">
              <h3 className="text-xl font-bold mb-4 text-white">{committee.name}</h3>
              
              <div className="mb-4">
                <p className="text-gray-300 mb-4">{committee.description}</p>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-gray-200">Agenda:</h4>
                  <p className="text-gray-300">{committee.agenda}</p>
                </div>
              </div>
              
              <div className="flex flex-col space-y-3">
                {/* <button className="flex items-center justify-center space-x-2 text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors">
                  <FileDown className="w-5 h-5" />
                  <span>Download Study Guide</span>
                </button> */}
                <a href="https://docs.google.com/spreadsheets/u/0/d/1WHh_EK2lwzA95KYf2BSU-d9GdxfxYwBbmz1DDsLeMTQ" target="_blank" rel="noopener noreferrer">
                <button className="bg-purple-700 hover:bg-purple-800 text-white px-4 py-2 rounded-lg transition-colors">
                  Matrix
                </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Committees;