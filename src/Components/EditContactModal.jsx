import React, { useState } from "react";
import styles from "./EditContactModal.module.css";

const EditContactModal = ({ contact, onSave, onCancel }) => {
  const [name, setName] = useState(contact.name);
  const [phone, setPhone] = useState(contact.phone);

  const handleSave = () => {
    onSave({ ...contact, name, phone });
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h3>ویرایش مخاطب</h3>
        <div className={styles.formGroup}>
          <label>نام و نام خانوادگی:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={styles.formGroup}>
          <label>تلفن:</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className={styles.buttons}>
          <button onClick={handleSave} className={styles.saveButton}>
            ذخیره
          </button>
          <button onClick={onCancel} className={styles.cancelButton}>
            انصراف
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditContactModal;
