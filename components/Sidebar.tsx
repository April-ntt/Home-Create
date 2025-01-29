import React from 'react';
import { BookOpen, BookText, ScrollText, BookIcon, LogOut, PenTool, Settings, Users, FileText } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="w-72 bg-gray-900 text-white h-screen p-6 flex flex-col">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Write</h1>
        <h2 className="text-xl">Whisper</h2>
      </div>

      <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg p-3 mb-8 flex items-center justify-center gap-2">
        <ScrollText size={18} />
        New Project
      </button>

      <nav className="flex-1">
        <div className="space-y-2">
          <div className="mb-6">
            <p className="text-sm text-gray-400 uppercase mb-3 px-2">Novels</p>
            <button className="w-full text-left p-3 hover:bg-gray-800 rounded flex items-center gap-3 text-sm">
              <BookOpen size={18} />
              Novel 1
            </button>
            <button className="w-full text-left p-3 hover:bg-gray-800 rounded flex items-center gap-3 text-sm">
              <BookOpen size={18} />
              Novel 2
            </button>
          </div>

          <div className="mb-6">
            <p className="text-sm text-gray-400 uppercase mb-3 px-2">Writing</p>
            <button className="w-full text-left p-3 hover:bg-gray-800 rounded flex items-center gap-3 text-sm">
              <PenTool size={18} />
              Create
            </button>
            <button className="w-full text-left p-3 hover:bg-gray-800 rounded flex items-center gap-3 text-sm">
              <FileText size={18} />
              Writing
            </button>
            <button className="w-full text-left p-3 hover:bg-gray-800 rounded flex items-center gap-3 text-sm">
              <BookText size={18} />
              Draft
            </button>
          </div>

          <div className="mb-6">
            <p className="text-sm text-gray-400 uppercase mb-3 px-2">Management</p>
            <button className="w-full text-left p-3 hover:bg-gray-800 rounded flex items-center gap-3 text-sm">
              <Users size={18} />
              Team
            </button>
            <button className="w-full text-left p-3 hover:bg-gray-800 rounded flex items-center gap-3 text-sm">
              <Settings size={18} />
              Settings
            </button>
          </div>
        </div>
      </nav>

      <button className="w-full text-left p-3 hover:bg-gray-800 rounded flex items-center gap-3 text-sm mt-auto">
        <LogOut size={18} />
        Log Out
      </button>
    </div>
  );
};

export default Sidebar;