interface CardsProps {
    title: string;
    messages: MessageTask[];
    backgroundColor: string;
}

interface MessageTask {
    name: string;
    date: string;
    budget?: string;
}

export const CardsTask = ({ title, messages, backgroundColor }: CardsProps) => {
    return (
        <div className="bg-white p-4 rounded-lg shadow w-xl">
          <h2 className="text-lg font-semibold mb-2">{title}</h2>
          {messages.map((message) => (
            <div className="flex justify-between border-b py-2" key={message.name}>
                <span>{message.name}</span>
                <span className="text-gray-500 text-sm">{message.date}</span>
            </div>
          ))}
        </div>
    );
}
