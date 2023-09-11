import logo from '../media/logo.png'
import '../css/Banner.css'

function Banner () {
    return (
        <div className="haut-de-page">
            <img src={logo} className="logo" />
            <slogant className="slogant">La maison de la jungle</slogant>
        </div>
    )
}
export default Banner