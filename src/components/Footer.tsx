import { Github, Mail, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-8">Kaviya Varma R</h2>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a 
              href="https://github.com/kaviyavarma08" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors duration-300"
              aria-label="GitHub Profile"
            >
              <Github size={20} />
            </a>
            <a 
              href="mailto:kaviyavarma@example.com" 
              className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors duration-300"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors duration-300"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={20} />
            </a>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400">
              &copy; {currentYear} Designed by Kaviya Varma R. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Built with React, Tailwind CSS and 💙
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;