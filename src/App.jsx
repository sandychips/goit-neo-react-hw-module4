import React, { useState, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ImageModal from './components/ImageModal/ImageModal';
import fetchImages from './services/api';
import styles from './App.module.css';

export default function App() {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [noResults, setNoResults] = useState(false);

  useEffect(() => {
    if (!query) return;

    async function getImages() {
      setIsLoading(true);
      setError(null);
      setNoResults(false);

      try {
        const data = await fetchImages(query, page);
        if (data.results.length === 0) {
          setNoResults(true);
        } else {
          setImages(prev => [...prev, ...data.results]);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    getImages();
  }, [query, page]);

  return (
    <div className={styles.container}>
      <Toaster position="top-right" reverseOrder={false} />
      <SearchBar onSubmit={setQuery} />
      {error && <ErrorMessage message={error} />}
      {noResults && <ErrorMessage message="Нічого не знайдено. Спробуйте інший запит." />}
      <ImageGallery images={images} onSelect={setSelectedImage} />
      {isLoading && <Loader />}
      {images.length > 0 && !isLoading && <LoadMoreBtn onClick={() => setPage(page + 1)} />}
      {selectedImage && (
        <ImageModal image={selectedImage} onClose={() => setSelectedImage(null)} />
      )}
    </div>
  );
}
