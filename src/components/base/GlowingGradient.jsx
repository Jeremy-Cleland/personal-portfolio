const GlowingGradient = () => {
  return (
    <div className="px-8 py-32">
      <div className="grid items-start justify-center gap-8">
        <div className="group relative">
          <div className="absolute -inset-0.5 animate-tilt rounded-lg bg-gradient-to-r from-pink-600 to-purple-600 opacity-75 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
          <div className="relative flex items-center rounded-lg bg-black px-7 py-4 leading-none"></div>
        </div>
      </div>
    </div>
  );
};
export default GlowingGradient;
