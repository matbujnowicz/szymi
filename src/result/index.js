import './style.css';
import atleta from '../assets/szymis/atleta.jpeg'
import blachara from '../assets/szymis/blachara.jpeg'
import dojebany from '../assets/szymis/dojebany.png'
import elegant from '../assets/szymis/elegant.jpeg'
import fighter from '../assets/szymis/fighter.jpeg'
import gangster from '../assets/szymis/gangster.jpeg'
import gotowy from '../assets/szymis/gotowy.jpeg'
import jajcarz from '../assets/szymis/jajcarz.jpeg'
import kielba from '../assets/szymis/kielba.jpeg'
import kitka from '../assets/szymis/kitka.jpeg'
import lodzik from '../assets/szymis/lodzik.png'
import raper from '../assets/szymis/raper.jpeg'
import relaks from '../assets/szymis/relaks.png'
import ruhacz from '../assets/szymis/ruhacz.png'
import smieszek from '../assets/szymis/smieszek.jpeg'
import smoker from '../assets/szymis/smoker.png'
import stylowy from '../assets/szymis/stylowy.jpeg'
import support from '../assets/szymis/support.jpeg'
import wujas from '../assets/szymis/wujas.png'
import ziomal from '../assets/szymis/ziomal.jpeg'



function Result(props) {
    const {szymi, restart} = props

    return (
        <div className="mid">
            <div className="today">Dzisiaj jesteś:</div>
            <img className="pic" src={getPhoto(szymi.src)} alt="resultant szymi" />
            <div className="title">{szymi.title}</div>
            <div>{szymi.description}</div>
            <button className="btn" onClick={restart}>Jeszcze raz!</button>
        </div>
    )
}

function getPhoto(name) { // that's so bad but gh pages deployment breaks path src of images, gotta move pics to some server
    switch (name) {
        case 'atleta':
            return atleta
        case 'blachara':
            return blachara
        case 'dojebany':
            return dojebany
        case 'elegant':
            return elegant
        case 'fighter':
            return fighter
        case 'gangster':
            return gangster
        case 'gotowy':
            return gotowy
        case 'jajcarz':
            return jajcarz
        case 'kielba':
            return kielba
        case 'kitka':
            return kitka
        case 'lodzik':
            return lodzik
        case 'raper':
            return raper
        case 'relaks':
            return relaks
        case 'ruhacz':
            return ruhacz
        case 'smieszek':
            return smieszek
        case 'smoker':
            return smoker
        case 'stylowy':
            return stylowy
        case 'support':
            return support
        case 'wujas':
            return wujas
        case 'ziomal':
            return ziomal
    
        default:
            return null
    }
}

export default Result;
