import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadContactsByUser } from "redux/actions";
import { AddContactForm, ContactsContainer } from "components";

export const ContactsPage = () => {
  const dispatch = useDispatch();
  const userId = useSelector(({ auth }) => auth.id);
  const filteredContacts = useSelector(({ http }) => http.filteredContacts);

  useEffect(() => {
    dispatch(loadContactsByUser(userId));
    // eslint-disable-next-line
  }, []);

  return (
    <div className="row flex-column-reverse flex-sm-column-reverse flex-md-row">
      <div className="col-md-6 col-sm-12 pt-2 pt-md-5">
        <h5 className="text-center text-muted">Your list</h5>
        <ContactsContainer contacts={filteredContacts} />
      </div>
      <div className="col-md-6 col-sm-12 pt-5">
        <AddContactForm />
      </div>
    </div>
  );
};
