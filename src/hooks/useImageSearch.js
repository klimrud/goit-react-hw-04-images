import { useEffect, useState } from 'react';
import { getImages } from 'services/image-api';

export const useImageSearch = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    if (query === '') return;

    const fetchImages = async () => {
      try {
        const response = await getImages(query, page);
        if (response.hits.length === 0) {
          // console.log('length 0');
          setError(true);
          setDisabled(false);
        } else if (response.totalHits > 12) {
          // console.log('response.totalHits > 12', response.totalHits);
          setImages(images => [...images, ...response.hits]);
          setIsLoading(true);
          setDisabled(true);
          setError(false);
        }
        setIsLoading(false);
      } catch {
        console.error('Error');
        setError(true);
        setDisabled(false);
      }
    };

    fetchImages();
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
