import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { Login } from "./components/Login";
import Dashboard from "./components/Dashboard";
import { SideMenu } from "./components/Sidemenu";
import { useState } from "react";
import { ChatPage } from "./components/Message";
import { MessageSendBird } from "./components/MessageSendBird";
import { Transactions } from "./components/Transaction";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(true); // État du menu
  const [connection, setConnection] = useState(true); // État de la fenêtre de chat
  return (
    <Router>
     {connection ?

      <div className="flex">
        {/* Sidebar */}
        <SideMenu />

        {/* Contenu Principal */}
        <div className={`flex-1 flex flex-col transition-all duration-300`}>
          <Header />
          <div className="p-4 bg-gray-100 min-h-screen">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/message" element={<ChatPage />} />
              <Route path="/transactions" element={<Transactions />} />
            </Routes>
          </div>
        </div>
      </div>
      : <Login />}
    </Router>
  );
}

export default App;