import React from 'react';

const StatsCard = () => {
  return (
    <div className="bg-white rounded-lg p-4 mb-6 shadow-md border border-gray-100">
      <h2 className="text-lg text-gray-800 mb-3">Updated Stats</h2>
      <div className="grid grid-cols-3 gap-4">
        <div className="text-center">
          <p className="text-2xl font-bold text-blue-500">12</p>
          <p className="text-gray-600 text-sm">Active Projects</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-blue-500">45k</p>
          <p className="text-gray-600 text-sm">Words Written</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-blue-500">3</p>
          <p className="text-gray-600 text-sm">Completed Stories</p>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;