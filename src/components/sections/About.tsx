import { User, Award, BookOpen } from 'lucide-react';

const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gray-50 dark:bg-gray-800"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 mb-10 md:mb-0" data-aos="fade-right">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary-400 mx-auto">
                <img
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  alt="Profile"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              {/* <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-600 dark:bg-primary-500 rounded-full flex items-center justify-center text-white">
                <div className="text-center">
                  <p className="font-bold text-lg">4+</p>
                  <p className="text-sm">Years</p>
                  <p className="text-sm">Experience</p>
                </div>
              </div> */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-600 dark:bg-primary-500 rounded-full flex items-center justify-center text-white">
                <div className="text-center">
                  <p className="font-bold text-lg">10+</p>
                  <p className="text-sm">Projects</p>
                  <p className="text-sm">Completed</p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-1/2" data-aos="fade-up">
            <h2 className="text-3xl font-bold mb-2 inline-flex items-center gap-2">
              <User size={28} className="text-primary-600 dark:text-primary-400" />
              About Me
            </h2>
            <div className="w-20 h-1 bg-primary-600 dark:bg-primary-400 mb-6"></div>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              I'm a passionate Software Engineer with a background in full-stack development.
              Currently pursuing my degree at Lovely Professional University (LPU),
              I have a strong foundation in building efficient and scalable applications.
              My journey in tech has been driven by a love for solving complex problems and creating
              beautiful, functional interfaces.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="flex items-start gap-3">
                <Award className="text-primary-600 dark:text-primary-400 mt-1" size={20} />
                <div>
                  <h3 className="font-semibold">Degree</h3>
                  <p className="text-gray-600 dark:text-gray-400">B.Tech in Computer Science</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <BookOpen className="text-primary-600 dark:text-primary-400 mt-1" size={20} />
                <div>
                  <h3 className="font-semibold">University</h3>
                  <p className="text-gray-600 dark:text-gray-400">Lovely Professional University</p>
                </div>
              </div>
            </div>
            
            <a
              href="#contact"
              className="inline-flex items-center text-primary-600 dark:text-primary-400 font-medium hover:underline"
            >
              Let's work together
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;