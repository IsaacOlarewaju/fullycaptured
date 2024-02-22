import { useEffect, useState, useRef } from "react";
import Pusher from "pusher-js";
import "./../live/style.css";
import { BurgerMenu } from "../menu/BurgerMenu";
import { DashboardWriteNewMessage } from "./DashboardWriteNewMessage";
import { DashboardArticle } from "./DashboardArticle";

import * as dotenv from "dotenv";

dotenv.config();

// Enable pusher logging - don't include this in production
Pusher.logToConsole = true;

export default function DashboardComponent() {
  return (
    <header className="head">
      <div className="head-container">
        <BurgerMenu />
        <div className="head-primary-info">
          <h1>Fully Captured</h1>
          {/* <h3>last seen 4 mins ago</h3> */}
        </div>
        <DashboardWriteNewMessage />
      </div>
      <div className="divider"></div>
    </header>
  );
}

export const DashboardBody = (props) => {
  const [search, setSearch] = useState("");
  console.log(search);
  const [messages, setMessages] = useState([
    {
      id: 1,
      picture: "./../../images/kyle-walker-small.webp",
      name: "Kyle Walker",
      content:
        "You: You want to join the starting block, starting from March the 15? We have a new venue and facilities for…",
      TimeAgo: "just now",
    },
    {
      id: 2,
      picture: "./../../images/angie.webp",
      name: "Angie Roberts",
      content:
        "You: Don’t say I didn’t tell you! We start again next week. My boy is having another photoshoot next week, but I…",
      TimeAgo: "2min sago",
    },
    {
      id: 3,
      picture: "./../../images/david.webp",
      name: "Davey",
      content:
        "You:  we can leave the light placement and setup as it is matey. Thanks for your help ❤️",
      TimeAgo: "31mins ago",
    },
    {
      id: 4,
      picture: "./../../images/doggo.webp",
      name: "Ben Oliver 2",
      content: "2 images attached (9.5mb)",
      TimeAgo: "1hr ago",
    },
    {
      id: 5,
      picture: "./../../images/newly-wed.webp",
      name: "Isabel Namrata",
      content:
        "You: Mate, who was that client of yours 2 days ago? Do you get regular work from them? And are they open to…",
      TimeAgo: "3hrs ago",
    },
    {
      id: 6,
      picture: "./../../images/rukky.webp",
      name: "Rukky",
      content:
        "Apologies for the inconvenience. Will defo keep you updated 🙏🙏",
      TimeAgo: "06:15",
    },
    {
      id: 7,
      picture: "./../../images/newly-wed-2.webp",
      name: "Josh Robins",
      content:
        "You: I think cathedrals in London serve as a better background, as it gives a vintage vibe 😍😍",
      TimeAgo: "yesterday",
    },
    {
      id: 8,
      picture: "./../../images/e92-m3.webp",
      name: "Ethan Wilson",
      content: "🔋🔋🔋",
      TimeAgo: "yesterday",
    },
    {
      id: 9,
      picture: "./../../images/susan.webp",
      name: "Susan",
      content:
        "You: Guys, we need to revamp the lighting equipment next time. Our competitors are slowly gaining on us as...",
      TimeAgo: "Wednesday",
    },
    {
      id: 10,
      picture: "./../../images/Conrad-dale.webp",
      name: "Conrad Dale",
      content: "You: London Road, 132. By the bus stop ☺️",
      TimeAgo: "Thursday",
    },
    {
      id: 11,
      picture: "./../../images/abena.webp",
      name: "Abena",
      content: "Expert 👌",
      TimeAgo: "Thursday",
    },
    {
      id: 12,
      picture: "./../../images/desmond-kwame.webp",
      name: "Desmond Kwame",
      content:
        "You: Hey bro. What are the facilities like at your gym? Do they have picture friendly steam rooms and saunas...",
      TimeAgo: "Friday",
    },
    {
      id: 13,
      picture: "./../../images/Lee-baker.webp",
      name: "Lee Baker",
      content: "You: done ✅",
      TimeAgo: "Sunday",
    },
    {
      id: 14,
      picture: "./../../images/Wendy-price.webp",
      name: "Wendy Price",
      content:
        "You:  It was a very lovely evening. My lens picked up everything so beautifully 👌✨",
      TimeAgo: "Sunday",
    },
    {
      id: 15,
      picture: "./../../images/Thomas-price.webp",
      name: "Tommy",
      content: "21 images attached (93.0mb)",
      TimeAgo: "Sunday",
    },
    {
      id: 16,
      picture: "./../../images/ritika-yusuf.webp",
      name: "Ritika Yusuf",
      content:
        "Aww these photos are soooo cuteee! 🥰🥰🥰. Look at Clair’s little boy! He’s grown sooo much! I wonder…",
      TimeAgo: "12/11/23",
    },
    {
      id: 17,
      picture: "./../../images/Raye.webp",
      name: "Raye",
      content:
        "You: Hiya fella. Do you have that SLR camera I gave you yesterday? Need it for an upcoming project..",
      TimeAgo: "12/11/23",
    },
    {
      id: 18,
      picture: "./../../images/not-saved.webp",
      name: "+447940276612",
      content:
        "Please send over the shots from the photoshoot this evening ✨✨",
      TimeAgo: "04/11/23",
    },
    {
      id: 19,
      picture: "./../../images/mikey.webp",
      name: "Mikey",
      content: "Yes bro. This date and time sounds good 😬",
      TimeAgo: "16/10/23",
    },
    {
      id: 20,
      picture: "./../../images/Desiree.webp",
      name: "Desiree",
      content: "17 images attached (76.7mb)",
      TimeAgo: "30/09/23",
    },
    {
      id: 21,
      picture: "./../../images/arianne-ruiz.webp",
      name: "Arianne Ruiz",
      content: "You: Please call back as soon as you receive this message 🙏",
      TimeAgo: "01/08/23",
    },
    {
      id: 22,
      picture: "./../../images/annabel-taylor.webp",
      name: "Annabel Taylor",
      content: "You: Perfect 🎯",
      TimeAgo: "10/06/23",
    },
    {
      id: 23,
      picture: "./../../images/Beut-Price.webp",
      name: "Beut Price",
      content:
        "I won’t be back in London till next week mate. Please give all the proceeds to my Dad. He’s besides the.…",
      TimeAgo: "02/06/23",
    },
    {
      id: 24,
      picture: "./../../images/eugene-lister.webp",
      name: "Eugene Lister",
      content:
        "I think you’ve gotten a bit too close to the rear wheels of that R6. It looked pretty dangerous from my point of …",
      TimeAgo: "18/05/23",
    },
    {
      id: 25,
      picture: "./../../images/Isaac-Walters.webp",
      name: "Isaac Walters",
      content: "Beautiful sunrise pictures! ☀️☀️☀️",
      TimeAgo: "09/05/23",
    },
    {
      id: 26,
      picture: "./../../images/Joe-Palmer.webp",
      name: "Joe Palmer",
      content:
        "These shots from the top of the Shard looks golden! I never thought London would present such amazing…",
      TimeAgo: "03/05/23",
    },
    {
      id: 27,
      picture: "./../../images/Mariana.webp",
      name: "Mariana",
      content: "You: Lovely 🥰🥰🥰",
      TimeAgo: "20/04/23",
    },
    {
      id: 28,
      picture: "./../../images/Thomas-price.webp",
      name: "+447347136601",
      content:
        "You: It was getting too dark for our cameras to pickup the very thing we were trying to advertise. I recommend…",
      TimeAgo: "04/04/23",
    },
    {
      id: 29,
      picture: "./../../images/michael-fraizer.webp",
      name: "Michael",
      content: "8 images attached (38.1mb)",
      TimeAgo: "06/02/23",
    },
    {
      id: 30,
      picture: "./../../images/yasmin-patel.webp",
      name: "Yasmin",
      content:
        "Do you think we will need to edit these in Adobe Lightroom? I think it could do with a little more vibrance…",
      TimeAgo: "10/01/23",
    },
  ]);

  return (
    <div>
      <div className="dashboard-message">
        <div className="dashboard-search-container">
          <button className="dashboard-message-attatch-button">
            <img src="/images/fn-search2.png"></img>
          </button>

          <div className="cover1">
            <div className="cover2">
              <input
                className="textarea1"
                onChange={(e) => setSearch(e.target.value)}
                placeholder=" Search for messages or friends..."
              ></input>
            </div>
          </div>
        </div>
      </div>

      <div className="dashboard-body-container">
        {" "}
        <h2>All messages</h2>
        {messages
          .filter((message) => {
            return search.toLocaleLowerCase().trim() === ""
              ? message
              : message.content.toLocaleLowerCase().includes(search) ||
                  message.name.toLocaleLowerCase().includes(search);
          })
          .map((message) => {
            return (
              <DashboardArticle
                key={message.id}
                ArticlePicture={message.picture}
                ArticleName={message.name}
                ArticleChat={message.content}
                TimeAgo={message.TimeAgo}
              />
            );
          })}
      </div>
    </div>
  );
};
