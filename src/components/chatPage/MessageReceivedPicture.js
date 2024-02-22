export const MessageReceivedPicture = ({ pic }) => {
  return (
    <picture>
      <div>
        <img className="sent-received-the-image" src={pic}></img>
      </div>
    </picture>
  );
};
