import { useEffect, useState } from "react";
import { FaSearch, FaPlus, FaPhone, FaEllipsisV, FaPaperPlane } from "react-icons/fa";

interface Message {
  id: number;
  name: string;
  date: string;
  content: string;
  avatar: string;
}

const messagesList: Message[] = [
  { id: 1, name: "Alice Dupont", date: "20/02/25", content: "Bonjour, comment ça va ?", avatar: "src/assets/picture_profile.jpg" },
  { id: 2, name: "Jean Martin", date: "19/02/25", content: "Merci pour votre aide !", avatar: "src/assets/picture_profile.jpg" },
  { id: 3, name: "Sophie Lambert", date: "18/02/25", content: "Avez-vous reçu le document ?", avatar: "src/assets/picture_profile.jpg" },
];

export const ChatPage = () => {
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
  const [chatMessages, setChatMessages] = useState<{ sender: "user" | "me"; text: string }[]>([]);
  const [inputText, setInputText] = useState("");

  // stock in local storage
  useEffect(() => {
    if (selectedMessage) {
      const storedMessages = localStorage.getItem(`chat-${selectedMessage.id}`);
      if (storedMessages) {
        setChatMessages(JSON.parse(storedMessages));
      } else {
        setChatMessages([{ sender: "user", text: selectedMessage.content }]);
      }
    }
  }, [selectedMessage]);

  // save
  const sendMessage = () => {
    if (inputText.trim() === "" || !selectedMessage) return;
    const newMessages = [...chatMessages, { sender: "me" as "user" | "me", text: inputText }];
    setChatMessages(newMessages);
    localStorage.setItem(`chat-${selectedMessage.id}`, JSON.stringify(newMessages));
    setInputText("");
  };

  return (
    <div className="flex h-screen-whitout-header">
      {/* sidemenu left */}
      <div className={`w-1/3 bg-white p-4 border-r transition-all ${selectedMessage ? "hidden lg:block" : "block"}`}>
        <div className="flex items-center justify-between mb-4">
          <button className="bg-green-500 text-white px-4 py-2 rounded flex items-center">
            <FaPlus className="mr-2" /> Nouvelle conversation
          </button>
          <div className="flex items-center border p-2 rounded">
            <FaSearch className="text-gray-500" />
            <input type="text" placeholder="Rechercher..." className="ml-2 outline-none" />
          </div>
        </div>
        <h3 className="text-lg font-bold mb-2">Messages récents</h3>
        <ul>
          {messagesList.map((msg) => (
            <li
              key={msg.id}
              className={`flex items-center p-3 border rounded-lg cursor-pointer ${selectedMessage?.id === msg.id ? "bg-green-100" : "hover:bg-gray-100"}`}
              onClick={() => {
                setSelectedMessage(msg);
                setChatMessages([{ sender: "user", text: msg.content }]); // Reset chat with initial message
              }}
            >
              <img src={msg.avatar} alt="avatar" className="w-10 h-10 rounded-full mr-3" />
              <div className="flex-1">
                <p className="font-bold">{msg.name}</p>
                <p className="text-sm text-gray-500">{msg.content.substring(0, 30)}...</p>
              </div>
              <span className="text-sm text-gray-400">{msg.date}</span>
            </li>
          ))}
        </ul>
      </div>

      {<div className={`w-3/4 p-4 transition-all ${selectedMessage ? "block" : "hidden lg:block"}`}>
        {selectedMessage ? (
          <div className="bg-white shadow rounded-lg p-4 h-full flex flex-col">
            <div className="flex items-center justify-between border-b pb-3 mb-4">
              <div className="flex items-center">
                <img src={selectedMessage.avatar} alt="avatar" className="w-12 h-12 rounded-full mr-3" />
                <div>
                  <p className="font-bold text-lg">{selectedMessage.name}</p>
                  <p className="text-green-500 text-sm">ONLINE</p>
                </div>
              </div>
              <div className="flex space-x-3 text-gray-500">
                <FaPhone />
                <FaEllipsisV />
              </div>
            </div>
            <div className="flex-1 overflow-y-auto space-y-4 p-2">
              {chatMessages.map((msg, index) => (
                <div key={index} className={`p-3 rounded-lg max-w-lg ${msg.sender === "me" ? "bg-blue-500 text-white self-end" : "bg-gray-200 self-start"}`}>
                  {msg.text}
                </div>
              ))}
            </div>
            <div className="border-t pt-3 flex items-center">
              <input
                type="text"
                placeholder="Écrivez votre message..."
                className="flex-1 px-3 py-2 border rounded-full mx-2 outline-none"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              />
              <button onClick={sendMessage} className="p-2 text-blue-500">
                <FaPaperPlane />
              </button>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center h-full text-gray-500">
            Sélectionnez une conversation
          </div>
        )}
      </div>
      }
    </div>
  );
};