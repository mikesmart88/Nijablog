import { useState, useEffect, useMemo, use } from "react";
import UseFetch from "./UseFetch";
import { BACKEND_URL } from "../../env.config";
import UseIpLocation from "./UseIpLocation";

export default function UsePost() {
  // Fetch data
  //const { location } = UseIpLocation();
  const location = 'Nigeria';
  const { data: Latestpost } = UseFetch(`${BACKEND_URL}/posts/general/type=latest/`, 'latest blog post');
  const { data: Latestnews } = UseFetch(`${BACKEND_URL}/posts/news/type=latest/`, 'latest news');
  const { data: Featuredvedio } = UseFetch(`${BACKEND_URL}/posts/vedios/type=featured/`, 'featured vedio');
  const { data: Popularpost } = UseFetch(`${BACKEND_URL}/posts/general/type=popular/`, 'popular post');
  const { data: Businesspost } = UseFetch(`${BACKEND_URL}/posts/business/type=all/`, 'business post')
  const { data: Newspost } = UseFetch(`${BACKEND_URL}/posts/news/type=all/`, 'news post');
  const { data: Sportpost } = UseFetch(`${BACKEND_URL}/posts/sport/type=all/`, 'sport post');
  const { data: Biographpost } = UseFetch(`${BACKEND_URL}/posts/biograph/type=all/`, 'biograph post');
  const { data: Politicspost } = UseFetch(`${BACKEND_URL}/posts/politic/type=all/`, 'politics post');
  const { data: Entertainmentpost } = UseFetch(`${BACKEND_URL}/posts/entertainment/type=all/`, 'entertainments post');
  const { data: Technologypost } = UseFetch(`${BACKEND_URL}/posts/technology/type=all/`, 'technologys post');
  const { data: Financepost } = UseFetch(`${BACKEND_URL}/posts/finance/type=all/`, 'finances post');
  const { data: InternationalNewspost } = UseFetch(`${BACKEND_URL}/posts/news/international/?country=${location}`, `${location} news post`)

  
  //console.log(location)
  // State
  const [post, setPost] = useState(null);
  const [blogList, setBlogList] = useState([]);
  const [News, setNews] = useState([]);
  const [video, setVideo] = useState([]);
  const [Allpost, setAllpost] = useState([]);
  const [Displayedpost, setDisplayedpost] = useState([]);
  const [nextIndex, setnextIndex] = useState(0);
  const [hasMore, sethasMore] = useState(true);
  const [loadingMore, setloadingMore] = useState(false);
  const batchSize = 10;
  const [Allbusinesspost, setAllbusinesspost] = useState([]);
  const [Newsposts, setNewsposts] = useState([]);
  const [Sportposts, setSportposts] = useState([]);
  const [Biographposts, setBiographposts] = useState([]);
  const [Politicsposts, setPoliticsposts] = useState([]);
  const [Entertainmentposts, setEntertainmentposts] = useState([]);
  const [Technologyposts, setTechnologyposts] = useState([]);
  const [Financeposts, setFinanceposts] = useState([]);
  const [InternationalNewsposts, setInternationalNewsposts] = useState([]);


  // Memoize first post & other posts
  const [firstpost, otherpost] = useMemo(() => {
    if (!Latestpost || Latestpost.length === 0) return [null, []];
    const [first, ...others] = Latestpost;
    return [first, others];
  }, [Latestpost]);

  useEffect(() => {
    if (firstpost && blogList !== otherpost) setBlogList(otherpost);
    if (firstpost && post !== firstpost) setPost(firstpost);
  }, [firstpost, otherpost, blogList, post]);

  useEffect(() => {
    if (Latestnews && Latestnews !== News) setNews(Latestnews);
  }, [Latestnews, News]);

  useEffect(() => {
    if (Featuredvedio && Featuredvedio !== video) setVideo(Featuredvedio);
  }, [Featuredvedio, video]);

  useEffect(() => {
    if (Popularpost && Popularpost !== Allpost) setAllpost(Popularpost);
  }, [Popularpost, Allpost]);

  useEffect(() => {
    if (Businesspost && Businesspost !== Allbusinesspost) setAllbusinesspost(Businesspost);
  }, [Businesspost, Allbusinesspost])

  useEffect(() => {
    if (Newspost && Newspost !== Newsposts) setNewsposts(Newspost);
  }, [Newsposts, Newspost])

  useEffect(() => {
    if (Sportpost && Sportpost !== Sportposts) setSportposts(Sportpost);
  }, [Sportposts, Sportpost])

  useEffect(() => {
    if (Biographpost && Biographpost !== Biographposts) setBiographposts(Biographpost);
  }, [Biographposts, Biographpost])

  useEffect(() => {
    if (Politicspost && Politicspost !== Politicsposts) setPoliticsposts(Politicspost);
  }, [Politicsposts, Politicspost])

  useEffect(() => {
    if (Entertainmentpost && Entertainmentpost !== Entertainmentposts) setEntertainmentposts(Entertainmentpost);
  }, [Entertainmentposts, Entertainmentpost])

  useEffect(() => {
    if (Technologypost && Technologypost !== Technologyposts) setTechnologyposts(Technologypost);
  }, [Technologyposts, Technologypost])

  useEffect(() => {
    if (Financepost && Financepost !== Financeposts) setFinanceposts(Financepost);
  }, [Financeposts, Financepost])

  useEffect(() => {
    if (InternationalNewspost && InternationalNewspost !== InternationalNewsposts) setInternationalNewsposts(InternationalNewspost);
  }, [InternationalNewsposts, InternationalNewspost])




  useEffect(() => {
  if(Allpost.length > batchSize){
      const firstBatch = Allpost.slice(0, batchSize);
      // Only update if different
      if(firstBatch !== Allpost){
          setDisplayedpost(firstBatch);
          setnextIndex(batchSize);
      }
  }
}, [Allpost]);

useEffect(() => {
    const handleScroll = () => {
        if(window.innerHeight + window.scrollY >= document.body.offsetHeight - 200 && hasMore && !loadingMore){
            loadMorePosts();
        }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
}, [loadingMore, hasMore, nextIndex]);

const loadMorePosts = () => {
    if (!hasMore) return;
    setloadingMore(true);
    const nextBatch = Allpost.slice(nextIndex, nextIndex + batchSize);
    setDisplayedpost(prev => [...prev, ...nextBatch]);
    setnextIndex(prev => prev + batchSize);

    if (nextIndex + batchSize >= Allpost.length) {
        sethasMore(false)
    }
    setloadingMore(false)
}

  const GetonePostperCartigory = (posts) => {
    const seen = new Set();
    const result = [];

    for (const post of posts) {
      if (!seen.has(post.cartegory)) {
        result.push(post);
        seen.add(post.cartegory);
      }
    }

    return result;
  };

  const filteredPosts = GetonePostperCartigory(Allpost);

  return {
    heropost: post,
    blogList,
    video,
    Allpost,
    News,
    filteredPosts,
    Displayedpost,
    loadingMore,
    hasMore,
    Allbusinesspost,
    Newsposts,
    Sportposts,
    Biographposts,
    Politicsposts,
    Entertainmentposts,
    Technologyposts,
    Financeposts,
    InternationalNewsposts
  };
}
