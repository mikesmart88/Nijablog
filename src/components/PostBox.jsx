import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import '../assets/scss/Bloglist.scss'
import { MEDIA_URL } from "../../env.config";

export default function PostBox({bloglist}) {

    if (!bloglist) return "No Blogs To Display"

    const items = bloglist

    return (
        <section id="postlist">
        {items.map((post) => (
            <Link key={post.id} className="postbox">
                <div className="postbox_img">
                    <img src={`${MEDIA_URL}/${post.file_url}`} alt={post.title} />
                </div>
                <div className="postbox_content">
                    <em>{post.cartegory}</em>
                    <h4>{post.title}</h4>
                    <p>{post.description}</p>
                </div>
            </Link>
        ))}
        </section>
    )
}