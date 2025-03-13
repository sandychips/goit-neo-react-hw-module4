import { useEffect } from 'react';
import Modal from 'react-modal';
import styles from './ImageModal.module.css';

Modal.setAppElement('#root'); // Необхідно для доступності

export default function ImageModal({ image, onClose }) {
  // Закриття по ESC
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!image) return null; // Запобігаємо рендеру, якщо немає вибраного зображення

  return (
    <Modal
      isOpen={!!image}
      onRequestClose={onClose}
      className={styles.modal}
      overlayClassName={styles.overlay}
      shouldCloseOnOverlayClick={true} // Закриття при кліку на фон
    >
      <div className={styles.content}>
        <img src={image.urls.regular} alt={image.alt_description} className={styles.image} />
        <button className={styles.closeBtn} onClick={onClose}>✖</button>
      </div>
    </Modal>
  );
}
