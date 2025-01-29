import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import StatsCard from './components/StatsCard';
import ProjectCard from './components/ProjectCard';

function App() {
  const projects = [
    {
      title: 'Cubic',
      description: 'A romantic-drama novel that is uniquely fun in its own way',
      plotSummary: "The story usually follows 'Ruthainek,' a heroine with a strong personality and problem-solving skills, who gets involved in the world of Hong Kong's mafia, leading to a confrontation with 'Lin Lanse,' a cold but charming male lead."
    },
    {
      title: 'Cubic',
      description: 'A romantic-drama novel that is uniquely fun in its own way',
      plotSummary: "The story usually follows 'Ruthainek,' a heroine with a strong personality and problem-solving skills, who gets involved in the world of Hong Kong's mafia, leading to a confrontation with 'Lin Lanse,' a cold but charming male lead."
    },
    {
      title: 'Cubic',
      description: 'A romantic-drama novel that is uniquely fun in its own way',
      plotSummary: "The story usually follows 'Ruthainek,' a heroine with a strong personality and problem-solving skills, who gets involved in the world of Hong Kong's mafia, leading to a confrontation with 'Lin Lanse,' a cold but charming male lead."
    }
  ];

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 bg-white">
        <Header 
          username="April-ntt" 
          avatarUrl="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80" 
        />
        <main className="max-w-7xl mx-auto px-6 py-8">
          <StatsCard />
          <h2 className="text-xl font-semibold text-gray-800 mb-6">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard 
                key={index}
                title={project.title}
                description={project.description}
                plotSummary={project.plotSummary}
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;