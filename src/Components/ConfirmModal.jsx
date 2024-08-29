// import React from "react";
// import styles from "./ConfirmModal.module.css";

// const ConfirmModal = ({ onConfirm, onCancel }) => {
//   return (
//     <div className={styles.overlay}>
//       <div className={styles.modal}>
//         <p>شما در حال افزودن مخاطب هستید. آیا مطمئن هستید؟</p>
//         <div className={styles.buttons}>
//           <button onClick={onConfirm} className={styles.confirmButton}>
//             افزودن
//           </button>
//           <button onClick={onCancel} className={styles.cancelButton}>
//             انصراف
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ConfirmModal;

import React from "react";
import styles from "./ConfirmModal.module.css";

const ConfirmModal = ({ message, onConfirm, onCancel }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <p>{message}</p>
        <div className={styles.buttons}>
          <button onClick={onConfirm} className={styles.confirmButton}>
            بله
          </button>
          <button onClick={onCancel} className={styles.cancelButton}>
            انصراف
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
