const BackgroundBeams = () => {
  const beams = [];
  for (let i = 0; i < 10; i++) {
    beams.push(
      <div
        key={i}
        className="absolute bg-[#fff] w-1 h-screen bottom-full animate-ping opacity-50 z-50"
      />
    );
  }
  return beams;
};

export default BackgroundBeams;
