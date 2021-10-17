import './style.css';

function Result(props) {
    const {szymi, restart} = props

    return (
        <div className="mid">
            <div className="today">Dzisiaj jesteś:</div>
            <img className="pic" src={`/szymis/${szymi.src}`} alt="resultant szymi" />
            <div className="title">{szymi.title}</div>
            <div>{szymi.description}</div>
            <button className="btn" onClick={restart}>Jeszcze raz!</button>
        </div>
    )
}

export default Result;
