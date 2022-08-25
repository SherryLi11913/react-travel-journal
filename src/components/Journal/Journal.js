import './Journal.css';
import Card from './Card/Card';

function Journal({journal}) {
    const cards = journal.map(piece => {
        return <Card key={piece.id} {...piece}/>;
    })

    return (
        <div className="journal-container">
            {cards}
        </div>
    )
}

export default Journal;