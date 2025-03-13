import { ClipLoader } from 'react-spinners';
import styles from './Loader.module.css';

export default function Loader() {
  return (
    <div className={styles.loader}>
      <ClipLoader color="#00bfff" size={50} />
    </div>
  );
}
