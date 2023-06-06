import { FaPlay } from "react-icons/fa";

const PlayButton = () => {
  return (
    <button
      className="
    transition
    opacity-0
    rounded-full
    flex
    items-center
    bg-green-500
    p-4
    drop-shadow-md
    translate 
    translate-y-1/4
    group-hover:translate-y-0
    group-hover:opacity-100
    hover:sclae-110"
    >
      <FaPlay size={20} className="text-black" />
    </button>
  );
};

export default PlayButton;
// 3:13
