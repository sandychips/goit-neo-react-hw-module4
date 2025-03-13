import ImageCard from '../ImageCard/ImageCard';
import styles from './ImageGallery.module.css';

export default function ImageGallery({ images, onSelect }) {
  return (
    <ul className={styles.gallery}>
      {images.map(img => (
        <ImageCard key={img.id} image={img} onSelect={onSelect} />
      ))}
    </ul>
  );
}
