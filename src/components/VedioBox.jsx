import { Link } from "react-router-dom";
import Icon from "./Icon";
import Video from "./Vedio";
import '../assets/scss/Bloglist.scss'
import { MEDIA_URL } from "../../env.config";


export default function VedioBox({videoPost, ...props}) {
    if (!videoPost) return null

    const data = videoPost;
    return (
        <Link className="Vediopost" key={data.id}>
            <Video src={`${MEDIA_URL}/${data.file_url}`} title={data.title} />
        </Link>
    )

};