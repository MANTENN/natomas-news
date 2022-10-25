import "../styles/globals.css";

function NatomasNews({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(<Component {...pageProps} />);
}

export default NatomasNews;
