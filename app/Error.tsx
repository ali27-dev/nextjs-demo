export default function Error() {
  return <div>
    <h1>Error</h1>
    <p>Something went wrong</p>
    <button onClick={() => {
      window.location.href = '/';
    }}>Go to Home</button>
  </div>;
}     