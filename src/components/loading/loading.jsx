const loadingContainer = {
  background: 'content-box radial-gradient(black, darkred)',
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

const loadingText = {
  fontFamily: '\'Cabin\', sans-serif',
  color: '#fff',
  fontSize: '14px',
  fontWeight: 700,
}

const Loading= () => {
  return (
    <div style={loadingContainer}>
      <div style={loadingItem}>
        <span style={loadingText}>Loading...</span>
      </div>
    </div>
  );
}

export default Loading;
