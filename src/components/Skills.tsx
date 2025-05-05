import { useState } from 'react';

interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'design' ;
}

const skillsData: Skill[] = [
  // Frontend Skills
  { name: 'HTML', level: 95, category: 'frontend' },
  { name: 'CSS', level: 90, category: 'frontend' },
  { name: 'JavaScript', level: 85, category: 'frontend' },
  { name: 'React', level: 80, category: 'frontend' },
  
  // Design Skills
  { name: 'Figma', level: 90, category: 'design' },
  { name: 'Adobe XD', level: 85, category: 'design' },
  { name: 'UI Design', level: 88, category: 'design' },
  { name: 'Wireframing', level: 92, category: 'design' },
  { name: 'Prototyping', level: 85, category: 'design' },

];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'frontend' | 'design' | 'other'>('all');
  
  const filteredSkills = activeCategory === 'all' 
    ? skillsData 
    : skillsData.filter(skill => skill.category === activeCategory);
  
  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              My Skills
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise and design capabilities.
            </p>
          </div>
          
          <div className="flex justify-center mb-10">
            <div className="inline-flex bg-gray-200 dark:bg-gray-700 p-1 rounded-full">
              {(['all', 'frontend', 'design'] as const).map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 text-sm font-medium rounded-full capitalize transition-colors duration-300 ${
                    activeCategory === category
                      ? 'bg-white dark:bg-gray-800 text-primary shadow-sm'
                      : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {filteredSkills.map((skill) => (
              <div 
                key={skill.name} 
                className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 transition-transform hover:transform hover:-translate-y-1"
              >
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                    {skill.name}
                  </h3>
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-300">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5">
                  <div 
                    className="bg-primary h-2.5 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;