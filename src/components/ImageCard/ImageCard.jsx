import styles from './ImageCard.module.css';

export default function ImageCard({ image, onSelect }) {
  return (
    <li className={styles.card} onClick={() => onSelect(image)}>
      <img src={image.urls.small} alt={image.alt_description} />
    </li>
  );
}
