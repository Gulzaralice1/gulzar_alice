import { Briefcase, GraduationCap } from 'lucide-react';

interface ExperienceItem {
  id: number;
  title: string;
  organization: string;
  period: string;
  description: string;
  type: 'education' | 'experience';
}

const Experience = () => {
  const items: ExperienceItem[] = [
    {
      id: 1,
      title: 'B.Tech in Computer Science',
      organization: 'Lovely Professional University',
      period: '2024 - 2028',
      description: 'Studied computer science with a focus on software engineering, web development, and database management. Participated in multiple hackathons and coding competitions.',
      type: 'education',
    },
    // {
    //   id: 2,
    //   title: 'Web Development Intern',
    //   organization: 'TechSolutions Inc.',
    //   period: 'May 2022 - Aug 2022',
    //   description: 'Developed and maintained responsive web applications using React. Collaborated with the design team to implement UI/UX improvements. Participated in agile development cycles.',
    //   type: 'experience',
    // },
    {
      id: 3,
      title: 'Advanced Web Development Certificate',
      organization: 'Udemy',
      period: 'Dec 2021',
      description: 'Completed a comprehensive course on modern web development practices, including React, Node.js, and database integration.',
      type: 'education',
    },
    {
      id: 4,
      title: 'Software Developer Intern',
      organization: 'InnovateTech',
      period: 'Jan 2023 - Apr 2023',
      description: 'Worked on building RESTful APIs using Node.js and Express. Implemented database solutions using MongoDB and PostgreSQL. Collaborated with senior developers on large-scale projects.',
      type: 'experience',
    },
    // {
    //   id: 5,
    //   title: 'Junior Software Engineer',
    //   organization: 'WebCreations Studio',
    //   period: 'Jun 2023 - Present',
    //   description: 'Developing full-stack applications using React, Node.js, and various databases. Implementing authentication systems, payment gateways, and other complex features. Mentoring junior developers and interns.',
    //   type: 'experience',
    // },
  ];

  // Sort items by chronological order (newest first)
  const sortedItems = [...items].sort((a, b) => {
    // Extract years from period (last 4 characters of the last part after the dash)
    const aYear = parseInt(a.period.split(' - ')[1] || a.period.split(' ')[0]);
    const bYear = parseInt(b.period.split(' - ')[1] || b.period.split(' ')[0]);
    return bYear - aYear;
  });

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-2 inline-flex items-center justify-center gap-2">
            <Briefcase size={28} className="text-primary-600 dark:text-primary-400" />
            Experience & Education
          </h2>
          <div className="w-20 h-1 bg-primary-600 dark:bg-primary-400 mx-auto mb-6"></div>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            My professional journey and educational background that have shaped my skills and expertise.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-primary-200 dark:bg-primary-900 transform md:translate-x-[-50%]"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {sortedItems.map((item, index) => (
              <div
                key={item.id}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {/* Dot */}
                <div className="absolute left-0 md:left-1/2 w-6 h-6 rounded-full bg-primary-600 dark:bg-primary-500 transform translate-x-[-2.5px] md:translate-x-[-50%] z-10">
                  <div className="absolute inset-0 rounded-full animate-ping bg-primary-400 opacity-75" style={{ animationDuration: '3s' }}></div>
                </div>

                {/* Content */}
                <div
                  className={`pl-8 md:pl-0 ${
                    index % 2 === 0
                      ? 'md:pr-16 md:pl-4 md:text-right'
                      : 'md:pl-16 md:pr-4'
                  } md:w-1/2`}
                >
                  <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <div
                      className={`inline-block p-2 rounded-full ${
                        item.type === 'education'
                          ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300'
                          : 'bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300'
                      } mb-3`}
                    >
                      {item.type === 'education' ? (
                        <GraduationCap size={20} />
                      ) : (
                        <Briefcase size={20} />
                      )}
                    </div>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="text-primary-600 dark:text-primary-400 font-medium">
                      {item.organization}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                      {item.period}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;