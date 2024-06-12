const Skills = () => {
  const icons = [
    { src: "html5.png" },
    { src: "canva.png" },
    { src: "css.png" },
    { src: "figma.png" },
    { src: "git.png" },
    { src: "github.png" },
    { src: "intellij-idea.png" },
    { src: "java.png" },
    { src: "javascript.png" },
    { src: "react.png" },
    { src: "vscode.png" },
  ];
  return (
    <div className="h-9/10 w-full flex justify-center item-center">
      <div className="grid grid-cols-3 gap-x-14 gap-y-6  justify-center items-center">
        {icons.map((icons, index) => (
          <div
            key={index}
            className="w-16 h-16 flex flex-row rounded-md bg-[#6a6868b3] justify-evenly border-2 border-white"
          >
            <img src={icons.src} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
