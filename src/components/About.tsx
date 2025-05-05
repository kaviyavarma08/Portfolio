import { Code, PenTool, Lightbulb } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-8"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                Hello! I'm Kaviya Varma R, a passionate UI/UX Designer and Frontend Developer with a keen eye for creating seamless digital experiences.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                I specialize in designing intuitive user interfaces and transforming them into responsive, dynamic web applications using modern frontend technologies.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                My approach combines aesthetic design principles with technical expertise to build products that are not just visually appealing but also highly functional and user-friendly.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md text-center transition-transform hover:transform hover:-translate-y-1">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900 text-primary rounded-full mb-3">
                    <PenTool size={20} />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">UI/UX Design</h3>
                </div>
                
                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md text-center transition-transform hover:transform hover:-translate-y-1">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 rounded-full mb-3">
                    <Code size={20} />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Development</h3>
                </div>
                
                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md text-center transition-transform hover:transform hover:-translate-y-1">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-400 rounded-full mb-3">
                    <Lightbulb size={20} />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Problem Solving</h3>
                </div>
              </div>
            </div>
            
            <div className="order-1 md:order-2 relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg blur-xl opacity-70"></div>
              <div className="relative z-10 overflow-hidden rounded-lg shadow-xl">
                <img 
                  src="https://www.shutterstock.com/image-photo/all-about-you-phrase-often-260nw-2192243263.jpg" 
                  alt="About Kaviya Varma R" 
                  className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;