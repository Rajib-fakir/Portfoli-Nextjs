// app/loading.tsx
export default function Loading() {
  return (
    <div style={styles.container}>
      <div style={styles.spinner}></div>
      <p style={styles.text}>Loading...</p>
    </div>
  );
}

const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9fafb',
  },
  spinner: {
    width: '50px',
    height: '50px',
    border: '6px solid #ccc',
    borderTop: '6px solid #3b82f6',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
  },
  text: {
    marginTop: '16px',
    fontSize: '16px',
    color: '#555',
  },
};

// CSS for animation (you can include this globally or with styled-jsx)
const styleSheet = `
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`;

if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.innerHTML = styleSheet;
  document.head.appendChild(style);
}