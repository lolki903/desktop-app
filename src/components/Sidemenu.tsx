import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaHome, FaUsers, FaComments, FaBuilding, FaExchangeAlt, FaMoneyBillWave,
  FaChevronDown, FaChevronUp, FaCog, FaSignOutAlt, FaUser, FaQuestionCircle, FaBars
} from "react-icons/fa";
import logo from "../assets/logo_waap.svg";


export const SideMenu = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isRefugeOpen, setIsRefugeOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleRefuge = () => setIsRefugeOpen(!isRefugeOpen);

  return (
    <div className={`bg-white h-screen flex flex-col justify-between shadow-md transition-all duration-300 px-4 ${isOpen ? "w-64" : "w-16"}`}>
      <div className="py-2 flex items-center justify-between">
        {isOpen && <img src={logo} alt="WAAP" className="h-20 bg-green-header p-4 rounded-xl" />}
        <button onClick={toggleMenu} className="p-2 text-gray-600">
          {isOpen ? <FaBars size={24} /> : <FaBars size={24} />}
        </button>
      </div>
      <div className={`mt-4 p-3 rounded-lg cursor-pointer ${isOpen ? "bg-yellow-200" : ""}`} onClick={toggleRefuge}>
        <div className="flex items-center justify-between">
          <span className={`font-bold text-green-900 py-4 ${!isOpen && "hidden"}`}>L’arche de Noé</span>
          {isOpen ? (isRefugeOpen ? <FaChevronUp /> : <FaChevronDown />) : <FaBuilding size={24} />}
        </div>
        {isOpen && isRefugeOpen && (
          <select className="mt-2 w-full p-2 border rounded">
            <option value="noe">L’arche de Noé</option>
            <option value="autre">Autre Refuge</option>
          </select>
        )}
      </div>
      <ul className="mt-6 space-y-4 flex-1">
        <li className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded">
          <FaHome size={24} /> {isOpen && <Link to="/">Accueil</Link>}
        </li>
        <li className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded">
          <FaComments size={24} /> {isOpen && <Link to="/message">Conversations</Link>}
        </li>
        <li className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded">
          <FaUsers size={24} /> {isOpen && <Link to="/contacts">Contacts</Link>}
        </li>
        <li className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded">
          <FaExchangeAlt size={24} /> {isOpen && <Link to="/transactions">Transactions</Link>}
        </li>
        <li className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded">
          <FaMoneyBillWave size={24} /> {isOpen && <Link to="/financier">Financier</Link>}
        </li>
      </ul>
      <div className="mb-6">
        <ul className="space-y-4">
          <li className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded">
            <FaUser size={24} /> {isOpen && <Link to="/account">Compte</Link>}
          </li>
          <li className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded">
            <FaCog size={24} /> {isOpen && <Link to="/settings">Paramètres</Link>}
          </li>
          <li className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded">
            <FaQuestionCircle size={24} /> {isOpen && <Link to="/help">Aide</Link>}
          </li>
          <li className="flex items-center gap-3 p-2 text-red-500 hover:bg-gray-100 rounded">
            <FaSignOutAlt size={24} /> {isOpen && <Link to="/logout">Déconnexion</Link>}
          </li>
        </ul>
      </div>
    </div>
  );
};