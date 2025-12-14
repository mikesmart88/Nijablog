import { Link } from "react-router-dom";
import Icon from "./Icon";
import '../assets/scss/Bloglist.scss'
import { MEDIA_URL } from "../../env.config";
import { timeSince } from "../helpers/formatDate";


export default function NewsCard({blogList}) {

    if (!blogList) return null

    const item = blogList

    return (
        <div id="News_cardHolder">
            {item.map((post) =>(
                <Link to="" key={post.id} className="news_card">
                    <div className="news_cardimage">
                        <img src={`${MEDIA_URL}/${post.file_url}`} alt={post.title} />
                    </div>
                    <div className="news_cardcontent">
                        <h5>{post.title}</h5>
                        <small>{timeSince(post.created_at)}</small>
                    </div>
                </Link>
            ))}
        </div>
    )
}