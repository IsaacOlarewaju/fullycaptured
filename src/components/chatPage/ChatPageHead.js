import { ChatPageProfilePictureImage } from "./ChatPageProfilePictureImage";
import Link from "next/link";

export const ChatPageHead = ({ title, lastSeen }) => {
  return (
    <header className="head">
      <div className="head-container">
        <div className="head-button">
          <Link href={"/"}>
            <img src="/images/left-arrow.png"></img>
          </Link>
        </div>
        <div className="head-primary-info">
          <h2>{title}</h2>
          <h3>{lastSeen}</h3>
        </div>
        <ChatPageProfilePictureImage />
      </div>
      <div className="divider"></div>
    </header>
  );
};
