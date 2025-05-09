import { Wrench, BarChart } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { useEffect, useState } from 'react';

interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'tools';
}

const Skills = () => {
  const { theme } = useTheme();
  const [isInView, setIsInView] = useState(false);

  const skills: Skill[] = [
    { name: 'HTML', level: 90, category: 'frontend' },
    { name: 'CSS', level: 85, category: 'frontend' },
    { name: 'JavaScript', level: 85, category: 'frontend' },
    { name: 'React', level: 80, category: 'frontend' },
    { name: 'Python', level: 75, category: 'backend' },
    { name: 'C', level: 70, category: 'backend' },
    { name: 'Node.js', level: 70, category: 'backend' },
    { name: 'MySQL', level: 75, category: 'backend' },
    { name: 'PostgreSQL', level: 70, category: 'backend' },
    { name: 'Bootstrap', level: 85, category: 'frontend' },
    { name: 'GitHub', level: 80, category: 'tools' },
    { name: 'Figma', level: 75, category: 'tools' },
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
      { threshold: 0.2 }
    );

    const section = document.getElementById('skills');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const SkillBar = ({ skill }: { skill: Skill }) => {
    return (
      <div className="mb-6">
        <div className="flex justify-between mb-1">
          <span className="font-medium">{skill.name}</span>
          <span>{skill.level}%</span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
          <div
            className="bg-primary-600 dark:bg-primary-500 h-2.5 rounded-full transition-all duration-1000 ease-out"
            style={{
              width: isInView ? `${skill.level}%` : '0%',
            }}
          ></div>
        </div>
      </div>
    );
  };

  return (
    <section
      id="skills"
      className="py-20 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-2 inline-flex items-center justify-center gap-2">
            <Wrench size={28} className="text-primary-600 dark:text-primary-400" />
            My Skills
          </h2>
          <div className="w-20 h-1 bg-primary-600 dark:bg-primary-400 mx-auto mb-6"></div>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            I've worked with a variety of technologies and tools throughout my journey as a developer.
            Here's an overview of my technical expertise and proficiency levels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md" data-aos="fade-up">
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
            className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md"
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
            className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md"
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
    </section>
  );
};

export default Skills;