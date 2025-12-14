import { Link } from "react-router-dom";
import Icon from "./Icon";
import { MEDIA_URL } from "../../env.config";
import VideoPlayer from "./VedioPlayer";

export default function StraightBlogList({blogList, ...props}) {
    if (!blogList) return null

    const items = blogList

    

    return (
        <section id="straightblog" {...props}>
            {items.map((post) => (
            <Link key={post.id} className="blogbox">
                <div className="blogbox_img">
                    {post.file_type === "Video" ? (
                        <video src={`${MEDIA_URL}/${post.file_url}`} />
                    ): (
                        <img src={`${MEDIA_URL}/${post.file_url}`} alt={post.title} />
                    )}
                </div>
                <div className="blogbox_content">
                    <em>{post.cartegory}</em>
                </div>
            </Link>
        ))}
        </section>
    )

}