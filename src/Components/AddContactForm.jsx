import React, { useState } from "react";
import ConfirmModal from "./ConfirmModal";
import styles from "./AddContactForm.module.css";

const AddContactForm = ({ onClose, onAddContact }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [job, setJob] = useState("");
  const [phone, setPhone] = useState("");
  const [isConfirmVisible, setIsConfirmVisible] = useState(false);

  const handleNameChange = (e) => {
    const value = e.target.value;
    setName(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsConfirmVisible(true);
  };

  const handleConfirmAdd = () => {
    onAddContact({ name, email, job, phone });
    setIsConfirmVisible(false);
    onClose();
  };

  const handleCancelAdd = () => {
    setIsConfirmVisible(false);
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.formContainer}>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label>نام و نام خانوادگی:</label>
            <input
              type="text"
              value={name}
              onChange={handleNameChange}
              placeholder={name.length < 7 ? "حداقل 7 کاراکتر وارد کنید" : ""}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label>ایمیل:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ایمیل خود را وارد کنید"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label>شغل:</label>
            <input
              type="text"
              value={job}
              onChange={(e) => setJob(e.target.value)}
              placeholder="شغل خود را وارد کنید"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label>تلفن:</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="تلفن خود را وارد کنید"
              required
            />
          </div>
          <button type="submit" className={styles.addButton}>
            افزودن
          </button>
        </form>
        {isConfirmVisible && (
          <ConfirmModal
            message="از افزودن مخاطب جدید مطمئن هستید؟"
            onConfirm={handleConfirmAdd}
            onCancel={handleCancelAdd}
          />
        )}
      </div>
    </div>
  );
};

export default AddContactForm;
