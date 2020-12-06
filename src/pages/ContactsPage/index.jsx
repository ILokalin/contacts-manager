import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadContactsByUser } from "redux/actions";
import { AddContactForm, ContactsContainer } from "components";

export const ContactsPage = () => {
  const dispatch = useDispatch();
  const userId = useSelector(({ auth }) => auth.id);
  const contacts = useSelector(({ http }) => http.contacts);

  useEffect(() => {
    dispatch(loadContactsByUser(userId));
    // eslint-disable-next-line
  }, []);

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
