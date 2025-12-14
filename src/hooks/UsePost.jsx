import { useState, useEffect } from "react";
import UseFetch from "./UseFetch";
import { BACKEND_URL } from "../../env.config";


export default function UsePost() {

    const {data: Latestpost, Loading, error} = UseFetch(`${BACKEND_URL}/posts/general/type=latest/`, 'latest blog post');
    const {data: Latestnews} = UseFetch(`${BACKEND_URL}/posts/news/type=latest/`, 'latest news');
    const {data: Featuredvedio} = UseFetch(`${BACKEND_URL}/posts/vedios/type=featured/`, 'featured vedio');
    const {data: Popularpost} = UseFetch(`${BACKEND_URL}/posts/general/type=popular/`, 'popular post');
    const [firstpost, ...otherpost] = Latestpost || [];

    useEffect(() => {
        if(Array.isArray(Latestpost)) setblogList(otherpost);
        if(Array.isArray(Latestnews)) setNews(Latestnews)
        if(Array.isArray(Featuredvedio)) setvideo(Featuredvedio)
        if(Array.isArray(Popularpost)) setAllpost(Popularpost)
        setpost(firstpost);
    }, [Latestpost, firstpost, otherpost, Latestnews, Featuredvedio]);


    const [post, setpost] = useState(null);
    const [blogList, setblogList] = useState([]);
    const [News, setNews] = useState([])
    const [video, setvideo] = useState([]);

    const [Allpost, setAllpost] = useState([]);


    const GetonePostperCartigory = (posts) => {
        const seen = new Set();
        const result = [];

        for (const post of posts){
            if (!seen.has(post.cartegory)){
                result.push(post);
                seen.add(post.cartegory);

            }
        }
        return result;
    }

    const filteredPosts = GetonePostperCartigory(Allpost);

    return { 
        heropost: post,
        blogList,
        video,
        Allpost,
        News,
        filteredPosts,
     }
}