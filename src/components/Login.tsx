import { useState, createContext, useContext, ReactNode } from "react";
import { useNavigate } from "react-router-dom";

interface UserContextType {
  user: { username: string; role: string } | null;
  setUser: (user: { username: string; role: string } | null) => void;
}
const defaultUserContext: UserContextType = {
  user: null,
  setUser: () => {},
};

export const UserContext = createContext<UserContextType>(defaultUserContext); // Provide default value

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<{ username: string; role: string } | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const Login = () => {
  const { setUser } = useUser();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (role: string) => {
    if (username && password) {
      setUser({ username, role });
      navigate("/dashboard");
    } else {
      alert("Veuillez entrer un identifiant et un mot de passe");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 rounded-md text-center">
        <h2 className="text-5xl font-black text-[#346553] mb-6">Connexion</h2>

        <input
          type="text"
          placeholder="Identifiant"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-3/4 p-3 mb-4 border rounded focus:outline-none shadow-lg"
        />
        <input
          type="password"
          placeholder="Mot de Passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-3/4 p-3 mb-2 border rounded focus:outline-none shadow-lg"
        />

        <p className="text-sm text-gray-500 mb-6 mt-6 text-left ml-32 cursor-pointer hover:underline">Mot de passe oublié ?</p>

        <div className="flex justify-center space-x-2">
          <button onClick={() => handleLogin("adoptant")} className="px-4 py-1 bg-green-login text-sm text-white hover:bg-green-800 rounded-lg">
            Connexion adoptant
          </button>
          <button onClick={() => handleLogin("professionnel")} className="px-4 py-1 bg-green-login text-sm text-white hover:bg-green-800 rounded-lg">
            Connexion professionnel
          </button>
          <button onClick={() => handleLogin("refuge")} className="px-4 py-1 bg-green-login text-sm text-white hover:bg-green-800 rounded-lg">
            Connexion refuge
          </button>
        </div>
      </div>
    </div>
  );
};