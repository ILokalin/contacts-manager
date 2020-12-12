import { AddContactContainer, ContactsContainer } from "components";

export const ContactsPage = () => {
  return (
    <div className="row flex-grow-1 flex-md-row-reverse">
      <div className="col-sm-12 col-md-4 pt-5">
        <AddContactContainer />
      </div>
      <div className="col-sm-12 col-md-8 pt-2 pt-md-5">
        <h5 className="text-center text-muted">Your list</h5>
        <ContactsContainer />
      </div>
    </div>
  );
};
