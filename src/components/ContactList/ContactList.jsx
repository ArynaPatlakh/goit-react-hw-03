import s from "./ContactList.module.css"

const ContactList = ({ contacts, onDelete }) => {
    return <ul className={s.list}>
        {contacts.map(contact => { return <li className={s.item} key={contact.id}><div className={s.item_wrap}><p>{contact.name}</p><p>{contact.number}</p></div><button type="button" onClick={onDelete}>Delete</button></li>})}
    </ul>
 }

export default ContactList;