import Icon from "./Icon"
import '../assets/scss/Navigation.scss'
import { Link } from "react-router-dom"


export default function Footer() {

    return (
        <footer id="Footer">

            <nav className="footerNav">
                <Link id="logo">
                <i>Nija</i><em>!</em><i>Blog</i>
                </Link>

                <div id="footer_links" style={{gap: "30px"}}>
                    <Link to="/">Home</Link>
                    <Link to="">Popular</Link>
                    <Link to="">Business</Link>
                    <Link to="">Channels</Link>
                    <Link to="">Buzz</Link>
                    <Link to="">Locals</Link>
                    <Link to="">About Us</Link>
                    <Link to="">Contact Us</Link>
                </div>

                <div id="social_links">
                    <Link to=""><Icon name="BsTwitter" /> </Link>
                    <Link to=""><Icon name="IoLogoFacebook" /></Link>
                    <Link to=""><Icon name="IoLogoInstagram" /></Link>
                    <Link to=""><Icon name="IoLogoPinterest" /></Link>
                </div>
            </nav>

            <nav className="footerNav">
                <div>
                    <span><Icon name="MdOutlineCopyright" /> 2025 NijaBlog</span>
                    <Link to="">Terms</Link>
                    <Link to="">Policy</Link>
                    <Link to="">Cookies</Link>
                </div>

                <div>
                    <Link to="">Reviews</Link>
                    <Link to="">Viral</Link>
                    <Link to="">Tips</Link>
                    <Link to="">Reactions</Link>
                    <Link to="">FYP</Link>
                    <Link to="">Disclaimer</Link>
                </div>
            </nav>

        </footer>
    )
}