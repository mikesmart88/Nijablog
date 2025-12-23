import React, { useState } from "react";
import UseMeta from "../hooks/UseMetaTags";
import { Helmet } from "@vuer-ai/react-helmet-async";
import '../assets/scss/Company.scss'
import UsePost from "../hooks/UsePost";
import BlogListPatterns from "../components/BlogPattern";


export default function TechnologyPostPage(){
    const { Technologyposts } = UsePost();
    const [pageUrl, setpageUrl] = useState(window.location.href)

    const metadata = UseMeta(
        "Popular Posts | NijaBloog",
        "Explore new feeds and many more on nijablog by react",
        `${pageUrl}`,
        'NijaBlog'
    )
    return(
        <>
        <Helmet>
            <title>{metadata.title}</title>
            <link rel="canonical" href={metadata.canonical} />

            {metadata.meta.map((tag, i) =>
            tag.name ? (
                <meta key={i} name={tag.name} content={tag.content} />
            ) : (
                <meta key={i} property={tag.name} content={tag.content} />
            )
            )}
        </Helmet>
        <main id="Homepage" className="PopularPage">
            <h3>Popular Posts</h3>
            <section id="Allblog_content">
                <BlogListPatterns blogs={Technologyposts} />
            </section>
        </main>
        </>
    )
}