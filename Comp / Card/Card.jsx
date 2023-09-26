import "./Card.css"

export default function Card(props) {
    console.log(props);
    return <div className='card'>
        <h2>Rei Ayanami</h2>

        <div className="tags">
            <span className="tag">Status: ?</span>
            <span className="tag">Espécie: Semideus</span>
            <span className="tag">Origem: Proveta</span>
        </div>

        <img src="https://i.ytimg.com/vi/WBOKz8SYQJo/maxresdefault.jpg" />
    </div>
}
