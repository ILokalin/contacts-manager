import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadContactsByUser } from "redux/actions";
import { ContactCard } from "components";

export const ContactsContainer = () => {
  const dispatch = useDispatch();
  const userId = useSelector(({ auth }) => auth.id);
  const filteredContacts = useSelector(({ http }) => http.filteredContacts);

  useEffect(() => {
    dispatch(loadContactsByUser(userId));
    // eslint-disable-next-line
  }, []);

  return (
    <ul
      style={{ borderRadius: ".25rem" }}
      className="card list-group list-group-flush"
    >
      {filteredContacts.map((contact) => (
        <li className="list-group-item" key={contact.id}>
          <ContactCard {...contact} />
        </li>
      ))}
    </ul>
  );
};
