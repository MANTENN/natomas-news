import Head from "next/head";
import Header from "./header";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Natomas News</title>
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
