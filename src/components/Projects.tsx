import { Github, ExternalLink } from 'lucide-react';

const webProjects = [
  {
    id: 'p1',
    name: 'Page Replacement Algorithm',
    description: 'An implementation of various page replacement algorithms like FIFO, LRU, and Optimal in operating systems.',
    topics: ['C++', 'Algorithms', 'Operating Systems'],
    html_url: 'https://github.com/kaviyavarma08/Page-Replacement-Algorithm',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'p2',
    name: 'Cafeteria Management System',
    description: 'A web-based application to manage cafeteria orders, inventory, and billing efficiently.',
    topics: ['Java', 'Spring Boot', 'MySQL'],
    html_url: 'https://github.com/kaviyavarma08/Cafeteria-Management-System',
    image: 'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'p3',
    name: 'Recipe Finder',
    description: 'A React-based application to search and explore recipes with detailed instructions and ingredients.',
    topics: ['React', 'API Integration', 'JavaScript'],
    html_url: 'https://github.com/kaviyavarma08/RecipeFinder-Start.git',
    image: 'https://images.pexels.com/photos/196646/pexels-photo-196646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];

const uiProjects = [
  {
    id: 'ui1',
    name: 'Train Ticket Booking UI',
    description: 'A Figma prototype for a train ticket booking application.',
    html_url: 'https://www.figma.com/proto/QESCwbUnZ8VBgoy91b9D7W/Train-ticket?node-id=3-7&t=xf1lTpSGdQfg5fCX-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=16%3A21',
    image: 'https://images.pexels.com/photos/6476589/pexels-photo-6476589.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'ui2',
    name: 'Spotify UI',
    description: 'A Figma prototype for a Spotify-inspired user interface.',
    html_url: 'https://www.figma.com/proto/PF6CKTeKnykQKVkgVMJ2rd/Spotify?node-id=57-18&t=CpDZNXFQYQz3UFgS-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=43%3A12&show-proto-sidebar=1',
    image: 'https://images.pexels.com/photos/5077065/pexels-photo-5077065.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="relative py-16 md:py-24 bg-gray-100 dark:bg-gray-800 overflow-hidden">
      <div className="container mx-auto px-6 relative">
        <div className="max-w-5xl mx-auto">
          {/* Web Projects Section */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
              Web Projects
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Exploring my latest web development projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {webProjects.map((project) => (
              <div
                key={project.id}
                className="group relative bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden card-hover"
              >
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 z-10"></div>
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 relative">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <a
                      href={project.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary hover:text-primary-dark transition-colors"
                    >
                      <Github size={18} className="mr-2" />
                      View in GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* UI/UX Projects Section */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
              UI/UX Projects
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Exploring my latest UI/UX design projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {uiProjects.map((project) => (
              <div
                key={project.id}
                className="group relative bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden card-hover"
              >
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 z-10"></div>
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 relative">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <a
                      href={project.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary hover:text-primary-dark transition-colors"
                    >
                      <ExternalLink size={18} className="mr-2" />
                      View Prototype
                    </a>
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

export default Projects;