import React from "react";

const ProjectTag: React.FC<{
  name: string;
  onClick: (newTag: string) => void;
  isSelected: boolean;
}> = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-white bg-purple-500"
    : "text-[#ADBE7BE] border-slate-600";
  return (
    <button
      onClick={() => onClick(name)}
      className={`rounded-full border-2 px-6 py-3 text-xl cursor-pointer ${buttonStyles}`}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
