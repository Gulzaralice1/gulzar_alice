import { useEffect, useRef } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { ArrowDown } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  const { theme } = useTheme();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Particle animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
    }[] = [];

    const particleCount = Math.min(100, window.innerWidth / 10);
    const isDark = theme === 'dark';

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: Math.random() * 2 - 1,
        speedY: Math.random() * 2 - 1,
        color: isDark ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.2)',
      });
    }

    const connectParticles = () => {
      const maxDistance = 150;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            ctx.beginPath();
            ctx.strokeStyle = isDark
              ? `rgba(255, 255, 255, ${0.1 * (1 - distance / maxDistance)})`
              : `rgba(0, 0, 0, ${0.05 * (1 - distance / maxDistance)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const particle of particles) {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x > canvas.width) particle.x = 0;
        else if (particle.x < 0) particle.x = canvas.width;

        if (particle.y > canvas.height) particle.y = 0;
        else if (particle.y < 0) particle.y = canvas.height;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
      }

      connectParticles();
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [theme]);

  const playTypingSound = () => {
    const audio = new Audio('/typing-sound.mp3');
    audio.volume = 0.2;
    audio.play().catch(error => console.log('Audio play failed:', error));
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: 0 }}
      ></canvas>

      <div className="container mx-auto px-4 md:px-6 z-10 text-center">
        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
          data-aos="fade-up"
        >
          Hi, I'm{' '}
          <span className="text-primary-600 dark:text-primary-400">
            Gulzar Alice
          </span>
        </h1>
        <h2
          className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-700 dark:text-gray-300 mb-8"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <TypeAnimation
            sequence={[
              'Software Engineer',
              1000,
              'Web Developer',
              1000,
              'UI/UX Enthusiast',
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            cursor={true}
            preRenderFirstString={false}
            beforeType={playTypingSound}
          />
        </h2>
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <a
            href="#contact"
            className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-md transition-colors duration-300 shadow-md hover:shadow-lg"
          >
            Hire Me
          </a>
          <a
            href="#"
            className="px-6 py-3 bg-white dark:bg-gray-800 text-primary-600 dark:text-primary-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md border border-primary-600 dark:border-primary-400 transition-colors duration-300 shadow-md hover:shadow-lg"
          >
            View Resume
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <a
          href="#about"
          aria-label="Scroll down"
          className="flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <ArrowDown size={20} className="text-primary-600 dark:text-primary-400" />
        </a>
      </div>
    </section>
  );
};

export default Hero;