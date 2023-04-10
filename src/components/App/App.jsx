import { useState } from 'react';

import { useImageSearch } from 'hooks/useImageSearch';

import { Searchbar } from 'components/Searchbar';
import { ImageGallery } from 'components/ImageGallery';
import { Button } from 'components/Button';
import { Modal } from 'components/Modal';
// import { Loader } from 'components/Loader';
import { ErrorCard } from 'components/Error/ErrorCard';

import css from './App.module.css';

export const App = () => {
  const {
    images,
    error,
    isLoading,
    disabled,
    handleFormSubmit,
    handleLoadMore,
  } = useImageSearch();
 
  const [showModal, setShowModal] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState('');

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleImageClick = largeImageURL => {
    toggleModal();
    setLargeImageURL(largeImageURL);
  };

  return (
    <div className={css.app}>
      <Searchbar onSubmit={handleFormSubmit} />

      {isLoading && (
        <>
          {/* <Loader isLoading={isLoading} /> */}
          <h1>Loading...</h1>
        </>
      )}
      {error && (
          <ErrorCard>
            Whoops, something went wrong: !!!Sorry, there are no images matching
            your search query. Please try again.
          </ErrorCard>
        )}
      <ImageGallery images={images} onImageClick={handleImageClick} />

      {!disabled || <Button onClickLoader={handleLoadMore} />}
      
      {showModal && (
        <Modal onCloseModal={toggleModal}>
          <img src={largeImageURL} alt={''} width="800" height="600" />
        </Modal>
      )}
    </div>
  );
};
