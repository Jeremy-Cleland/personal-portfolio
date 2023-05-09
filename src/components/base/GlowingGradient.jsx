const GlowingGradient = () => {
  return (
    <div className="px-8 py-32">
      <div className="grid items-start justify-center gap-8">
        <div className="group relative">
          <div className="from-pink-600 to-purple-600 absolute -inset-0.5 animate-tilt rounded-lg bg-gradient-to-r opacity-75 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
          <button className="bg-black divide-gray-600 relative flex items-center divide-x rounded-lg px-7 py-4 leading-none">
            <span className="flex items-center space-x-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="text-pink-600 h-6 w-6 -rotate-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
              <span className="text-gray-100 pr-6">Labs Release 2021.09</span>
            </span>
            <span className="text-indigo-400 group-hover:text-gray-100 pl-6 transition duration-200">
              See what's new &rarr;
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default GlowingGradient;
