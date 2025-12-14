import { useEffect} from "react";
import { Link } from "react-router-dom";
import '../assets/scss/Navigation.scss';
import Icon from "./Icon";

export default function NavBar() {
    return (
        <header id="navhead">
            <nav>
                <Link id="logo">
                <i>Nija</i><em>!</em><i>Blog</i>
                </Link>

                <div id="link_nav">
                    <div className="text_nav">
                        <Link to="/">Home</Link>
                        <span className='drops' id='company'>Explore <Icon name="BsChevronDown" />
                        <div className='drop_box'>
                            <div id="top_data">
                                <Link to=""><Icon name="MdTrendingUp" /> Popular</Link>
                                <Link to=""><Icon name="GiWrappingStar" /> Business and Analytics</Link>
                            </div>
                            <Link to="">News</Link>
                            <Link to="">Sports</Link>
                            <Link to="">Biographies</Link>
                            <Link to="">Politics</Link>
                            <Link to="">Entertainments</Link>
                            <Link to="">Tech</Link>
                            <Link to="">Finance</Link>
                            <Link to="">International News</Link>
                        </div>
                        </span>
                        <Link to="">Channels</Link>
                        <Link to="">Buzz</Link>
                        <Link to="">Locals</Link>
                        <Link to="">About Us</Link>
                    </div>

                    <div id="search_nav">
                        <Icon name="BsSearch" /> <small>Search Blogs</small> <span>/</span>
                    </div>

                    <div className="text_nav">
                        <Link to="" id="setting_link"><Icon name="FcSettings" title="settings" /></Link>
                        <Link to="">Contact Us</Link>
                    </div>

                </div>

            </nav>
        </header>
    )
}