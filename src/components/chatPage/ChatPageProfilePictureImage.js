import React, { useState } from "react";

export const ChatPageProfilePictureImage = () => {
  const [showImage, setShowImage] = useState(true);

  const clickProfilePicFunction = () => {
    setShowImage(!showImage);
  };

  return (
    <figure onClick={clickProfilePicFunction} className="head-profile-picture">
      <img
        className={`profile-picture-full-size${
          !showImage ? " head-profile-picture--hide" : ""
        }`}
        src="/images/kyle-walker.webp"
      ></img>
    </figure>
  );
};
