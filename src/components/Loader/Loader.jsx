import MoonLoader from 'react-spinners/MoonLoader';

export const Loader = () => {
  return (
    <MoonLoader
      color="blue"
      size={50}
      aria-label="Loading Spinner"
      // isLoading={isLoading}
    />
  );
};
