import { Wrench, BarChart } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { useEffect, useState, useRef } from 'react';

interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'tools';
}

const skillColors: { [key: string]: string } = {
  HTML: 'from-gray-600/90 to-gray-800/90',
  CSS: 'from-gray-600/90 to-gray-800/90',
  JavaScript: 'from-gray-600/90 to-gray-800/90',
  React: 'from-gray-600/90 to-gray-800/90',
  Python: 'from-gray-600/90 to-gray-800/90',
  'Node.js': 'from-gray-600/90 to-gray-800/90',
  MySQL: 'from-gray-600/90 to-gray-800/90',
  PostgreSQL: 'from-gray-600/90 to-gray-800/90',
  Bootstrap: 'from-gray-600/90 to-gray-800/90',
  GitHub: 'from-gray-600/90 to-gray-800/90',
  Figma: 'from-gray-600/90 to-gray-800/90',
  C: 'from-gray-600/90 to-gray-800/90',
  DSA: 'from-gray-600/90 to-gray-800/90',
  Git: 'from-gray-600/90 to-gray-800/90',
  'FontAwesome': 'from-gray-600/90 to-gray-800/90',  // Fixed syntax
  'PowerPointPresentations': 'from-gray-600/90 to-gray-800/90'  // Fixed syntax
};

const Skills = () => {
  const { theme } = useTheme();
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const skills: Skill[] = [
    { name: 'HTML', level: 95, category: 'frontend' },
    { name: 'CSS', level: 85, category: 'frontend' },
    { name: 'JavaScript', level: 85, category: 'frontend' },
    { name: 'React', level: 40, category: 'frontend' },
    { name: 'Python', level: 90, category: 'backend' },
    { name: 'C', level: 85, category: 'backend' },
    { name: 'DSA', level: 85, category: 'backend' },
    { name: 'Node.js', level: 10, category: 'backend' },
    // { name: 'MySQL', level: 55, category: 'backend' },
    { name: 'PostgreSQL', level: 80, category: 'backend' },
    { name: 'Bootstrap', level: 85, category: 'frontend' },
    { name: 'GitHub', level: 80, category: 'tools' },
    { name: 'Git', level: 50, category: 'tools' },
    { name: 'Figma', level: 75, category: 'tools' },
    { name: 'FontAwesome', level: 70, category: 'tools' },
    { name: 'PowerPointPresentations', level: 90, category: 'tools' },
    
  ];

  const frontendSkills = skills.filter((skill) => skill.category === 'frontend');
  const backendSkills = skills.filter((skill) => skill.category === 'backend');
  const toolsSkills = skills.filter((skill) => skill.category === 'tools');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { 
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const SkillBar = ({ skill }: { skill: Skill }) => {
    return (
      <div className="mb-6">
        <div className="flex justify-between mb-1">
          <span className="font-medium text-gray-200">{skill.name}</span>
          <span className={`transition-opacity duration-500 text-gray-200 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
            {skill.level}%
          </span>
        </div>
        <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
          <div
            className={`h-full rounded-full bg-gradient-to-r ${skillColors[skill.name]} transform origin-left
              transition-all duration-1000 ease-out relative`}
            style={{
              transform: isInView ? 'scaleX(1)' : 'scaleX(0)',
              width: `${skill.level}%`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10 animate-shimmer" />
          </div>
        </div>
      </div>
    );
  };

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 bg-[rgb(17,24,39)]"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-2 inline-flex items-center justify-center gap-2 text-gray-200">
            <Wrench size={28} className="text-primary-400" />
            My Skills
          </h2>
          <div className="w-20 h-1 bg-primary-400 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            I've worked with a variety of technologies and tools throughout my journey as a developer.
            Here's an overview of my technical expertise and proficiency levels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-[rgb(17,24,39)] p-6 rounded-lg shadow-lg border border-gray-800" data-aos="fade-up">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <span className="text-primary-600 dark:text-primary-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
              </span>
              Frontend Development
            </h3>
            {frontendSkills.map((skill) => (
              <SkillBar key={skill.name} skill={skill} />
            ))}
          </div>

          <div
            className="bg-[rgb(17,24,39)] p-6 rounded-lg shadow-lg border border-gray-800"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <span className="text-primary-600 dark:text-primary-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                  <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                  <line x1="6" y1="6" x2="6.01" y2="6"></line>
                  <line x1="6" y1="18" x2="6.01" y2="18"></line>
                </svg>
              </span>
              Backend Development
            </h3>
            {backendSkills.map((skill) => (
              <SkillBar key={skill.name} skill={skill} />
            ))}
          </div>

          <div
            className="bg-[rgb(17,24,39)] p-6 rounded-lg shadow-lg border border-gray-800"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <span className="text-primary-600 dark:text-primary-400">
                <BarChart size={24} />
              </span>
              Tools & Technologies
            </h3>
            {toolsSkills.map((skill) => (
              <SkillBar key={skill.name} skill={skill} />
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        {/* ...existing skills grid... */}
        
        <div className="mt-12 p-6 bg-[rgb(17,24,39)] rounded-lg border border-gray-800" data-aos="fade-up">
          <h3 className="text-xl font-semibold text-gray-200 mb-4">Additional Competencies</h3>
          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {[
              'Problem Solving',
              'Data Structures',
              'Algorithm Design',
              'Object-Oriented Programming',
              'System Design',
              'Code Review',
              'Testing & Debugging',
              'Version Control'
            ].map((item, index) => (
              <li key={index} className="flex items-center">
                <svg 
                  className="w-4 h-4 mr-2 text-primary-400" 
                  fill="currentColor" 
                  viewBox="0 0 20 20" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    fillRule="evenodd" 
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" 
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-300 text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;