import { FaBell } from "react-icons/fa";

const Header = () => {
  return (
    <div className="bg-green-header p-4 flex items-center justify-between">
      <input
        type="text"
        placeholder="Rechercher dans L'arche de Noé"
        className="w-1/2 p-2 rounded border border-gray-300"
      />
      <FaBell className="text-gray-600 text-2xl cursor-pointer" />
    </div>
  );
};

export default Header;