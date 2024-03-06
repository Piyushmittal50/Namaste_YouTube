import React from 'react'

const VideoCard = ({ info }) => {
    console.log(info);
    const { snippet, statistics } = info;
    const { channelTitle, title, thumbnails } = snippet;
    const { viewCount } = statistics;

    function formatViewCount(viewCount) {
      if (viewCount >= 1000000000) {
        return (viewCount / 1000000000).toFixed(1) + "B";
      }
      if (viewCount >= 1000000) {
        return (viewCount / 1000000).toFixed(1) + "M";
      }
      if (viewCount >= 1000) {
        return (viewCount / 1000).toFixed(1) + "k";
      }
      return viewCount;
    }

    return (
      <div className="p-2 m-2 w-72 shadow-lg">
        <img
          className="rounded-lg"
          alt="thumbnail"
          src={thumbnails.medium.url}
        />
        <ul>
          <li className="font-bold py-1 overflow-hidden overflow-ellipsis h-12">
            {title}
          </li>
          <li className="py-1 overflow-hidden overflow-ellipsis">
            {channelTitle}
          </li>
          <li className="">{formatViewCount(viewCount)} views</li>
        </ul>
      </div>
    );
};

export default VideoCard;