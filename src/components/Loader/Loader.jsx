import ClipLoader from 'react-spinners/ClipLoader';

export const Loader = ({ isLoading }) => {
  return (
    <ClipLoader
      color="blue"
      size={50}
      aria-label="Loading Spinner"
      isLoading={isLoading}
    />
  );
};
