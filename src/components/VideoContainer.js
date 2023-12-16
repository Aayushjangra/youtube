import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard, { AdVideoCard } from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => { 
    const [video , setVideos] = useState([]);
    useEffect (() => {
        getVideo();

    }, []);

    const getVideo = async () => {
        const data = await fetch (YOUTUBE_VIDEOS_API);
        const json = await data.json();
        setVideos(json.items);
    };

  return (
    <div className="flex flex-wrap">
     {video.map((video) => ( 
     <Link key={video.id} to={"/watch?v=" + video.id}>
     <VideoCard  info={video} />
   </Link>
     ))}
        
    </div>
  );
};

export default VideoContainer;
