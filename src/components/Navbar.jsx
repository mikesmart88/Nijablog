import { useEffect} from "react";
import { Link } from "react-router-dom";
import '../assets/scss/Navigation.scss';
import Icon from "./Icon";
import { useNavigate } from "react-router-dom";

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
                                <Link to="/posts/popular/"><Icon name="MdTrendingUp" /> Popular</Link>
                                <Link to="/posts/business/"><Icon name="GiWrappingStar" /> Business and Analytics</Link>
                            </div>
                            <Link to="/posts/news/">News</Link>
                            <Link to="/posts/sports/">Sports</Link>
                            <Link to="/posts/biographies/">Biographies</Link>
                            <Link to="/posts/politics/">Politics</Link>
                            <Link to="/posts/Entertainments/">Entertainments</Link>
                            <Link to="/posts/technology/">Tech</Link>
                            <Link to="/posts/Finance/">Finance</Link>
                            <Link to="/posts/news/international/">International News</Link>
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