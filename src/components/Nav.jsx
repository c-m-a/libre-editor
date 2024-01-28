import CogIcon from "../assets/CogIcon.svg";
import CopyIcon from "../assets/CopyIcon.svg";
import RunIcon from "../assets/RunIcon.svg";
import UserIcon from "../assets/UserIcon.svg";

export default function Nav({ text }) {
  const copy = () => {
    navigator.clipboard.writeText(text);
  };

  return (
    <nav className="hidden md:flex flex-col justify-between items-center w-14 border-r border-gray-500">
      <ul className="flex flex-col gap-4 pt-3">
        <li className="cursor-pointer">
          <img className="w-8 h-8" src={RunIcon} alt="Run Code" />
        </li>
        <li onClick={copy} className="cursor-pointer">
          <img className="w-8 h-8" src={CopyIcon} alt="Copy Code" />
        </li>
      </ul>
      <ul className="flex flex-col gap-4 pb-3">
        <li className="cursor-pointer">
          <img className="w-8 h-8" src={CogIcon} alt="Settings" />
        </li>
        <li className="cursor-pointer">
          <img className="w-8 h-8" src={UserIcon} alt="User" />
        </li>
      </ul>
    </nav>
  );
}
