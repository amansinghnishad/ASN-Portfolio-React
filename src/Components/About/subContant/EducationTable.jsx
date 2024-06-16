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
  return (
    <div className="overflow-x-auto">
      <h1 className=" text-4xl p-2">Education : </h1>
      <table className="m-2.5 p-5 border-2 h-64 ">
        <thead>
          <tr>
            <th className="p-5 border-2">Year</th>
            <th className="p-5 border-2">Institution</th>
            <th className="p-5 border-2">Degree</th>
            <th className="p-5 border-2">Percentage</th>
          </tr>
        </thead>
        <tbody className="p-5 border-2">
          {data.map((row, index) => (
            <tr key={index} className="p-5 border-2">
              <td className="p-5 border-2">{row.year}</td>
              <td className="p-5 border-2">{row.institution}</td>
              <td className="p-5 border-2">{row.degree}</td>
              <td className="p-5 border-2">{row.percentage}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EducationTable;
