import { useEffect, useState } from "react";
import "./App.css";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
// import { Formik } from "formik";
// import * as Yup from "yup";
import { nanoid } from "nanoid";
import ContactForm from "./components/ContactForm/ContactForm";

function App() {
  const [contacts, setContacts] = useState(() => {
    const memory = window.localStorage.getItem("contacts");
    if (memory !== null) {
      return JSON.parse(memory);
    }
    if (memory === null) {
      return [
        { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
        { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
        { id: "id-3", name: "Eden Clements", number: "645-17-79" },
        { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
      ];
    }
  });

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
  });

  // Стан для фільтру
  const [filter, setFilter] = useState("");

  // Оновлення стану фільтру
  const handleSearchChange = (event) => {
    setFilter(event.target.value);
  };

  // Фільтрування контакт.
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const onDelete = (e) => {
    setContacts(contacts.filter((contact) => contact.id !== e.target.id));
  };

  const handleSubmit = (values, actions) => {
    actions.resetForm();
    setContacts([
      ...contacts,
      { id: nanoid(), name: values.userName, number: values.userNumber },
    ]);
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm handleSubmit={handleSubmit} />
      <SearchBox value={filter} onSearchChange={handleSearchChange} />
      <ContactList contacts={filteredContacts} onDelete={onDelete} />
    </div>
  );
}

export default App;
