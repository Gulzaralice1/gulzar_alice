import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="text-lg font-semibold text-primary-600 dark:text-primary-400">
              Portfolio
            </p>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              © {currentYear} Gulzar Alice. All rights reserved.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center">
            <div className="flex space-x-4 mb-4 md:mb-0 md:mr-8">
              <a
                href="https://github.com/Gulzaralice1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/mdgulzar-tech" // Changed from www.linkedin.com to https://www.linkedin.com
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:mdgulzar.tech@gmail.com"
                className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="px-4 py-2 text-sm bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-md transition-colors"
            >
              Back to Top
            </button>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
          <ul className="flex flex-wrap justify-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
            <li>
              <a href="#home" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                Projects
              </a>
            </li>
            <li>
              <a href="#experience" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                Experience
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;