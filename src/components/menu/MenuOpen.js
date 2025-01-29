import Link from "next/link";
import { MenuOptionIcon } from "./MenuOptionIcon";
import { MenuOptionTitle } from "./MenuOptionTitle";

export const MenuOpen = () => {
  return (
    <div>
      <div className="menu-open-option">
        <MenuOptionTitle label="Account" id="special" />
        <MenuOptionIcon imageUrl={"images/fn-profile.png"} />
      </div>
      <div className="menu-open-option">
        <Link href="/contacts">
          <MenuOptionTitle label="Contacts" id="special" />
        </Link>

        <MenuOptionIcon imageUrl={"images/fn-group.png"} />
      </div>
      <div className="menu-open-option">
        <MenuOptionTitle label="Notifications" id="special" />
        <MenuOptionIcon imageUrl={"images/fn-notification.png"} />
      </div>

      <div className="menu-open-option">
        <MenuOptionTitle label="Pinned messages" id="special" />
        <MenuOptionIcon imageUrl={"images/fn-pin.png"} />
      </div>
      <div className="menu-open-option">
        <MenuOptionTitle label="Network" id="special" />
        <MenuOptionIcon imageUrl={"images/fn-share.png"} />
      </div>
      <div className="menu-open-option">
        <MenuOptionTitle label="Security" id="special" />
        <MenuOptionIcon imageUrl={"images/fn-lock.png"} />
      </div>
      <div className="menu-open-option">
        <MenuOptionTitle label="Settings" id="special" />
        <MenuOptionIcon imageUrl={"images/fn-setting.png"} />
      </div>
    </div>
  );
};
