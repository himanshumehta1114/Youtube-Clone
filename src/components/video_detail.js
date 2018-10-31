import React from 'react';

const VideoDetail = ({video}) => {
    if(!video){
        return <div>Loading...</div>
    }

    var videoUrl = video.id.videoId;
    var url = `https://www.youtube.com/embed/${videoUrl}`;
    
    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url}></iframe>
            </div>
            <div className="details">
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>
        </div>
    );
}

export default VideoDetail;
