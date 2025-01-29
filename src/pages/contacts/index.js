import { ReduceBrowserSize } from "@/components/dashboard/ReduceBrowserSize";
import { DashboardWriteNewMessage } from "@/components/dashboard/DashboardWriteNewMessage";
import { BurgerMenu } from "@/components/menu/BurgerMenu";
// import ContactsTemplate from "../contactsTemplate";
import useFetch from "@/useFetch";

const Contacts = () => {
  const { contacts, isLoading, error } = useFetch(
    "http://localhost:8000/contacts"
  );

  return (
    <div>
      <ReduceBrowserSize />
      <header className="head">
        <div className="head-container">
          <BurgerMenu />
          <div className="head-primary-info">
            <h1>Contact List</h1>
          </div>
          <DashboardWriteNewMessage />
        </div>
        <div className="divider"></div>
      </header>
      <div className="contacts-container">
        {error && <div> {error} </div>}
        {isLoading && <div>Loading. Please wait...</div>}
        {/* {contacts && <ContactsTemplate cts={contacts} />} */}
      </div>
    </div>
  );
};

export default Contacts;
