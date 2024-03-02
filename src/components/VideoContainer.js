import React, { useEffect, useState } from 'react'
import { YOUTUBE_API } from '../utility/constants'
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
const VideoContainer = () => {

  useEffect(() => {
    getVideo();
  }, []);

  const [videos, setVideos] = useState();
  const getVideo = async () => {
    const data = await fetch(YOUTUBE_API);
    const json = await data.json();
    //console.log(json);
    setVideos(json.items);
  };
  
  return (
    <div className="flex flex-wrap ml-4">
      {videos &&
        videos.map((video) => (
          <Link to={"/watch?v="+video.id}
          >
            <VideoCard key={video.id} info={video} />
          </Link>
        ))}
    </div>
  );
}
export default VideoContainer;