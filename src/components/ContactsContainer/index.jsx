import { ContactCard } from "components/ContactCard";

export const ContactsContainer = ({ contacts }) => {
  return (
    <ul
      style={{ borderRadius: ".25rem" }}
      className="card list-group list-group-flush"
    >
      {contacts.map((contact) => (
        <li className="list-group-item" key={contact.id}>
          <ContactCard {...contact} />
        </li>
      ))}
    </ul>
  );
};
