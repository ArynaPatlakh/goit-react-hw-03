import s from "./Contact.module.css";

const Contact = ({ contact, key, onDelete }) => {
  return (
    <li className={s.item} key={key}>
      <div className={s.item_wrap}>
        <p>{contact.name}</p>
        <p>{contact.number}</p>
      </div>
      <button id={contact.id} type="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
