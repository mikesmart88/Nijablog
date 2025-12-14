import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import '../assets/scss/Bloglist.scss';
import Icon from "./Icon";
import { MEDIA_URL } from "../../env.config";


export default function SinglePost ({blog, ...props}) {
    if (!blog) {
        return null
    }

    const data = blog;
    return (
        
        <Link className="Single_post" key={data.id}>
            <div id="single_image">
                <img src={`${MEDIA_URL}/${data.file_url}`} alt={data.title} />
            </div>
            <div id="post_content">
                <em>{data.cartegory}</em>
                <h4>{data.title}</h4>
                <p>{data.description}</p>
                <div>
                    <span><Icon name="MdOutlineRemoveRedEye" /> {data.reads} Reads</span>
                    <span onClick={()=> console.log('sheared successfull')}><Icon name="LuShare" /></span>
                </div>
            </div>
        </Link>
    );
}