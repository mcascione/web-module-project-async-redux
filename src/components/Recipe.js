import React, {useEffect} from "react";
// import videojs from "video.js";
// import "video.js/dist/video-js.min.css";


const Recipe = (props) => {
    const { recipe, key } = props;
  
    // useEffect(() => {
    //   const videoElement = document.getElementById(`recipe-video-${key}`);
  
    //   const player = videojs(videoElement, {
    //     sources: [
    //       {
    //         src: recipe.video_url,
    //         type: "application/x-mpegURL",
    //       },
    //     ],
    //   });
  
    //   return () => {
    //     player.dispose();
    //   };
    // }, [recipe.video_url, key]);

  console.log("recipe: ", recipe);

  return (
    <div className="recipe">
      <h3 key={key}>{recipe.name}</h3>
      <img width="200" src={recipe.thumbnail_url} />
      <p> Minutes to Prepare {recipe.cook_time_minutes}</p>
      <p>{recipe.yields}</p>
      {/* <video
        id={`recipe-video-${key}`}
        className="video-js vjs-default-skin"
        controls
        preload="auto"
        width="640"
        height="264"
        data-setup="{}"
      >
        <source src={recipe.video_url} type="application/x-mpegURL"></source>
        Your browser does not support the video tag.
      </video> */}
      {/* <a href={recipe.video_url}>Watch the Recipe Video</a> */}
    </div>
  );
};

export default Recipe;
