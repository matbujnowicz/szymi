import './style.css';
import logo from '../assets/logo.jpeg'

function Loader(props) {
    const {loading} = props

    return (
        <div className={loading? "relSpin":"rel"}>
            <img className="logo" src={logo} alt="main logo" />
            {loading && over()}
        </div>
    )
}

function over() {
    return (
        <div className="over">
            <p className="q">?</p>
        </div>
    )
}

export default Loader;
