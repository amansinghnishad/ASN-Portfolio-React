import React from "react";

const data = [
  {
    year: "2022-26",
    institution:
      "University of Lucknow (Faculty of Engineering and Technology)",
    degree: "Bachelor degree (B-Tech), Computer Science and Engineering",
    percentage: "N/A",
  },
  {
    year: "2020-21",
    institution: "Army Public School, Chandimandir Cantt. Panchkula",
    degree: "Class -12 (Intermediate)",
    percentage: "83.5",
  },
  {
    year: "2018-19",
    institution: "Army Public School, Chandimandir Cantt. Panchkula",
    degree: "Class -10 (High School)",
    percentage: "89.5",
  },
];

const EducationTable = () => {
  const borderClass = "border-2 border-[#9D4EDD] text-[#ffcbf2] p-5";
  const wobbleClass = "wobble-effect";

  return (
    <div className="overflow-x-auto">
      <style>{`
        @keyframes wobble {
          0%,
          100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(3deg);
          }
          50% {
            transform: rotate(-3deg);
          }
          75% {
            transform: rotate(1deg);
          }
        }

        .wobble-effect:hover {
          animation: wobble 0.5s ease-in-out;
        }
      `}</style>
      <h1 className="text-4xl p-2 pb-5 underline underline-offset-4 text-[#ffcbf2] ">
        Education :
      </h1>
      <table className={`m-2.5 p-5 h-64 ${borderClass}`}>
        <thead>
          <tr>
            <th className={`${borderClass} ${wobbleClass}`}>Year</th>
            <th className={`${borderClass} ${wobbleClass}`}>Institution</th>
            <th className={`${borderClass} ${wobbleClass}`}>Degree</th>
            <th className={`${borderClass} ${wobbleClass}`}>Percentage</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className={`${borderClass} `}>
              <td className={`${borderClass} ${wobbleClass}`}>{row.year}</td>
              <td className={`${borderClass} ${wobbleClass}`}>
                {row.institution}
              </td>
              <td className={`${borderClass} ${wobbleClass}`}>{row.degree}</td>
              <td className={`${borderClass} ${wobbleClass}`}>
                {row.percentage}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EducationTable;
