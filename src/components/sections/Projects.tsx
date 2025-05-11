import { useState } from 'react';
import { Github, ExternalLink, X, Code } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  category: 'web' | 'mobile' | 'other';
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const projects: Project[] = [
    {
      id: 1,
      title: 'MBA student portfolio',
      description: 'A professional portfolio website for an MBA student to showcase academic background, projects, certifications, and career goals. Features a clean layout with sections for resume, skills, and contact information.',
      image: 'https://raw.githubusercontent.com/Gulzaralice1/website-assert/ef3e7497cf1c9b3ab1440589a6aa6303e2d4760c/assert/gulzaralice/project1.png',
      technologies: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS'], 
      githubUrl: 'https://github.com/Gulzaralice1/mohdimtiyaz',
      liveUrl: 'https://mohdimtiyaz.netlify.app/',
      category: 'web',
    },
    {
      id: 2,
      title: 'Cool Moon Restaurants',
      description: 'The Restaurant Website for Food is a user-friendly, visually appealing platform designed to showcase restaurant services and offerings. Built using HTML, CSS, JavaScript, and Bootstrap, this project focuses on providing an excellent user experience and responsive design for all devices',
      image: 'https://raw.githubusercontent.com/Gulzaralice1/website-assert/380329b5a7d6f2885c9bd6829982cc74a42f20f1/assert/gulzaralice/project2.png',
      technologies: ['HTML', 'css', 'JavaScript', 'Bootstrap'],
      githubUrl: 'https://github.com/Gulzaralice1/cool-moon-Restaurants',
      liveUrl: 'https://gulzaralice1.github.io/cool-moon-Restaurants/',
      category: 'web',
    },
    // {
    //   id: 3,
    //   title: 'Weather Dashboard',
    //   description: 'A weather application that displays current and forecasted weather data using a third-party API. Includes location search and interactive UI elements.',
    //   image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    //   technologies: ['JavaScript', 'HTML', 'CSS', 'Weather API'],
    //   githubUrl: '#',
    //   liveUrl: '#',
    //   category: 'web',
    // },
    // {
    //   id: 4,
    //   title: 'Fitness Tracker',
    //   description: 'A mobile application for tracking workouts, setting fitness goals, and monitoring progress over time. Includes data visualization and sharing capabilities.',
    //   image: 'https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    //   technologies: ['React Native', 'Firebase', 'Chart.js'],
    //   githubUrl: '#',
    //   liveUrl: '#',
    //   category: 'mobile',
    // },
    // {
    //   id: 5,
    //   title: 'Recipe Finder',
    //   description: 'A web application that helps users discover recipes based on ingredients they have. Features include filtering by dietary restrictions and saving favorites.',
    //   image: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    //   technologies: ['Vue.js', 'Vuex', 'Node.js', 'MongoDB'],
    //   githubUrl: '#',
    //   liveUrl: '#',
    //   category: 'web',
    // },
    {
      id: 6,
      title: 'Data Visualization Dashboard',
      description: 'An interactive dashboard for visualizing complex datasets. Features include customizable charts, filters, and data export functionality.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      technologies: ['D3.js', 'React', 'Node.js', 'Express'],
      githubUrl: '#',
      liveUrl: '#',
      category: 'other',
    },
  ];

  const openModal = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-2 inline-flex items-center justify-center gap-2">
            <Code size={28} className="text-primary-600 dark:text-primary-400" />
            My Projects
          </h2>
          <div className="w-20 h-1 bg-primary-600 dark:bg-primary-400 mx-auto mb-6"></div>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each project showcases different skills
            and technologies I've used throughout my journey as a developer.
          </p>
        </div>

        <div className="flex justify-center mb-8" data-aos="fade-up">
          <div className="inline-flex p-1 bg-gray-200 dark:bg-gray-700 rounded-md">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                filter === 'all'
                  ? 'bg-white dark:bg-gray-600 text-primary-600 dark:text-primary-400 shadow-sm'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter('web')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                filter === 'web'
                  ? 'bg-white dark:bg-gray-600 text-primary-600 dark:text-primary-400 shadow-sm'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
              }`}
            >
              Web
            </button>
            <button
              onClick={() => setFilter('mobile')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                filter === 'mobile'
                  ? 'bg-white dark:bg-gray-600 text-primary-600 dark:text-primary-400 shadow-sm'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
              }`}
            >
              Mobile
            </button>
            <button
              onClick={() => setFilter('other')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                filter === 'other'
                  ? 'bg-white dark:bg-gray-600 text-primary-600 dark:text-primary-400 shadow-sm'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
              }`}
            >
              Other
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 transition-opacity duration-300 opacity-0 hover:opacity-100 flex items-center justify-center">
                  <button
                    onClick={() => openModal(project)}
                    className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors"
                  >
                    View Details
                  </button>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
                <div className="flex justify-between">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    aria-label="GitHub repository"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    aria-label="Live demo"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-900 rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">{selectedProject.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {selectedProject.description}
              </p>
              <div className="mb-4">
                <h4 className="text-lg font-semibold mb-2">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex space-x-4">
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-800 dark:bg-gray-700 text-white rounded-md hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors inline-flex items-center"
                >
                  <Github size={16} className="mr-2" />
                  GitHub Repo
                </a>
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors inline-flex items-center"
                >
                  <ExternalLink size={16} className="mr-2" />
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;