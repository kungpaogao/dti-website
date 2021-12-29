import { AppProps } from "next/app";
import Layout from "../components/Layout";
import "inter-ui/inter.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
