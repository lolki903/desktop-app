import { useState } from "react";
import { FaSearch, FaFilter, FaPlus, FaEllipsisV } from "react-icons/fa";

const transactionsData = [
  { id: 1, nom: "Alice Dupont", montant: "120€", status: "En attente", type: "Virement" },
  { id: 2, nom: "Jean Martin", montant: "250€", status: "Terminé", type: "Paiement" },
  { id: 3, nom: "Sophie Bernard", montant: "75€", status: "En attente", type: "Virement" },
  { id: 4, nom: "Paul Durand", montant: "300€", status: "Terminé", type: "Paiement" },
];

export const Transactions = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="bg-green-100 p-4 flex justify-between items-center rounded-md">
        <h1 className="text-lg font-semibold">Suivi - Transactions</h1>
        <div className="relative">
          <input
            type="text"
            placeholder="Rechercher une transaction"
            className="pl-10 pr-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
        </div>
      </div>
      <div className="flex justify-between mt-4">
        <div className="flex gap-2">
          <button className="px-4 py-2 border rounded-md flex items-center gap-2">
            <FaFilter /> Status
          </button>
          <button className="px-4 py-2 border rounded-md flex items-center gap-2">
            <FaFilter /> Type
          </button>
        </div>
        <button className="bg-green-500 text-white px-4 py-2 rounded-md flex items-center gap-2">
          <FaPlus /> Ajouter
        </button>
      </div>
      <div className="bg-white mt-6 shadow-md rounded-md p-4">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b">
              <th className="text-left py-2">Nom</th>
              <th className="text-left py-2">Montant</th>
              <th className="text-left py-2">Status</th>
              <th className="text-left py-2">Type</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {transactionsData
              .filter((t) => t.nom.toLowerCase().includes(search.toLowerCase()))
              .map((transaction) => (
                <tr key={transaction.id} className="border-b">
                  <td className="py-2">{transaction.nom}</td>
                  <td className="py-2">{transaction.montant}</td>
                  <td className="py-2">{transaction.status}</td>
                  <td className="py-2">{transaction.type}</td>
                  <td className="py-2 text-right">
                    <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-md">
                      <FaEllipsisV />
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

    </div>
  );
};