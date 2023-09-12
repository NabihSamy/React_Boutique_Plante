import logo from '../media/logo.png'
import '../css/Banner.css'

function Banner () {
    return (
        <div className="haut-de-page">
            <img src={logo} className="logo" />
            <div className="slogant">La maison de la jungle</div>
        </div>
    )
}
export default Banner