import React from 'react';
import { Bell } from 'lucide-react';

interface HeaderProps {
  username: string;
  avatarUrl: string;
}

const Header = ({ username, avatarUrl }: HeaderProps) => {
  return (
    <div className="flex justify-between items-center px-6 py-4 bg-white border-b border-gray-200">
      <div className="flex items-center gap-4">
        <h2 className="text-lg font-medium text-gray-800">Welcome back, <span className="text-blue-600">{username}</span></h2>
      </div>
      
      <div className="flex items-center gap-4">
        <button className="text-gray-500 hover:text-gray-700 transition-colors">
          <Bell size={20} />
        </button>
        <div className="flex items-center gap-3">
          <div className="text-right">
            <p className="text-sm font-medium text-gray-900">{username}</p>
            <p className="text-xs text-gray-500">Writer</p>
          </div>
          <img 
            src={avatarUrl} 
            alt="Profile" 
            className="w-10 h-10 rounded-full border-2 border-blue-100 hover:border-blue-500 transition-colors"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;