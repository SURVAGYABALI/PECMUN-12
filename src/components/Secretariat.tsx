
const secretariatMembers = [
  {
    name: 'Siddharth Kulshreshtha',
    position: 'Secretary General',
    image: 'images/Siddharth_Kulshreshtha_Finance (1).jpg',
   
  },
  {
    name: 'Sachin Singh',
    position: 'Deputy Secretary General',
    image: 'images/4th Year photo ID.png',
 
  },
  {
    name: 'Asmit Saha',
    position: 'Director General',
    image: 'images/AsmitSaha_PR (1).JPG',
 
  },
  {
    name: 'Harshit Thakur',
    position: 'Chief of Staff',
    image: 'images/Harshit Thakur_Registration (1).jpg',
   
  }
];


const Secretariat = () => {
  return (
    <section id="secretariat" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-white">Meet Our Secretariat</h2>
        <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
          Our dedicated team of experienced MUN participants and organizers working tirelessly to make PECMUN 12 an unforgettable experience.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {secretariatMembers.map((member) => (
            <div key={member.name} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 border border-gray-700">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">{member.name}</h3>
                <p className="text-purple-400 font-semibold mb-3">{member.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Secretariat;