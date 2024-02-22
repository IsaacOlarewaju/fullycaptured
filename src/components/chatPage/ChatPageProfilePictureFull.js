// Image subject to change. Based on image upload from user profile

export const ChatPageProFilePictureFull = () => {
  return (
    <picture className="profile-picture-full-size">
      <img
        src="/images/kyle-walker.webp"
        alt="Profile Picture"
        srcSet="/images/kyle-walker.webp 1x,
                /images/kyle-walker.webp 2x,
                /images/kyle-walker.webp 3x"
      ></img>
    </picture>
  );
};
