import React from 'react';
import { BookOpen } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  plotSummary: string;
}

const ProjectCard = ({ title, description, plotSummary }: ProjectCardProps) => {
  return (
    <div className="bg-white rounded-lg p-4 border border-gray-100 hover:border-blue-500 transition-all cursor-pointer shadow-sm hover:shadow-md">
      <div className="flex items-center gap-2 mb-3">
        <BookOpen className="text-blue-500" size={18} />
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      </div>
      <p className="text-gray-600 text-sm mb-3">{description}</p>
      <p className="text-gray-500 text-xs line-clamp-3">{plotSummary}</p>
    </div>
  );
};

export default ProjectCard;