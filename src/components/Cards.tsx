interface CardsProps {
    title: string;
    descriptionCard: string;
}

export const Cards = ({ title, descriptionCard }: CardsProps) => {
    return (
        <div className="card">
            <div className="card-content">
                <h2 className="card-title">{title}</h2>
                <p className="card-text">{descriptionCard}</p>
                <button className="card-button">En savoir plus...</button>
            </div>
        </div>
    );
}
