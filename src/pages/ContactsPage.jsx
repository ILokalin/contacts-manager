import { AddContactForm, ContactsContainer } from "components";

export const ContactsPage = () => {
  return (
    <div className="row flex-column-reverse flex-sm-column-reverse flex-md-row">
      <div className="col-md-6 col-sm-12 pt-2 pt-md-5">
        <h5 className="text-center text-muted">Your list</h5>
        <ContactsContainer />
      </div>
      <div className="col-md-6 col-sm-12 pt-5">
        <AddContactForm />
      </div>
    </div>
  );
};
