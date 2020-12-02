import { AddContactForm } from "components/AddContactForm";
import { ContactsContainer } from "components/ContactsContainer";

export const ContactsPage = () => {
  const contacts = [
    { name: "Pakemon Sloun", phone: "79122222212", id: "gh-234" },
    { name: "Pakemon Stoun", phone: "79122200212", id: "gh-235" },
  ];

  return (
    <div className="row">
      <div className="col-6 pt-5">
        <h5 className="text-center text-muted">Your list</h5>
        <ContactsContainer contacts={contacts} />
      </div>
      <div className="col-6 pt-5">
        <AddContactForm />
      </div>
    </div>
  );
};
