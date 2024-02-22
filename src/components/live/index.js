import { useEffect, useRef, useState } from "react";
import { ChatPageProfilePictureImage } from "../chatPage/ChatPageProfilePictureImage";
import { ChatPageProFilePictureFull } from "../chatPage/ChatPageProfilePictureFull";
import { ChatPageHead } from "../chatPage/ChatPageHead";
import { MessageReceivedTime } from "../chatPage/MessageReceivedTime";
import { MessageSentTime } from "../chatPage/MessageSentTime";
import { SentSpeechBubble } from "../chatPage/SentSpeechBubble";
import { ReceivedSpeechBubble } from "../chatPage/ReceivedSpeechBubble";
import { MessageReceivedPicture } from "../chatPage/MessageReceivedPicture";
import { TextAreaInput } from "../shared/TextAreaInput";
import { InputContainer } from "../shared/InputContainer";
import "./style.css";

// Change content below. Make sure to use props!
export const Body = () => {
  /* REFER TO backup.js */
  return (
    <div className="body-container">
      <div className="body-received-messages-1">
        <div className="body-received-messages">
          <SentSpeechBubble />
          <p>
            Hey mate.. How are you? How are the team getting on? I believe this
            is the best time to catch you, whilst your in-between your projects.
            I'll send you over my best shot from yesterdays outdoor shoot 😊😊
          </p>
        </div>
        <MessageReceivedTime />
      </div>

      <div className="body-sent-messages-1">
        <div className="body-sent-messages">
          <p>
            Hey Kyle! So good to hear from you. You've caught me at the right
            time indeed. The team are doing great. We're really getting on with
            this new client. Looks like we'll be working together for the long
            term ✊
          </p>
          <ReceivedSpeechBubble />
        </div>
        <MessageSentTime />
      </div>

      <div className="body-received-messages-1">
        <div className="sent-received-images">
          <MessageReceivedPicture pic="/images/purple-landscape.jpg" />
          <p>My best shot from yday</p>
        </div>
        <MessageReceivedTime />
      </div>

      <div className="body-sent-messages-1">
        <div className="body-sent-messages">
          <p>
            This is awesome! This ought to be uploaded to our own stock images,
            but amongst the ones that are priced high
          </p>
          <ReceivedSpeechBubble />
        </div>
        <div className="sent-time-container">
          <time className="sent-time-2">12:09</time>
        </div>
      </div>

      <div className="body-received-messages-1">
        <div className="body-received-messages">
          <SentSpeechBubble />
          <p>
            Understood. The ground I was on was not stable. My feet, and the
            tripod behagn to sink through the ground. It was very dangerous.
            It's defo worth every penny!
          </p>
        </div>
        <div>
          <div className="sent-time-container-2">
            <time className="sent-time-2">15:33</time>
          </div>
        </div>
      </div>

      <div className="body-sent-messages-1">
        <div className="body-sent-messages">
          <p>
            I hear you. Well done!
            <br />
            <br />
            What other projects do you have coming up? There's a high-profile
            wedding in Earl's Court. Are you one of the photographers for the
            walkway?
          </p>
          <ReceivedSpeechBubble />
        </div>
        <div className="sent-time-container">
          <time className="sent-time-2">15:40</time>
        </div>
      </div>

      <div className="body-received-messages-1">
        <div className="body-received-messages">
          <SentSpeechBubble />
          <p>
            No, I am not one of those for the walkway, but even better! Keith
            was able to sell my services really well. I am forever grateful to
            him for helping me out in this opportunity 🚀🚀🚀
          </p>
        </div>
        <div>
          <div className="sent-time-container-2">
            <time className="sent-time-2">16:19</time>
          </div>
        </div>
      </div>

      <div className="body-received-messages-1">
        <div className="body-received-messages">
          <SentSpeechBubble />
          <p>
            Here's a piece of my work that has been advertised to this client..
          </p>
        </div>
        <MessageReceivedTime />
      </div>

      <div className="body-sent-messages-1">
        <div className="body-sent-messages">
          <p>Ooh.. yes, please send 🍿🍿</p>
          <ReceivedSpeechBubble />
        </div>
        <div className="sent-time-container">
          <time className="sent-time-2">11:49</time>
        </div>
      </div>

      <div className="body-received-messages-1">
        <div className="sent-received-images">
          <MessageReceivedPicture pic="/images/wedding-pic.jpg" />
          <p>Taken last year June 😍</p>
        </div>
        <MessageReceivedTime />
      </div>

      <div className="body-sent-messages-1">
        <div className="body-sent-messages">
          <p>
            This was you?? I saw this featured in one of our teams project
            meetings some time ago
          </p>
          <ReceivedSpeechBubble />
        </div>
        <div className="sent-time-container">
          <time className="sent-time-2">12:09</time>
        </div>
      </div>

      <div className="body-received-messages-1">
        <div className="body-received-messages">
          <SentSpeechBubble />
          <p>
            Ohh really? I did get high praise ofr my collection of shoots on the
            day. Didn't really think anything of it
          </p>
        </div>
        <div>
          <div className="sent-time-container-2">
            <time className="sent-time-2">15:33</time>
          </div>
        </div>
      </div>

      <div className="body-sent-messages-1">
        <div className="body-sent-messages">
          <p>
            Got some other work available for you, if yur have time, and want to
            increase awareness. Will send you more details shortly.
          </p>
          <ReceivedSpeechBubble />
        </div>
        <div className="sent-time-container">
          <time className="sent-time-2">15:40</time>
        </div>
      </div>

      <div className="body-received-messages-1">
        <div className="body-received-messages">
          <SentSpeechBubble />
          <p>Ahh thanks bud. I'll be waiting 😁😁😁</p>
        </div>
        <div>
          <div className="sent-time-container-2">
            <time className="sent-time-2">16:19</time>
          </div>
        </div>

        <div className="body-sent-messages-1">
          <div className="body-sent-messages">
            <p>
              You want to join the starting block, starting from March the 15?
              We have a new venue and facilities for this specific type, and
              nature of the shoot
            </p>
            <ReceivedSpeechBubble />
          </div>
          <div className="sent-time-container">
            <time className="sent-time-2">15:40</time>
          </div>
        </div>
      </div>
    </div>
  );
};
