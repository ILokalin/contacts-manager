import { AddContactForm } from "components/AddContactForm";
import { ContactsContainer } from "components/ContactsContainer";

export const ContactsPage = () => {
  const contacts = [
    { name: "Pakemon Sloun", phone: "79122222212", id: "gh-234" },
    { name: "Pakemon Stoun", phone: "79122200212", id: "gh-235" },
  ];

  return (
    <div>
      <AddContactForm />
      <ContactsContainer contacts={contacts} />
    </div>
  );
};
