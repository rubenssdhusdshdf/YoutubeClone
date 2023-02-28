import React from "react";
import "./Videos.css";
import Filter from "./Filter";
import SingleVideo from "./SingleVideo";

function Videos() {
  return (
    <div className="videos">
      <Filter />
      <div className="row">
        <SingleVideo
          thumb_img="https://i.ytimg.com/vi/8FSYJ54G_Ro/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDoPIvmlQNqnBLnZPwa9MLqf9Tc_g"
          profile_img="https://yt3.ggpht.com/yti/AHXOFjWGJAEan3OwPXxhUJjHcQoo3H4bR1A0AVtVdNAjig0=s88-c-k-c0x00ffffff-no-rj-mo"
          title=""
          channel_name=""
          views=""
          timestamps=""
          video_duration=""
        />
      </div>
    </div>
  );
}

export default Videos;
