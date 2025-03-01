import { FaPython, FaCode, FaDatabase, FaHtml5, FaCss3, FaJs, FaGitAlt } from "react-icons/fa";
import { SiArduino } from "react-icons/si";


const skills = [
  { name: "Python", icon: <FaPython className="text-blue-500" /> },
  { name: "C/C++", icon: <FaCode className="text-gray-600" /> },
  { name: "SQL", icon: <FaDatabase className="text-yellow-500" /> },
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3 className="text-blue-400" /> },
  { name: "JavaScript (Basic)", icon: <FaJs className="text-yellow-400" /> },
  { name: "MATLAB", icon: <FaCode className="text-red-500" /> },
  { name: "Arduino", icon: <SiArduino className="text-green-500" /> },
  { name: "Git/GitHub", icon: <FaGitAlt className="text-red-600" /> },
];

const TechnicalSkills = () => {
  return (
    <section className="mt-6 bg-gray-900 text-white p-6 rounded-2xl shadow-lg">
      <h2 className="text-3xl font-bold mb-4 text-center">Technical Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex items-center gap-3 p-3 bg-gray-800 rounded-lg shadow-md transform transition-transform hover:scale-105"
          >
            <span className="text-2xl">{skill.icon}</span>
            <span className="text-lg font-medium">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnicalSkills;
