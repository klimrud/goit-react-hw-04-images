import { useEffect, useState } from 'react';
import { getImages } from 'services/image-api';

export const useImageSearch = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    if (query === '') return;

    const fetchImages = async () => {
      try {
        const response = await getImages(query, page);

        if (response.hits.length === 0) {
          setIsLoading(true);
          setError(true);
          setDisabled(false);
        } else if (response.totalHits > 12) {
          setIsLoading(true);
          setImages(images => [...images, ...response.hits]);

          setDisabled(true);
          setError(false);
        }
      } catch {
        console.error('Error');
        setError(true);
        setDisabled(false);
      }
    };

    fetchImages();
    setIsLoading(false);
  }, [page, query]);

  const handleFormSubmit = query => {
    setQuery(query);
    setPage(1);
    setImages([]);
  };
  const handleLoadMore = () => {
    setPage(page => page + 1);
  };

  return {
    images,
    error,
    isLoading,
    disabled,
    handleFormSubmit,
    handleLoadMore,
  };
};
