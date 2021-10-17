import './style.css';
import Loader from '../loader';

function Start(props) {
  const {startLoading, loading} = props
  return (
    <div className="mid">
        <Loader loading={loading} />
        <p>Jakim Szymim dzisiaj jesteś?</p>
        <button onClick={startLoading}>losuj</button>
    </div>
  );
}



export default Start;
