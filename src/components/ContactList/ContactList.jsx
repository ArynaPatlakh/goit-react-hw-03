import s from "./ContactList.module.css";
import Contact from "../Contact/Contact";

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className={s.list}>
      {contacts.map((contact) => {
        return (
          <Contact contact={contact} key={contact.id} onDelete={onDelete} />
        );
      })}
    </ul>
  );
};

export default ContactList;
