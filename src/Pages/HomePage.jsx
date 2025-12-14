import React, { useState } from "react";
import UseMeta from "../hooks/UseMetaTags";
import { Helmet } from "@vuer-ai/react-helmet-async";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import '../assets/scss/Company.scss'
import SinglePost from "../components/PopBlog";
import PostBox from "../components/PostBox";
import UsePost from "../hooks/UsePost";
import NewsCard from "../components/NewsCard";
import VedioBox from "../components/VedioBox";
import StraightBlogList from "../components/SBlogList";
import BlogListPatterns from "../components/BlogPattern";
import { BACKEND_URL } from "../../env.config";

export default function HomePage() {
    const { heropost, blogList, video, Allpost, News, filteredPosts } = UsePost();
    const [pageUrl, setpageUrl] = useState(window.location.href)

    const metadata = UseMeta(
        "HomePage | NijaBloog",
        "Explore new feeds and many more on nijablog by react",
        `${pageUrl}`,
        'NijaBlog'
    )

    return (
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
        <NavBar />

        <main id="Homepage">
            <section className="latest_section">
                <section id="latest_blogs">
                    <h3>Latest Blogs</h3>
                    <SinglePost blog={heropost} />
                    <PostBox bloglist={blogList} />
                </section>
                <section id="latest_news">
                    <h3>News</h3>
                    <NewsCard blogList={News} />
                    <div className="feau_video">
                        <h3>Featured Video</h3>
                        {video.map((vid) => (
                            <VedioBox videoPost={vid} key={vid.id} />
                        ))}
                    </div>
                </section>
            </section>

            <section id="category_blog">
                <span>
                    Explore By Categories
                </span>
                <section className="scroll_blogs">
                    <StraightBlogList blogList={filteredPosts} />
                    <StraightBlogList blogList={filteredPosts} aria-hidden />
                </section>
            </section>

            <section id="Allblog_content">
                <BlogListPatterns blogs={Allpost} />
            </section>

        </main>

        <Footer />

        </>
    )
}