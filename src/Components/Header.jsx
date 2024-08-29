import React, { useState } from "react";
import styles from "./Header.module.css";
import AddContactForm from "./AddContactForm";
import ContactList from "./ContactList";

const Header = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [contacts, setContacts] = useState([]);

  const handleAddContactClick = () => {
    setIsFormVisible(true);
  };

  const handleCloseForm = () => {
    setIsFormVisible(false);
  };

  const handleAddContact = (contact) => {
    setContacts([...contacts, contact]);
  };

  const deleteHandler = (contact) => {
    setContacts(contacts.filter((c) => c !== contact));
  };

  return (
    <div>
      <div className={styles.header}>
        <button className={styles.addContact} onClick={handleAddContactClick}>
          ➕
        </button>
        <button className={styles.check}>✔️</button>

        <input type="text" placeholder="جستجو در مخاطبان" />

        <button className={styles.search}>
          <span>:جستجو در مخاطبان</span>
        </button>

        {isFormVisible && (
          <AddContactForm
            onClose={handleCloseForm}
            onAddContact={handleAddContact}
          />
        )}
      </div>

      <ContactList contacts={contacts} deleteHandler={deleteHandler} />
    </div>
  );
};

export default Header;
