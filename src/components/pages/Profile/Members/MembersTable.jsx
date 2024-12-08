const MembersTable = () => {
  const members = [
    { name: "Member A", portfolio: "Portfolio A", email: "" },
    { name: "Member B", portfolio: "Portfolio B", email: "" },
    { name: "Member C", portfolio: "Portfolio C", email: "" },
    { name: "Member D", portfolio: "Portfolio D", email: "" },
  ];

  return (
    <div className="p-6">
      <table className="w-full border-collapse border-spacing-0 text-left">
        <thead>
          <tr className="border-b-2 border-gray-300">
            <th className="p-4 text-darkColors-grey heading4">MEMBERS</th>
            <th className="p-4 text-darkColors-grey heading4">Portfolio</th>
            <th className="p-4 text-darkColors-grey heading4">EMAIL</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member, index) => (
            <tr key={index} className="border-b border-gray-200">
              <td className="p-4 bigBodyTextM text-darkColors-grey">
                {member.name}
              </td>
              <td className="p-4 bigBodyTextM text-darkColors-grey">
                {member.portfolio}
              </td>
              <td className="p-4 bigBodyTextM text-darkColors-grey">
                {member.email || "N/A"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MembersTable;
