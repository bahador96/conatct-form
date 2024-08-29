import React, { useState } from "react";
import styles from "./ContactList.module.css";
import ConfirmModal from "./ConfirmModal";
import EditContactModal from "./EditContactModal";

const ContactList = ({ contacts, setContacts, deleteHandler }) => {
  const [selectedContact, setSelectedContact] = useState(null);
  const [isDeleteConfirmVisible, setIsDeleteConfirmVisible] = useState(false);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);

  const handleThreeDotsClick = (contact) => {
    setSelectedContact(contact);
  };

  const handleDelete = () => {
    setContacts(contacts.filter((contact) => contact !== selectedContact));
    setIsDeleteConfirmVisible(false);
    setSelectedContact(null);
  };

  const handleEdit = (updatedContact) => {
    const updatedContacts = contacts.map((contact) =>
      contact === selectedContact ? updatedContact : contact
    );
    setContacts(updatedContacts);
    setIsEditModalVisible(false);
    setSelectedContact(null);
  };

  const openDeleteConfirm = () => {
    setIsDeleteConfirmVisible(true);
  };

  const openEditModal = () => {
    setIsEditModalVisible(true);
  };

  const closeActionMenu = () => {
    setSelectedContact(null);
  };

  return (
    <div className={styles.contactList}>
      {contacts.map((contact, index) => (
        <div key={index} className={styles.contactItem}>
          <div className={styles.contactInfo}>
            <span>{contact.name}</span>
            <span>{contact.phone}</span>
          </div>
          <button
            className={styles.threeDots}
            onClick={() => handleThreeDotsClick(contact)}
          >
            ⋮
          </button>
          {selectedContact === contact && (
            <div className={styles.actionMenu}>
              <button className={styles.editButton} onClick={openEditModal}>
                ویرایش
              </button>
              <button
                className={styles.deleteButton}
                onClick={openDeleteConfirm}
              >
                حذف
              </button>
              <button className={styles.cancelButton} onClick={closeActionMenu}>
                انصراف
              </button>
            </div>
          )}
        </div>
      ))}

      {isDeleteConfirmVisible && (
        <ConfirmModal
          message="آیا مطمئن هستید که می‌خواهید این مخاطب را حذف کنید؟"
          onConfirm={handleDelete}
          onCancel={() => setIsDeleteConfirmVisible(false)}
        />
      )}

      {isEditModalVisible && (
        <EditContactModal
          contact={selectedContact}
          onSave={handleEdit}
          onCancel={() => setIsEditModalVisible(false)}
        />
      )}
    </div>
  );
};

export default ContactList;
