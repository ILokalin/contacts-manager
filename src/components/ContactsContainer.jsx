import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadContactsByUser } from "redux/actions";
import { useActivity } from "hooks";
import { ContactCard } from "components";

export const ContactsContainer = () => {
  const dispatch = useDispatch();
  const userId = useSelector(({ auth }) => auth.id);
  const filteredContacts = useSelector(({ http }) => http.filteredContacts);
  const isActivity = useActivity();

  useEffect(() => {
    if (isActivity) {
      dispatch(loadContactsByUser(userId));
    }
    // eslint-disable-next-line
  }, [isActivity]);

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
