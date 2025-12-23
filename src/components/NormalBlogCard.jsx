import { Link } from "react-router-dom";
import Icon from "./Icon";
import '../assets/scss/Bloglist.scss'
import { MEDIA_URL } from "../../env.config";
import { timeSince } from "../helpers/formatDate";
import VideoPlayer from "./VedioPlayer";

export default function NormalBlogCard({post}) {
    if (!post) return null

    return (
        <Link to="" className="Normalpost_box">
            <div className="postbox_img" style={{backgroundColor: "black"}}>
                {post.file_type === "Video" ? (
                    <VideoPlayer src={`${MEDIA_URL}/${post.file_url}`} />
                ): (
                    <img src={`${MEDIA_URL}/${post.file_url}`} alt={post.title} />
                )}
            </div>
            <div className="postbox_content">
                <small>{post.cartegory}. {timeSince(post.created_at)}</small>
                <h4>{post.title}</h4>
            <div className="post_icon">
                <span><Icon name="MdOutlineRemoveRedEye" /> {post.reads} </span>
                <span onClick={()=> console.log('sheared successfull')}><Icon name="LuShare" /></span>
            </div>
            </div>
        </Link>
    )
}