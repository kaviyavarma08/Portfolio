import { ArrowRight, Code, Palette, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import image from "/varmapic.jpg";


const Hero = () => {
  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 hero-gradient"></div>
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full animate-morph blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-secondary/20 rounded-full animate-bounce-slow blur-xl"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-success/20 rounded-full animate-rotate-slow blur-lg"></div>
      </div>
      
      <div className="container mx-auto px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            className="mb-8 relative"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-full blur-2xl transform rotate-12 animate-pulse-slow"></div>
            <img 
              src={image}
              alt="Kaviya Varma R"
              className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-white dark:border-gray-800 relative z-10 mx-auto shadow-xl transform hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-xl animate-morph"></div>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span className="block text-gradient animate-float">UI/UX Designer &</span>
            <span className="block text-gray-900 dark:text-white text-shadow">Frontend Developer</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Transforming ideas into 
            <span className="text-gradient font-semibold"> exceptional digital experiences </span>
            with creative design and clean code
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <a 
              href="#projects" 
              className="group gradient-bg px-8 py-4 text-white font-medium rounded-full hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 transform hover:-translate-y-1"
            >
              <span className="flex items-center">
                View My Work
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </a>
            <a 
              href="#contact" 
              className="group gradient-bg px-8 py-4 text-white font-medium rounded-full hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 transform hover:-translate-y-1"
            >
              <span className="flex items-center">
                Get In Touch
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </a>
          </motion.div>
          
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <motion.div 
              className="glass-effect px-6 py-4 rounded-xl shadow-lg group hover:bg-white/20 transition-all duration-300"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <div className="flex items-center justify-center mb-3">
                <Palette className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
              <span className="block text-2xl font-bold text-gradient">UI/UX</span>
              <span className="text-sm text-gray-600 dark:text-gray-400">Creative Design</span>
            </motion.div>
            
            <motion.div 
              className="glass-effect px-6 py-4 rounded-xl shadow-lg group hover:bg-white/20 transition-all duration-300"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <div className="flex items-center justify-center mb-3">
                <Code className="w-8 h-8 text-secondary group-hover:scale-110 transition-transform duration-300" />
              </div>
              <span className="block text-2xl font-bold text-gradient">Frontend</span>
              <span className="text-sm text-gray-600 dark:text-gray-400">Clean Code</span>
            </motion.div>
            
            <motion.div 
              className="glass-effect px-6 py-4 rounded-xl shadow-lg group hover:bg-white/20 transition-all duration-300"
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            >
              <div className="flex items-center justify-center mb-3">
                <Zap className="w-8 h-8 text-success group-hover:scale-110 transition-transform duration-300" />
              </div>
              <span className="block text-2xl font-bold text-gradient">Fast</span>
              <span className="text-sm text-gray-600 dark:text-gray-400">Performance</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;