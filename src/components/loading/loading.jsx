const loadingContainer = {
  background: 'content-box radial-gradient(skyblue, white)',
  position: 'relative',
  height: '100vh',
};

const loadingItem = {
  position: 'absolute',
  left: '50%',
  top: '50%',
  WebkitTransform: 'translate(-50%, -50%)',
  msTransform: 'translate(-50%, -50%)',
  transform: 'translate(-50%, -50%)',
  maxWidth: '460px',
  width: '100%',
  textAlign: 'center',
  lineHeight: 1.4,
};

function Loading() {
  return (
    <div style={loadingContainer}>
      <div style={loadingItem}>
        <img src="img/puff.svg" alt="Loading..."/>
      </div>
    </div>
  );
}

export default Loading;
