interface CardsProps {
    title: string;
    icon: string;
    backgroundColor: string;
}

export const Cards = ({ title, icon, backgroundColor }: CardsProps) => {
    return (
        <div className={`card rounded-lg p-8 ${backgroundColor} m-4 first:ml-0`}>
            <img src={icon} alt="icon" className="h-7 " />
            <h3 className="text-sm">{title}</h3>
        </div>
    );
}
