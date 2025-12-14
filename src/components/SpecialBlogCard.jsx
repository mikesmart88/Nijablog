import { Link } from "react-router-dom";
import Icon from "./Icon";
import '../assets/scss/Bloglist.scss'
import { MEDIA_URL } from "../../env.config";
import { timeSince } from "../helpers/formatDate";
import VideoPlayer from "./VedioPlayer";

export default function SpecialBlogCard({post}) {
    if (!post) return null

    return (
        <Link to="" className="special_blog">
            <div className="special_blogimg">
                {post.file_type === "Video" ? (
                    <VideoPlayer src={`${MEDIA_URL}/${post.file_url}`} />
                ): (
                    <img src={`${MEDIA_URL}/${post.file_url}`} alt={post.title} />
                )}
            </div>
            <small>{post.cartegory}. {timeSince(post.created_at)}</small>
            <h4>{post.title}</h4>
            <div className="post_icon">
                <span><Icon name="MdOutlineRemoveRedEye" /> {post.reads}</span>
                <span onClick={()=> console.log('sheared successfull')}><Icon name="LuShare" /></span>
            </div>
        </Link>
    );
}