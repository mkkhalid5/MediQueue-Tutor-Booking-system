const Loading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-cyan-100">
      <div className="flex flex-col items-center">
        <div className="relative w-24 h-24">
          <div className="absolute inset-0 rounded-full border-4 border-cyan-200"></div>
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-cyan-500 border-r-blue-500 animate-spin"></div>
          <div className="absolute inset-3 rounded-full bg-white shadow-inner"></div>
        </div>
        <h2 className="mt-6 text-2xl font-bold text-gray-800">
          Loading...
        </h2>
        <p className="text-gray-500 mt-2 text-sm">
          Please wait while we prepare your content
        </p>
      </div>
    </div>
  );
};

export default Loading;