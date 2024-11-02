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

const Skills = () => {
  return (
    <div className="h-1/2 w-full flex justify-center item-center p-5">
      <div className="grid grid-cols-3 gap-x-14 gap-y-6  justify-center items-center">
        {icons.map((icon, index) => (
          <div
            key={index}
            className="w-16 h-16 flex flex-row rounded-md bg-[#6a6868b3] justify-evenly border-2 border-white"
          >
            <img src={icon.src} alt={icon.src.split(".")[0]} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
