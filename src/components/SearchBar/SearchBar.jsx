import { useState } from 'react';
import { toast } from 'react-hot-toast';
import styles from './SearchBar.module.css';

export default function SearchBar({ onSubmit }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!input.trim()) {
      toast.error('Будь ласка, введіть пошуковий запит!'); // Виводимо помилку
      return;
    }

    onSubmit(input);
    setInput(''); // Очищаємо поле після відправки
  };

  return (
    <header className={styles.searchBar}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search images..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
}
