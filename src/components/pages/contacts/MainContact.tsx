import ContactForm from "./ContactForm";
import ContactAddress from "./ContactAddress";

const MainContact = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <ContactAddress />
        <ContactForm />
      </div>
    </div>
  );
};

export default MainContact;
