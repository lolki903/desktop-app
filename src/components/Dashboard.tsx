import '../App.css'
import { Cards } from './Cards';
import cat from '../assets/cat_icon.svg';
import people from '../assets/peaple.svg';
import chat from '../assets/icon_chat.svg';
import { CardsTask } from './Card_task';

const Dashboard = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className='flex justify-between mb-10'>
      <div>
        <h1 className="text-2xl font-semibold mb-4">Bonjour, Benoît</h1>
      </div>
      <div>
        <h1 className="text-l font-semibold mb-4 items-center">Action rapides</h1>
        <div className='flex'>
          <Cards title="Ajouter un animal" icon={cat} backgroundColor='bg-green-300'/>
          <Cards title="Ajouter un bénévole" icon={people} backgroundColor='bg-[#F8D6D0]'/>
          <Cards title="Ajouter une conversation" icon={chat} backgroundColor='bg-[#F7EA91]'/>
        </div>
      </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">Mes démarches en cours</h2>
          <div className="flex justify-between items-center border-b py-2">
            <span>Gribouille</span>
            <span className="text-yellow-500 bg-yellow-100 px-2 py-1 text-xs rounded">
              En attente de documents
            </span>
          </div>
          <div className="flex justify-between items-center border-b py-2">
            <span>Gribouille</span>
            <span className="text-green-500 bg-green-100 px-2 py-1 text-xs rounded">
              Visite prévue
            </span>
          </div>
        </div>
       <CardsTask title="Statistiques" messages={[
          {
            name: 'Nombre d\'animaux',
            date: '12'
          },
          {
            name: 'Nombre de bénévoles',
            date: '5'
          },
          {
            name: 'Nombre de conversations',
            date: '3'
          }
        ]} backgroundColor='bg-[#F8D6D0]'/>
        <CardsTask title="Tâches à venir" messages={[
          {
            name: 'Nettoyer box chats',
            date: '20/03/2024'
          },
          {
            name: 'Promener Rex',
            date: '14/05/2024'
          }
        ]} backgroundColor='bg-[#F7EA91]'/>
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">Mes conversations</h2>
          <div className="border-b py-2">
            <p className="font-semibold">Ambre TENNET</p>
            <p className="text-gray-500 text-sm">Bonjour, je voulais vous parler de ...</p>
          </div>
          <div className="border-b py-2">
            <p className="font-semibold">Jacques BRIAN</p>
            <p className="text-gray-500 text-sm">Suite à votre dernier message ...</p>
          </div>
          <div className="border-b py-2">
            <p className="font-semibold">Frédérique DELAUNAY</p>
            <p className="text-gray-500 text-sm">Je vous confirme la réservation de ...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;