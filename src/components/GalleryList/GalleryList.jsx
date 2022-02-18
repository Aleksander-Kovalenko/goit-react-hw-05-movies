export const GalleryList = ({ children }) => {
  return (
    <>
      <ul
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
          margin: '-15px',
          padding: '10px',
        }}
      >
        {children}
      </ul>
    </>
  );
};
