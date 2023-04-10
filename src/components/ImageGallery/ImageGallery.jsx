import { PropTypes } from 'prop-types';
// import { ErrorCard } from 'components/ErrorCard';
// import { Loader } from 'components/Loader';
import { ImageGalleryItem } from 'components/ImageGalleryItem';


import css from './ImageGallery.module.css';

export const ImageGallery = ({ images = [], onImageClick }) => {
  return (
    <>
      {images && (
        <ul className={css.gallery}>
          {images.map(({ largeImageURL, webformatURL, tags, id }) => (
            <ImageGalleryItem
              key={largeImageURL}
              webformatURL={webformatURL}
              largeImageURL={largeImageURL}
              tags={tags}
              id={id}
              onImageClick={onImageClick}
            />
          ))}
        </ul>
      )}
    </>
  );
};

ImageGallery.propTypes = {
  onImageClick: PropTypes.func.isRequired,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    }).isRequired
  ),
};
