import SpecialBlogCard from "./SpecialBlogCard";
import NormalBlogCard from "./NormalBlogCard";
import '../assets/scss/Bloglist.scss'

export default function BlogListPatterns({ blogs }) {
    return(
        <div className="bloglist_pattern">
            {blogs.map((blog, index) => {
                const position = index + 1;
                const isSpecial = position % 10 === 1 || position % 10 === 0

                return (
                    <div className="main_blog" key={blog.id}>
                        {isSpecial ? (
                            <SpecialBlogCard post={blog} />
                        ) : (
                            <NormalBlogCard post={blog} />
                        )}
                    </div>
                )
            })}
        </div>
    )
}