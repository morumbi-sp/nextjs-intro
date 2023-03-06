import NavBar from '@/components/NavBar';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <h2>This is from _app.js</h2>
    </>
  );
}

export default MyApp;
