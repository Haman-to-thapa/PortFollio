import doctor from '../assets/doctor.png';
import eco from '../assets/eco.png'
import Lms from '../assets/Lms.png'
import port from '../assets/portfolio.png'
import text from '@/assets/text.png'

const projects = [
  {
    title: "LMS full Website ",
    description: "I’ve built a full-stack LMS website, but there are some issues. I’m not sure what’s wrong — Render is glitching and not opening properly. I’ve only deployed the frontend so far and can’t share my open link right now. i can't provide my my repo link",
    image: Lms,
    link: "https://new-lms-project-can-1.onrender.com/",
  },

  {
    title: "E-commerce Website",
    description: "A full-stack MERN e-commerce platform with Stripe payments. Email: admin@example.com  , password : 123456",
    image: eco,
    link: "https://e-commerce-website-frontend-iecn.onrender.com/",
  },
  {
    title: "Doctor Booking Site",
    description: "A responsive doctor booking app with appointment management.",
    image: doctor,
    link: "https://doctor-appointment-frontend-48je.onrender.com/",
  },
  {
    title: "Doctor Booking Admin Panel",
    description: "Personal portfolio to showcase my projects and skills.",
    image: "https://doctor-appointment-admin-v061.onrender.com/",
    link: "https://yourportfolio.com",
  },
  {
    title: "Speech-to-text",
    description: "Developed a MERN stack Speech-to-Text web app with audio upload, real-time transcription, and management using the Deepgram API for accurate speech recognition..",
    image: text,
    link: "https://speech-to-text-apps-1.onrender.com/"
  },

  {
    title: "Portfolio Build responsive",
    description: "Personal portfolio to showcase my projects and skills.",
    image: port,
    link: "https://hamanportfolio.vercel.app/",
  },



];

const ProjectBox = ({ title, description, image, link }) => {
  return (
    <div className="bg-[#1E1E1E] rounded-2xl overflow-hidden shadow-md border border-gray-700 transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:border-blue-600 sm:mt-6 ">
      <a href={link} target="_blank" rel="noopener noreferrer" >
        <img className="w-full h-48 object-cover cursor-pointer hover:opacity-90 transition" src={image} alt={title} />
      </a>

      <div className="p-4">
        <h3 className="text-xl font-semibold text-[#F5F5F5] hover:text-blue-400 transition duration-300">
          {title}
        </h3>
        <p className="text-sm  text-[#A0A0A0] mt-2">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 text-[#eb5951] hover:text-blue-400 transition duration-300 hover:underline"
        >
          View Project →
        </a>
      </div>
    </div>
  );
};

const ProjectGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 min-h-screen bg-[#0d0d0d]">
      {projects.map((project, index) => (
        <ProjectBox
          key={index}
          title={project.title}
          description={project.description}
          image={project.image}
          link={project.link}
        />
      ))}
    </div>
  );
};

export default ProjectGrid;
