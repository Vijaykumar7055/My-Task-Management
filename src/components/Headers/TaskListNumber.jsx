const TaskListNumber = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-10">
      {/* New Tasks */}
      <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl p-6 shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
        <h2 className="text-5xl font-bold text-white">12</h2>
        <p className="text-xl text-white mt-2 font-medium">New Tasks</p>
      </div>

      {/* Active Tasks */}
      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-6 shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
        <h2 className="text-5xl font-bold text-white">08</h2>
        <p className="text-xl text-white mt-2 font-medium">Active Tasks</p>
      </div>

      {/* Completed */}
      <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-6 shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
        <h2 className="text-5xl font-bold text-white">20</h2>
        <p className="text-xl text-white mt-2 font-medium">Completed</p>
      </div>

      {/* Failed */}
      <div className="bg-gradient-to-r from-red-500 to-pink-600 rounded-2xl p-6 shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
        <h2 className="text-5xl font-bold text-white">03</h2>
        <p className="text-xl text-white mt-2 font-medium">Failed</p>
      </div>
    </div>
  );
};

export default TaskListNumber;        